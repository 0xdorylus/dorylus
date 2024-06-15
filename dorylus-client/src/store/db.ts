import localforage from 'localforage';
export function getDB(database: string,
	table: string,
    itemKey: string
) {

    const db = localforage.createInstance({
        name: database,
        storeName: table,
        driver: localforage.INDEXEDDB
    });
    
}

