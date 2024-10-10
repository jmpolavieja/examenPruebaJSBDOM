export function creaImagen() {
    const img = document.createElement('img');
    img.src = 'imagenes/elcano.jpg';
    img.alt = 'Buque escuela Elcano con sus velas desplegadas';
    img.classList = 'img-fluid overflow-hidden';
    img.style.maxHeight = '400px';
    return img;
}

export function creaTabla() {
    const arrayHuracanes = [
        { cat: 1, vel: '120-153' },
        { cat: 2, vel: '154-177' },
        { cat: 3, vel: '178-209' },
        { cat: 4, vel: '210-249' },
        { cat: 5, vel: 'Más de 250' },
    ]
    const table = document.createElement('table');
    // Creamos la cabecera
    const tr0 = document.createElement('tr');
    const th0 = document.createElement('th');
    const th1 = document.createElement('th');
    th0.innerHTML = 'Categoría';
    th1.innerHTML = 'Velocidad de los vientos (km/h)';
    tr0.appendChild(th0);
    tr0.appendChild(th1);
    table.appendChild(tr0);
    arrayHuracanes.forEach(huracan => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = huracan.cat;
        let td2 = document.createElement('td');
        td2.innerHTML = huracan.vel;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    });
    return table;
}

export function creaCard() {
    const card = '<div class="card mb-3 h-100">' +
                    '<div class="row g-0">'+
                        '<div class="col-md-4">' +
                            '<img src="imagenes/elcano.jpg" class="img-fluid rounded-start" alt="...">' +
                        '</div>'+
                        '<div class="col-md-8">' +
                            '<div class="card-body">' +
                                '<h5 class="card-title">Card title</h5>' +
                                '<p class="card-text">El card creado dede funciones.js</p>' +
                            '</div>' +
                        '</div>' +
                    '</div></div>';
    return card;
}

export function creaParrafo() {
    const p = document.createElement('p');
    const texto = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatum provident illo. Iusto unde error, nulla tenetur perspiciatis illo tempora, culpa voluptatibus eius quos commodi sit cum veritatis necessitatibus illum.";
    p.innerText = texto;
    return p;
}

export function creaLista() {
    const lista = ['Bananas', 'Manzanas', 'Melocotones', 'Naranjas'];
    const listaElement = document.createElement('ul');
    listaElement.className = 'list-group';
    lista.forEach( itemList => {
        let item = document.createElement('li');
        item.innerHTML=itemList;
        item.className = 'list-group-item';
        listaElement.appendChild(item);
    } );
    return listaElement;
}