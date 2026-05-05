const DB_NAME = 'burn-record-memory-backup';
const STORE_NAME = 'recordMemories';
const DB_VERSION = 1;

function openBackupDb() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB is not available.'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function withStore(mode, callback) {
  const db = await openBackupDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, mode);
    const store = transaction.objectStore(STORE_NAME);
    const result = callback(store);
    transaction.oncomplete = () => {
      db.close();
      resolve(result);
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
  });
}

export async function backupRecordMemory(memory) {
  if (!memory?.id || !memory.imageData) return;
  await withStore('readwrite', (store) => {
    store.put({
      id: memory.id,
      imageData: memory.imageData,
      updatedAt: new Date().toISOString(),
    });
  });
}

export async function restoreRecordMemoryImages(memories = []) {
  const missing = memories.filter((memory) => memory?.id && !memory.imageData);
  if (!missing.length) return { restored: false, memories };

  const backups = await withStore('readonly', (store) => Promise.all(missing.map((memory) => (
    new Promise((resolve) => {
      const request = store.get(memory.id);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
    })
  ))));

  const backupById = new Map(backups.filter(Boolean).map((backup) => [backup.id, backup.imageData]));
  if (!backupById.size) return { restored: false, memories };

  return {
    restored: true,
    memories: memories.map((memory) => (
      memory?.id && !memory.imageData && backupById.has(memory.id)
        ? { ...memory, imageData: backupById.get(memory.id) }
        : memory
    )),
  };
}
