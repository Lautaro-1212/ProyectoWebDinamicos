import { redibujar } from "./view/Tabla.js"
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

export function modificarXId(producto){
    producto.codigo = document.getElementById("codigoModificar").value;
    producto.nombre = document.getElementById("nombreProdcutoModificar").value;
    producto.precio = document.getElementById("precioModificar").value;
    producto.stock = document.getElementById("stockModificar").value;

    redibujar(Producto.listaProductos);

    const dialog = document.getElementById("popupModificar");
    dialog.close();
    dialog.innerHTML = "";
}