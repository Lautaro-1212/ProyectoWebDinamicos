export default class Producto{
    static productos = [];

    constructor(id, codigo, nombre, precio, stock){
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}