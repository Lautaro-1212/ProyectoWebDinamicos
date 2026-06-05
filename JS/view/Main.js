function crearDivPrincipal(){
    let div = document.createElement("div");
    div.classList.add("fila");
    return div;
}

function crearID(){
    let div = document.createElement("div");
    div.classList.add("item");
    div.textContent = 2;
    return div;
}

function crearCodigo(){
    let div = document.createElement("div");
    div.classList.add("item");
    div.textContent = 2341;
    return div;
}

function crearNombre(){
    let div = document.createElement("div");
    div.classList.add("item");
    div.textContent = "Papas";
    return div;
}

function crearPrecio(){
    let div = document.createElement("div");
    div.classList.add("item");
    div.textContent = 2000 + "$";
    return div;
}

function crearStock(){
    let div = document.createElement("div");
    div.classList.add("item");
    div.textContent = 2000;
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

export function dibujar(){
    let div = document.getElementById('contenedor');
    
    let fila = crearDivPrincipal()

    fila.appendChild(crearID());
    fila.appendChild(crearCodigo());
    fila.appendChild(crearNombre());
    fila.appendChild(crearPrecio());
    fila.appendChild(crearStock());
    fila.appendChild(crearBotones());

    div.appendChild(fila);
}