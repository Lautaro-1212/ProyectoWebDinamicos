function crearDivPrincipal(){
    let div = document.createElement("div");
    div.classList.add("fila");
    return div;
}

function crearID(id){
    let div = document.createElement("div");
    div.classList.add("item");
    div.textContent = id;
    return div;
}

function crearCodigo(codigo){
    let div = document.createElement("div");
    div.classList.add("item");
    div.textContent = codigo;
    return div;
}

function crearNombre(nombre){
    let div = document.createElement("div");
    div.classList.add("item");
    div.textContent = nombre;
    return div;
}

function crearPrecio(precio){
    let div = document.createElement("div");
    div.classList.add("item");
    div.textContent = precio;
    return div;
}

function crearStock(stock){
    let div = document.createElement("div");
    div.classList.add("item");
    div.textContent = stock;
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

export function dibujar(productos){
    let contenedor = document.getElementById('tabla-productos');

    contenedor.innerHTML = "";

    productos.forEach(producto => {
        let fila = crearDivPrincipal();

        fila.appendChild(crearID(producto.id));
        fila.appendChild(crearCodigo(producto.codigo));
        fila.appendChild(crearNombre(producto.nombre));
        fila.appendChild(crearPrecio(producto.precio + "$"));
        fila.appendChild(crearStock(producto.stock));
        fila.appendChild(crearBotones());

        contenedor.appendChild(fila);
    });
}