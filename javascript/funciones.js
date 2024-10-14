export function creaImagen() {
    // Función que crea un elemento imagen, completa sus clases y el src (puedes usar la imagen adjunta u otra)
    const imagen = document.createElement('img');
    imagen.className = "img-fluid";
    imagen.src = "./imagenes/elcano.jpg";
    // Devuelve el elemento imagen
    return imagen;
}

export function creaTabla() {
    const arrayHuracanes = [
        { cat: 1, vel: '120-153' },
        { cat: 2, vel: '154-177' },
        { cat: 3, vel: '178-209' },
        { cat: 4, vel: '210-249' },
        { cat: 5, vel: 'Más de 250' },
    ]
    // Crea una tabla con los datos de este array
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.innerText = "Categoría";
    const th2 = document.createElement('th');
    th2.innerText = "Velocidad";
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);
    // Hasta aquí hemos creado la tabla y su fila de títulos
    arrayHuracanes.forEach( item => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.innerText = item.cat;
        td2.innerText = item.vel;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    });
    table.className = "table";
    // Devuelvo la tabla formada
    return table;
}

export function creaParrafo() {
    // Crea un párrafo con texto genérico
    const p = document.createElement('p');
    p.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae a maiores neque suscipit! Animi corrupti ut aspernatur nesciunt ipsam atque odio veniam vitae nemo! Totam maiores eos autem accusamus doloribus!";
    return p;
}

export function creaLista() {
    const lista = ['Bananas', 'Manzanas', 'Melocotones', 'Naranjas'];
    // Crea una lista con este array y la devuelve
    const ul = document.createElement('ul');
    ul.className="list-group";
    // Por cada fruta en la lista, añadiré un elemento li a la lista ul
    lista.forEach( fruta => {
        const li = document.createElement('li');
        li.innerText = fruta;
        li.className = "list-group-item";
        ul.appendChild(li);
    } );
    // Devuelvo la lista
    return ul;
}