import db from "../config/database";

export function startBDD(){
    db.exec(`
        CREATE TABLE IF NOT EXISTS product(
            id INTEGER PRIMARY KEY,
            code INTEGER NOT NULL,
            name TEXT NOT NULL,
            price INTEGER NOT NULL,
            stock INTEGER NOT NULL
        );    
    `)

    console.log("The database was created successfully.");
}