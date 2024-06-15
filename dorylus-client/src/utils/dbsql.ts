class DBSQL {
    // @ts-ignore
    private db: Database;

    constructor(dbName: string, version: string, description: string, size: number) {
        // @ts-ignore
        this.db = openDatabase(dbName, version, description, size);
    }

    public createTable(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.db.transaction((tx: { executeSql: (arg0: string, arg1: never[], arg2: (tx: any, result: any) => void, arg3: (tx: any, error: any) => void) => void; }) => {
                tx.executeSql(
                    'SELECT name FROM sqlite_master WHERE type="table" AND name="channel"',
                    [],
                    (tx, result) => {
                        if (result.rows.length === 0) {
                            tx.executeSql(
                                'CREATE TABLE channel (channel_id TEXT PRIMARY KEY, uid TEXT, user_ids TEXT, content TEXT)',
                                [],
                                () => {
                                    resolve();
                                },
                                (tx: any, error: any) => {
                                    reject(error);
                                }
                            );
                        } else {
                            resolve();
                        }
                    },
                    (tx, error) => {
                        reject(error);
                    }
                );
            });
        });
    }

    public addChannel(channel_id: string, uid: string, user_ids: string[], content: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.db.transaction((tx: { executeSql: (arg0: string, arg1: string[], arg2: () => void, arg3: (tx: any, error: any) => void) => void; }) => {
                tx.executeSql(
                    'INSERT INTO channel (channel_id, uid, user_ids, content) VALUES (?, ?, ?, ?)',
                    [channel_id, uid, JSON.stringify(user_ids), content],
                    () => {
                        resolve();
                    },
                    (tx, error) => {
                        reject(error);
                    }
                );
            });
        });
    }

    public updateChannel(channel_id: string, user_ids: string[]): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.db.transaction((tx: { executeSql: (arg0: string, arg1: string[], arg2: () => void, arg3: (tx: any, error: any) => void) => void; }) => {
                tx.executeSql(
                    'UPDATE channel SET user_ids = ? WHERE channel_id = ?',
                    [JSON.stringify(user_ids), channel_id],
                    () => {
                        resolve();
                    },
                    (tx: any, error: any) => {
                        reject(error);
                    }
                );
            });
        });
    }

    public deleteChannel(channel_id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.db.transaction((tx: { executeSql: (arg0: string, arg1: string[], arg2: () => void, arg3: (tx: any, error: any) => void) => void; }) => {
                tx.executeSql(
                    'DELETE FROM channel WHERE channel_id = ?',
                    [channel_id],
                    () => {
                        resolve();
                    },
                    (tx, error) => {
                        reject(error);
                    }
                );
            });
        });
    }
}

export default DBSQL;