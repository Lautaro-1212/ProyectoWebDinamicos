import { redibujar } from "./view/Tabla.js"
import Producto from "./model/Producto.js";

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("agregar").addEventListener("click", agregarProducto)

    redibujar(Producto.listaProductos)
});

function agregarProducto(){

    let codigo = document.getElementById('codigo').value;
    let nombreProdcuto = document.getElementById('nombreProdcuto').value.trim();
    let precio = document.getElementById('precio').value;
    let stock = document.getElementById('stock').value;

    if(codigo && nombreProdcuto && precio && stock){
        Producto.listaProductos.push(new Producto(codigo, nombreProdcuto, precio, stock));

        redibujar(Producto.listaProductos);

        document.getElementById('codigo').value = "";
        document.getElementById('nombreProdcuto').value = "";
        document.getElementById('precio').value = "";
        document.getElementById('stock').value = "";

    } else {
        console.log("No se ha podido cargar el producto, por favor complete los campos")
    }
}

export function modificar(producto){
    producto.codigo = document.getElementById("codigoModificar").value;
    producto.nombre = document.getElementById("nombreProdcutoModificar").value;
    producto.precio = document.getElementById("precioModificar").value;
    producto.stock = document.getElementById("stockModificar").value;

    redibujar(Producto.listaProductos);

    const dialog = document.getElementById("popupModificar");
    dialog.close();
    dialog.innerHTML = "";
}

export function eliminarXId(id){
    Producto.listaProductos = Producto.listaProductos.filter( producto => producto.id !== id)

    redibujar(Producto.listaProductos);

    const dialog = document.getElementById("popupEliminar");
    dialog.close();
    dialog.innerHTML = "";
}