import { creaImagen, creaTabla, creaParrafo, creaLista } from "./funciones.js";

let zona = '';
let entrada = '';

function seleZona() {
    const select = document.querySelector('select#zona');
    zona = select.value;
    const tetoSelecioando = select.options[select.selectedIndex].text;
    //alert(`Valor: ${zona}, Texto: ${tetoSelecioando}`);
    if (entrada !== '') {
        // Habilitar el botón
        document.querySelector('#aplicar').disabled = false;
    }
}

function seleInput() {
    // Seecciona la entrada del select elegir entrada
    const select = document.querySelector('select#entrada');
    entrada = select.value;
    // Si hay zoona elegida hablitar el botón enviar
    if (zona !== '') {
        // Habilitar el botón
        document.querySelector('#aplicar').disabled = false;
    }
}
/* La función enviar llama a la función importada según la entrada seleccionada y lo coloca en la zona seleccionada. */
function enviar() {
    // Limpiar la zona seleccionada
    document.querySelector(`#${zona}`).innerHTML = '';
    // comprueba cual es la zona seleccionada y ejecuta la función de creación
    // correspondiente (switch)
    switch (entrada) {
        case 'img':
            document.querySelector(`#${zona}`).append(creaImagen());
            break;
        case 'table':
            document.querySelector(`#${zona}`).append(creaTabla());
            break;
        case 'list':
            document.querySelector(`#${zona}`).append(creaLista());
            break;
        case 'p':
            document.querySelector(`#${zona}`).append(creaParrafo());
            break;
        default:
            break;
    }
}

// Asignación de funciones al objeto window
window.seleZona = seleZona;
window.seleInput = seleInput;

window.enviar = enviar;