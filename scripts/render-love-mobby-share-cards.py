from pathlib import Path
import re
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SPEC = ROOT / "love_mobby_share_card_spec_type_name_images.md"
IMAGE_DIR = ROOT / "docs" / "image" / "lovemobby"
OUTPUT_DIR = ROOT / "docs" / "image" / "lovemobby-share-cards"

WIDTH = 1414
HEIGHT = 2000
FONT_SANS = Path("C:/Windows/Fonts/NotoSansJP-VF.ttf")
FONT_SERIF = Path("C:/Windows/Fonts/NotoSerifJP-VF.ttf")
FOOTER_MESSAGE = "あなたの記憶がいつまでも鮮やかに豊かであり続けますように"
TYPE_CODE_FIXES = {
    "SHAO": "SLAO",
    "SHAC": "SLAC",
}


def font(path, size):
    return ImageFont.truetype(str(path), size)


def hex_to_rgb(value):
    value = value.strip().lstrip("#")
    if len(value) != 6:
        return (180, 140, 140)
    return tuple(int(value[index:index + 2], 16) for index in (0, 2, 4))


def mix(first, second, amount):
    a = hex_to_rgb(first) if isinstance(first, str) else first
    b = hex_to_rgb(second) if isinstance(second, str) else second
    return tuple(round(a[index] * (1 - amount) + b[index] * amount) for index in range(3))


def text_size(draw, text, font_obj):
    box = draw.textbbox((0, 0), text, font=font_obj)
    return box[2] - box[0], box[3] - box[1]


def wrap_text(draw, text, font_obj, max_width):
    lines = []
    current = ""
    for char in text:
        candidate = current + char
        if text_size(draw, candidate, font_obj)[0] <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = char
    if current:
        lines.append(current)
    return lines


def draw_text(draw, xy, text, font_obj, fill, max_width=None, line_height=None, center=False):
    x, y = xy
    lines = wrap_text(draw, text, font_obj, max_width) if max_width else [text]
    line_height = line_height or int(font_obj.size * 1.45)
    for index, line in enumerate(lines):
        tx = x
        if center and max_width:
            line_width, _ = text_size(draw, line, font_obj)
            tx = x + (max_width - line_width) / 2
        draw.text((tx, y + index * line_height), line, font=font_obj, fill=fill)
    return y + len(lines) * line_height


def rounded_box(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def read_list(block, label):
    match = re.search(rf"- {re.escape(label)}:\n((?:  - .+\n)+)", block)
    if not match:
        return []
    return [line.strip()[2:].strip() for line in match.group(1).splitlines()]


def normalize_type_codes(items):
    normalized = []
    for item in items:
        for wrong, right in TYPE_CODE_FIXES.items():
            item = re.sub(rf"\b{wrong}\b", right, item)
        normalized.append(item)
    return normalized


def read_field(block, label):
    match = re.search(rf"- {re.escape(label)}:\s*(.+)", block)
    return match.group(1).strip() if match else ""


def read_style(block, number):
    start = re.search(rf"- 恋愛スタイル{number}:\n", block)
    if not start:
        return {"heading": "", "body": ""}
    rest = block[start.end():]
    rest = re.split(r"\n- 恋愛スタイル\d:|\n- 魅力タグ:|\n- 相性が良いタイプ:", rest, maxsplit=1)[0]
    heading = re.search(r"  - 見出し:\s*(.+)", rest)
    body = re.search(r"  - 本文:\s*(.+)", rest)
    return {
        "heading": heading.group(1).strip() if heading else "",
        "body": body.group(1).strip() if body else "",
    }


def parse_spec():
    text = SPEC.read_text(encoding="utf-8")
    sections = re.split(r"\n---\n\n## ([A-Z]{4}) ([^\n]+)\n\n", text)
    cards = []
    for index in range(1, len(sections), 3):
        code = sections[index].strip()
        heading_name = sections[index + 1].strip()
        block = sections[index + 2]
        if code == "6.":  # defensive guard for later numbered sections
            continue
        cards.append({
            "code": code,
            "typeName": read_field(block, "タイプ名") or heading_name,
            "subCopy": read_field(block, "サブコピー"),
            "mainMessage": read_field(block, "メインメッセージ"),
            "summary": read_list(block, "要約説明"),
            "keywords": read_list(block, "恋のキーワード"),
            "styles": [read_style(block, number) for number in (1, 2, 3)],
            "charmTags": read_list(block, "魅力タグ"),
            "matches": normalize_type_codes(read_list(block, "相性が良いタイプ")),
            "hint": read_field(block, "恋のヒント"),
            "accent": read_field(block, "accent color") or "#F48FB1",
            "bodyColor": read_field(block, "body color"),
        })
    if len(cards) != 16:
        raise RuntimeError(f"Expected 16 card specs, found {len(cards)}.")
    return cards


def gradient_background(top, bottom):
    image = Image.new("RGB", (WIDTH, HEIGHT), top)
    top_rgb = hex_to_rgb(top)
    bottom_rgb = hex_to_rgb(bottom)
    pixels = image.load()
    for y in range(HEIGHT):
        ratio = y / (HEIGHT - 1)
        color = tuple(round(top_rgb[i] * (1 - ratio) + bottom_rgb[i] * ratio) for i in range(3))
        for x in range(WIDTH):
            pixels[x, y] = color
    return image.convert("RGBA")


def paste_character(card, image_path, box):
    character = Image.open(image_path).convert("RGBA")
    max_width = box[2] - box[0]
    max_height = box[3] - box[1]
    character.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)

    shadow = Image.new("RGBA", character.size, (0, 0, 0, 0))
    shadow.alpha_composite(character)
    shadow = shadow.filter(ImageFilter.GaussianBlur(16))
    shadow_alpha = shadow.getchannel("A").point(lambda value: int(value * 0.18))
    shadow.putalpha(shadow_alpha)

    x = box[0] + (max_width - character.width) // 2
    y = box[1] + (max_height - character.height) // 2
    card.alpha_composite(shadow, (x, y + 22))
    card.alpha_composite(character, (x, y))


