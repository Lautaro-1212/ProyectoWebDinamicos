import { dibujar } from "./view/Main.js"
import Producto from "./model/Producto.js";

document.addEventListener("DOMContentLoaded", () => {
    dibujar(Producto.productos)
});