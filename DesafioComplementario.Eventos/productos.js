class Panaderia{
    constructor(name,price,type, images, cantidad){
        this.nombre = name;
        this.precio = price;
        this.tipo = type;
        this.imagenes = images;
        this.cantidad= cantidad || 0;
    }
    agregarCantidad(){
        this.cantidad++;
    }
}

const productos = [
    {
        nombre: 'Medialunas',
        precio: 60,
        tipo: 'dulces',
        imagenes: 'https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=943&q=80',
    },
    {
        nombre: 'Donas',
        precio: 120,
        tipo: 'sin relleno',
        imagenes: 'https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=943&q=80',
    },
    {
        nombre: 'Galletas',
        precio: 40,
        tipo: 'con chips',
        imagenes: 'https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=943&q=80',
    },
    {
        nombre: 'Cupcakes',
        precio: 70,
        tipo: 'clasicos',
        imagenes: 'https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=943&q=80',
    },
    {
        nombre: 'Macarons',
        precio: 80,
        tipo: 'frutos rojos',
        imagenes: 'https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=943&q=80',
    }
]

let tienda= [];
let carrito = [];

for(let i = 0 ; i < productos.length; i++){
    tienda.push(new Panaderia(productos[i].nombre, productos[i].precio, productos[i].tipo, productos[i].imagenes))
}


let container = document.getElementById("productos")
for(const factura of tienda){
    let div = document.createElement("div")
    div.style.width= "18rem";
    div.className= "card";
    div.innerHTML=`<img src=${factura.imagenes} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${factura.nombre}</h5>
        <p class="card-text">$ ${factura.precio}</p>
        <a href="#" class="btn btn-primary">Comprar</a>
    </div>`
    container.appendChild(div)
}