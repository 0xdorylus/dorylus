// // db.ts
// import Dexie, { Table } from 'dexie';
//
// export interface User {
//     id?: string;
//     name: string;
//     age: number;
// }
//
// export class MySubClassedDexie extends Dexie {
//     // 'friends' is added by dexie when declaring the stores()
//     // We just tell the typing system this is the case
//     user!: Table<User>;
//
//     constructor() {
//         super('myDatabase');
//         this.version(1).stores({
//             user: '++id, name, age' // Primary key and indexed props
//         });
//     }
// }
//
// const db2 = new MySubClassedDexie();
// export const db = db2;

// Require minimongo
import minimongo from "minimongo";
var IndexedDb = minimongo.IndexedDb;
let db = new IndexedDb({namespace: "mydb"});
await db.addCollection("animals")
await db.addCollection("users")

// Create IndexedDb


// let db = new IndexedDb({namespace: "mydb"}, function() {
//     // Add a collection to the database
//     db.addCollection("animals", function() {
//        let  doc = { species: "dog", name: "Bingo" };
//
//         // Always use upsert for both inserts and modifies
//         db.animals.upsert(doc, function() {
//             // Success:
//
//             // Query dog (with no query options beyond a selector)
//             db.animals.findOne({ species:"dog" }, {}, function(res) {
//                 console.log("Dog's name is: " + res.name);
//             });
//         });
//     });
// }, function() { alert("some error!"); });

// Access collections via collection for Typescript
// await db.collection["animals"].upsert(doc)
export  default db;