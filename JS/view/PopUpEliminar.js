import { eliminarXId } from "../app.js";

export function abrirPopUpEliminar(producto){
    let dialog = document.getElementById("popupEliminar");
    
        dialog.innerHTML = `
            <div>
                <p class="pop">¿Desea eliminar este producto?</p>
            </div>
        
            <div>
                <p style="margin-right: 8px;" class="texto" id="codigoEliminar">Codigo: ${producto.codigo}</p>
            </div>
    
            <div>
                <p class="texto" id="nombreProdcutoEliminar">Nombre: ${producto.nombre} </p>
            </div>
    
            <div>
                <p style="margin-right: 15px;" class="texto" id="precioEliminar">Precio: ${producto.precio} </p>
            </div>
    
            <div>
                <p style="margin-right: 20px;"class="texto" id="stockEliminar">Stock: ${producto.stock}</>
            </div>
    
            <button commandfor="popupEliminar" command="close" class="botones" id="eliminar">
                <p>Confirmar</p>
            </button> 
            
            <button commandfor="popupEliminar" command="close" class="botones">
                <p>Cancelar</p>
            </button> 
        `
    
        const botonEliminar = document.getElementById("eliminar");
    
        botonEliminar.addEventListener("click", () => {
            eliminarXId(producto.id)
        })
    
        dialog.showModal();
}