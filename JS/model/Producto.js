export default class Producto{
    static listaProductos = [];
    static id = 0;

    constructor(codigo, nombre, precio, stock){
        this.id = Producto.id++;
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}