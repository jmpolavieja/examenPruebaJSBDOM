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
    const select = document.querySelector('select#entrada');
    entrada = select.value;
    const textoSeleccionado = select.options[select.selectedIndex].text;
    //alert(entrada + ' - ' + textoSeleccionado);
    if (zona !== '') {
        // Habilitar el botón
        document.querySelector('#aplicar').disabled = false;
    }
}

function enviar() {
    // Limpia la zona seleccionada
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

window.seleZona = seleZona;
window.seleInput = seleInput;

window.enviar = enviar;