def draw_section_title(draw, x, y, title, accent_rgb, ink):
    draw.text((x, y), title, font=font(FONT_SANS, 25), fill=accent_rgb)
    draw.line((x, y + 42, x + 300, y + 42), fill=(*mix(accent_rgb, (255, 255, 255), 0.35), 255), width=3)
    return y + 56


def draw_card(spec):
    accent_rgb = hex_to_rgb(spec["accent"])
    paper = mix(accent_rgb, (255, 255, 255), 0.9)
    paper_hex = "#%02x%02x%02x" % paper
    ink = mix(accent_rgb, (45, 36, 32), 0.72)

    card = gradient_background(paper_hex, "#fffaf4")
    draw = ImageDraw.Draw(card)

    draw.rectangle((54, 54, WIDTH - 54, HEIGHT - 54), outline=(*mix(ink, (255, 255, 255), 0.68), 170), width=2)

    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse((850, -180, 1540, 500), fill=(*accent_rgb, 46))
    glow_draw.ellipse((-220, 1280, 520, 2120), fill=(*accent_rgb, 38))
    glow = glow.filter(ImageFilter.GaussianBlur(6))
    card.alpha_composite(glow)
    draw = ImageDraw.Draw(card)

    draw.text((88, 82), "恋愛モビー診断", font=font(FONT_SANS, 34), fill=ink)
    intro_font = font(FONT_SANS, 25)
    draw.text((88, 132), "診断結果シェアカード", font=intro_font, fill=mix(ink, (255, 255, 255), 0.24))

    badge_w, badge_h = 142, 58
    rounded_box(draw, (WIDTH - 88 - badge_w, 82, WIDTH - 88, 82 + badge_h), 29, (*accent_rgb, 230))
    code_font = font(FONT_SERIF, 32)
    code_w, code_h = text_size(draw, spec["code"], code_font)
    draw.text((WIDTH - 88 - badge_w + (badge_w - code_w) / 2, 90), spec["code"], font=code_font, fill=(255, 255, 255))

    title_font = font(FONT_SANS, 86 if len(spec["typeName"]) <= 8 else 76)
    draw_text(draw, (88, 210), spec["typeName"], title_font, ink, max_width=760, line_height=96)
    draw_text(draw, (92, 405), spec["subCopy"], font(FONT_SANS, 32), mix(ink, (255, 255, 255), 0.1), max_width=730, line_height=48)

    image_path = IMAGE_DIR / f"{spec['typeName']}.webp"
    if not image_path.exists():
        raise RuntimeError(f"Missing character image: {image_path}")
    draw.rounded_rectangle((835, 190, 1278, 652), radius=42, fill=(255, 255, 255, 120), outline=(*accent_rgb, 110), width=2)
    paste_character(card, image_path, (850, 205, 1263, 635))

    rounded_box(draw, (88, 526, 770, 646), 32, (*accent_rgb, 42), outline=(*accent_rgb, 120), width=2)
    draw_text(draw, (126, 552), spec["mainMessage"], font(FONT_SANS, 37), ink, max_width=610, line_height=54, center=True)

    y = 700
    y = draw_section_title(draw, 88, y, "あなたはこんな人！", accent_rgb, ink)
    summary_font = font(FONT_SANS, 25)
    for line in spec["summary"][:3]:
        draw.ellipse((94, y + 12, 104, y + 22), fill=accent_rgb)
        y = draw_text(draw, (122, y), line, summary_font, ink, max_width=1180, line_height=39) + 5

    y += 12
    y = draw_section_title(draw, 88, y, "恋のキーワード", accent_rgb, ink)
    chip_x = 88
    for keyword in spec["keywords"][:3]:
        chip_w = text_size(draw, keyword, font(FONT_SANS, 24))[0] + 42
        rounded_box(draw, (chip_x, y, chip_x + chip_w, y + 58), 29, (255, 255, 255, 190), outline=(*accent_rgb, 150), width=2)
        draw.text((chip_x + 21, y + 12), keyword, font=font(FONT_SANS, 24), fill=ink)
        chip_x += chip_w + 18
    y += 86

    y = draw_section_title(draw, 88, y, "あなたの恋愛スタイル", accent_rgb, ink)
    card_gap = 18
    style_w = 392
    style_h = 226
    for index, style in enumerate(spec["styles"]):
        x = 88 + index * (style_w + card_gap)
        rounded_box(draw, (x, y, x + style_w, y + style_h), 22, (255, 255, 255, 178), outline=(*mix(accent_rgb, (255, 255, 255), 0.28), 170), width=2)
        draw.text((x + 24, y + 22), style["heading"], font=font(FONT_SANS, 24), fill=ink)
        draw_text(draw, (x + 24, y + 72), style["body"], font(FONT_SANS, 21), mix(ink, (255, 255, 255), 0.12), max_width=style_w - 48, line_height=33)
    y += style_h + 42

    left_x = 88
    right_x = 732
    box_y = y
    box_h = 218
    rounded_box(draw, (left_x, box_y, 668, box_y + box_h), 28, (255, 255, 255, 174), outline=(*accent_rgb, 115), width=2)
    draw_section_title(draw, left_x + 28, box_y + 26, "こんな人と相性がいいよ", accent_rgb, ink)
    match_font = font(FONT_SANS, 25)
    my = box_y + 98
    for match in spec["matches"][:3]:
        draw.text((left_x + 38, my), match, font=match_font, fill=ink)
        my += 38

    rounded_box(draw, (right_x, box_y, WIDTH - 88, box_y + box_h), 28, (255, 255, 255, 174), outline=(*accent_rgb, 115), width=2)
    draw_section_title(draw, right_x + 28, box_y + 26, "あなたの魅力", accent_rgb, ink)
    tx = right_x + 38
    ty = box_y + 102
    for tag in spec["charmTags"][:3]:
        tag_w = text_size(draw, tag, font(FONT_SANS, 25))[0] + 38
        rounded_box(draw, (tx, ty, tx + tag_w, ty + 52), 26, (*accent_rgb, 210))
        draw.text((tx + 19, ty + 10), tag, font=font(FONT_SANS, 25), fill=(255, 255, 255))
        tx += tag_w + 14
    y += box_h + 44

    y = draw_section_title(draw, 88, y, "もっと素敵な恋をするためのヒント", accent_rgb, ink)
    rounded_box(draw, (88, y, WIDTH - 88, y + 154), 30, (255, 255, 255, 178), outline=(*accent_rgb, 120), width=2)
    draw_text(draw, (122, y + 28), spec["hint"], font(FONT_SANS, 24), ink, max_width=WIDTH - 244, line_height=38)

    footer_font = font(FONT_SANS, 24)
    footer_w, _ = text_size(draw, FOOTER_MESSAGE, footer_font)
    draw.text(((WIDTH - footer_w) / 2, HEIGHT - 112), FOOTER_MESSAGE, font=footer_font, fill=mix(ink, (255, 255, 255), 0.26))
    brand_font = font(FONT_SERIF, 28)
    draw.text((88, HEIGHT - 112), "Love Mobby", font=brand_font, fill=accent_rgb)

    return card.convert("RGB")


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    specs = parse_spec()
    for spec in specs:
        image = draw_card(spec)
        image.save(OUTPUT_DIR / f"{spec['code']}-{spec['typeName']}.png", quality=95)
    print(f"Rendered {len(specs)} spec-based PNG cards in {OUTPUT_DIR.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
