///////////////MODAL MENSAJE IMPORTANTE//////////////////
const abrirModal = document.getElementById("modal-abrir")
const cerrarModal = document.getElementById("modal-cerrar")
const modalContainer = document.getElementsByClassName("modal-container")[0]

abrirModal.addEventListener("click", () =>{
    modalContainer.classList.add("modal-active")
})

cerrarModal.addEventListener("click", () =>{
    modalContainer.classList.remove("modal-active")
})

/////////////Texto bienvenida/////////////////

const contenedor = document.getElementById('textoservicios')

contenedor.innerHTML = `
                        <h5>¡Bienvenido/a! Te ofrecemos nuestros productos y servicios para tu mascota:</h5>
                    `



/////////////////SE CREA CONSTRUCTOR//////////////////

class ServiciosMascota{
    constructor(id ,name,price,size, images, cantidad){
        this.id = id;
        this.nombre = name;
        this.precio = price;
        this.tamaño = size;
        this.imagenes = images;
        this.cantidad= cantidad || 1;
    }
    agregarCantidad(){
        this.cantidad++;
    }
}



/////////////////////////ARRAY DE PRODUCTOS////////////////////////////

const productos = [
    {
        id: 1,
        nombre: "Vacunas",
        precio: 1100,
        tamaño: "Único",
        imagenes: "../img/vacunacion.jpg",
    },
    {
        id: 2,
        nombre: "Chip Identificador",
        precio: 4000,
        tamaño: "Único",
        imagenes: "../img/chipidentificador.jfif",
    },
    {
        id: 5, 
        nombre: "Jaula",
        precio: 32000,
        tamaño: "Grande",
        imagenes: "../img/transportadora.jpg",
    },
    {
        id: 6,
        nombre: "Canil",
        precio: 9000,
        tamaño: "Chico",
        imagenes: "../img/canil.png",
    },
    {
        id: 7, 
        nombre: "Consulta veterinaria",
        precio: 1300,
        tamaño: "Único",
        imagenes: "../img/consulta.jpg",
    },
    {
        id: 9,
        nombre: "Bebedero",
        precio: 450,
        tamaño: "Único",
        imagenes: "../img/bebedero.jfif",
    },
    {
        id: 10,
        nombre: "Comedero",
        precio: 400,
        tamaño: "Único",
        imagenes: "../img/comedero.jpg",
    },
]


//////Creo los arrays de tienda y carrito y a éste último con el método push le agrego los productos/////////


let tienda= [];
let carrito = [];

for(let i = 0 ; i < productos.length; i++){
    tienda.push(new ServiciosMascota(productos[i].id, productos[i].nombre, productos[i].precio, productos[i].tamaño, productos[i].imagenes))
}

let container = document.getElementById("productos")
for(const producto of tienda){
    let div = document.createElement("div")
    div.style.width= "18rem";
    div.className= "card";
    div.innerHTML=`<div class="containercard">
                        <img src=${producto.imagenes} class="foto card-img-top" alt="producto">
                        <div class="card-body">
                            <h5 class="card-title textonombre">${producto.nombre}</h5>
                            <div class="card-text">
                                <p>Precio: $${producto.precio}<br>
                                Tamaño: ${producto.tamaño}</p>
                            </div>
                            <button id=${producto.id} class="cuerpobtn btn btn-primary">Comprar</button>
                        </div>  
                    </div>`
    container.appendChild(div)
    document.getElementById(`${producto.id}`).addEventListener("click", () => comprarServicio(producto))
}



/////////////// Función donde se agregan productos y se renderiza en el contador del carrito, se carga a local storage


function comprarServicio(producto) {
    if (carrito.find(element => element.nombre === producto.nombre)){
        producto.agregarCantidad()
    } else {
        carrito.push(producto)
    }
    let total = 0; 
    let contador = document.getElementById("contadorCarrito")
    for(let i=0; i< carrito.length; i++){
        total += carrito[i].cantidad
    }
    contador.innerHTML= total


    console.log(carrito)


    localStorage.setItem("carrito", JSON.stringify(carrito))
}

///////Recupero datos del carrito de local storage

function recuperarCarrito () {
    if (localStorage.getItem('carrito') !== null) {

        carrito = JSON.parse(localStorage.getItem('carrito'));
    }

    let total = 0; 
    let contador = document.getElementById("contadorCarrito")
    for(let i=0; i< carrito.length; i++){
        total += carrito[i].cantidad
    }
    contador.innerHTML= total
}


recuperarCarrito()


console.log(carrito)


//////////////////////

