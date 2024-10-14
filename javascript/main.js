// Añadir las importaciones de las funciones que crean la imagen, la tabla, el párrafo y l lista

import { creaImagen, creaLista, creaParrafo, creaTabla } from "./funciones.js";

// Variables para guardar la zona y la entrada
let zona = '';
let entrada = '';

// Esta función guarda la zona seleccionada
function seleZona() {
    // Selecciona la zona del select elegir zona y lo guarda
    zona = document.querySelector('#zona').value;
    // Si hay entrada, habilito el botón aplicar
    if (entrada != '') {
        document.querySelector('#aplicar').disabled = false;
    }
    
}

// Esta función guarda la entrada seleccionada
function seleInput() {
    // Selecciona la entrada del select elegir entrada y la guarda
    entrada = document.querySelector('#entrada').value;
    // Si hay zona elegida, hablitar el botón aplicar
    if (zona != '') {
        document.querySelector('#aplicar').disabled = false;
    }
    
}

/* La función enviar llama a la función importada según 
la entrada seleccionada y lo coloca en la zona seleccionada. */
function enviar() {
    // Limpiar la zona seleccionada (para que no se coloquen más de una entrada en la zona)
    document.querySelector(`#${zona}`).innerHTML = "";
    /* comprueba cual es la zona seleccionada y ejecuta la función de creación
    correspondiente (switch)*/
    switch (entrada) {
        case 'p':
            document.querySelector(`#${zona}`).append(creaParrafo());
            break;
        case 'img':
            document.querySelector(`#${zona}`).append(creaImagen());
            break;
        case 'table':
            document.querySelector(`#${zona}`).append(creaTabla());
            break;
        case 'list':
            document.querySelector(`#${zona}`).append(creaLista());
            break;
    }
    
}

function limpiar() {
    document.querySelector('#A').innerHTML = "";
    document.querySelector('#B').innerHTML = "";
    document.querySelector('#C').innerHTML = "";
    document.querySelector('#D').innerHTML = "";
}

// Asignación de funciones al objeto window
window.enviar = enviar;
window.seleZona = seleZona;
window.seleInput = seleInput;
window.limpiar = limpiar;