import Toastify from '../lib/toastify/toastify-es.js';

export function Toast(mensaje, color) {
    Toastify({
        text: mensaje,
        duration: 2000,
        position:"right",
        style: {
            background: color,
        },
        close: true
    }).showToast();
}