import db from "../config/database.js";

export function findAll() {
    const resultado = db.prepare(`
        SELECT id, code, name, price, stock
        FROM product
    `).all();

    console.log("Se obtuvieron todos los productos");

    return resultado;
}

export function findById(id) {
    const resultado = db.prepare(`
        SELECT id, code, name, price, stock
        FROM product
        WHERE id = ?
    `).get(id);

    console.log("Se obtuvo el producto con id " + id);

    return resultado;
}

export function findByCode(code) {
    const resultado = db.prepare(`
        SELECT id, code, name, price, stock
        FROM product
        WHERE code = ?
    `).get(code);

    console.log("Se obtuvo el producto con código " + code);

    return resultado;
}

export function create(product) {
    const resultado = db.prepare(`
        INSERT INTO product (code, name, price, stock)
        VALUES (?, ?, ?, ?)
    `).run(
        product.code,
        product.name,
        product.price,
        product.stock
    );

    console.log("Se creó el producto con id " + resultado.lastInsertRowid);

    return {
        id: resultado.lastInsertRowid,
        ...product
    };
}

export function updateById(id, product) {
    const resultado = db.prepare(`
        UPDATE produc
        SET code = ?, name = ?, price = ?, stock = ?
        WHERE id = ?
    `).run(
        product.code,
        product.name,
        product.price,
        product.stock,
        id
    );

    console.log("Se actualizó el producto con id " + id);

    return resultado;
}

export function deleteById(id) {
    const resultado = db.prepare(`
        DELETE FROM product
        WHERE id = ?
    `).run(id);

    console.log("Se eliminó el producto con id " + id);

    return resultado;
}