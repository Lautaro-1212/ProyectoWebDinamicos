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

function crearBotones(){
    let div = document.createElement("div");
    div.classList.add("filaAccion");

    let button1 = document.createElement("button");
    button1.textContent = "Modificar"
    button1.classList.add("botonesAccion")

    let button2 = document.createElement("button");
    button2.textContent = "Eliminar"
    button2.classList.add("botonesAccion")
    
    div.appendChild(button1);
    div.appendChild(button2);
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
        fila.appendChild(crearBotones());

        contenedor.appendChild(fila);
    });
}