import { redibujar } from "./view/Main.js"
import Producto from "./model/Producto.js";

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("agregar").addEventListener("click", agregarProducto)

    redibujar(Producto.listaProductos)
});

function agregarProducto(){

    let codigo = document.getElementById('codigo').value;
    let nombreProdcuto = document.getElementById('nombreProdcuto').value;
    let precio = document.getElementById('precio').value;
    let stock = document.getElementById('stock').value;

    Producto.listaProductos.push(new Producto(codigo, nombreProdcuto, precio, stock));

    redibujar(Producto.listaProductos);

    document.getElementById('codigo').value = "";
    document.getElementById('nombreProdcuto').value = "";
    document.getElementById('precio').value = "";
    document.getElementById('stock').value = "";
}