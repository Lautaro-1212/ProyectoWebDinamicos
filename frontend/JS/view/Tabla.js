import { abrirPopUpModificar } from "./PopUpModificar.js";
import { abrirPopUpEliminar } from "./PopUpEliminar.js";

function crearDivPrincipal(){
    let div = document.createElement("div");
    div.classList.add("fila");
    return div;
}

function crearColumna(texto){
    let div = document.createElement("div");
    div.classList.add("item");
    div.textContent = texto;
    return div;
}

function crearBotones(producto){
    let div = document.createElement("div");
    div.classList.add("filaAccion");

    let botonModificar = document.createElement("button");
    botonModificar.textContent = "Modificar"
    botonModificar.classList.add("botonesAccion")
    botonModificar.addEventListener("click", () => {
        abrirPopUpModificar(producto);
    })

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar"
    botonEliminar.classList.add("botonesAccion")
    botonEliminar.addEventListener("click", () => {
        abrirPopUpEliminar(producto);
    })
    
    div.appendChild(botonModificar);
    div.appendChild(botonEliminar);
    return div;
}

export function redibujar(productos){
    let contenedor = document.getElementById('tabla-productos');

    contenedor.innerHTML = "";

    productos.forEach(producto => {
        let fila = crearDivPrincipal();

        fila.appendChild(crearColumna(producto.id));
        fila.appendChild(crearColumna(producto.codigo));
        fila.appendChild(crearColumna(producto.nombre));
        fila.appendChild(crearColumna(producto.precio + "$"));
        fila.appendChild(crearColumna(producto.stock));
        fila.appendChild(crearBotones(producto));

        contenedor.appendChild(fila);
    });
}