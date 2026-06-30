export function abrirPopUpModificar(producto){

    let dialog = document.getElementById("popupModificar");

    //dialog.innerHTML = "";

    dialog.innerHTML = `
        <div>
            <p class="pop">Modifique el producto</p>
        </div>
    
        <div>
            <label style="margin-right: 8px;" class="texto">Codigo</label>
            <input type="text" class="inputs" placeholder="Ingrese el nuevo codigo del producto" id="codigoModificar" value="${producto.codigo}"></input>
        </div><br>

        <div>
            <label class="texto">Nombre </label>
            <input type="text" class="inputs" placeholder="Ingrese el nuevo nombre del producto" id="nombreProdcutoModificar" value="${producto.nombre}"></input>
        </div><br>

        <div>
            <label style="margin-right: 15px;" class="texto">Precio </label>
            <input type="text" class="inputs" placeholder="Ingrese el nuevo precio del producto" id="precioModificar" value="${producto.precio}"></input>
        </div><br>

        <div>
            <label style="margin-right: 20px;"class="texto">Stock </label>
            <input type="text" class="inputs" placeholder="Ingrese el nuevo stock del producto" id="stockModicar" value="${producto.stock}"></input>
        </div>
        
        <button commandfor="popupModificar" command="close" class="botones" id="modficar">
            <p>Confirmar</p>
        </button> 
        
        <button commandfor="popupModificar" command="close" class="botones">
            <p>Cancelar</p>
        </button> 
    `

    dialog.showModal();
}