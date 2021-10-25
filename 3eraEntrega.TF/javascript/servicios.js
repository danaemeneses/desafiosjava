
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})
modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation()
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

const contenedorProductos = document.getElementById('contenedorProductos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const carrito = []

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
        id: 3,
        nombre: "Jaula chica",
        precio: 18000,
        tamaño: "Chico",
        imagenes: "../img/transportadora.jpg",
    },
    {
        id: 4, 
        nombre: "Jaula mediana",
        precio: 25000,
        tamaño: "Mediano",
        imagenes: "../img/transportadora.jpg",
    },
    {
        id: 5, 
        nombre: "Jaula grande",
        precio: 32000,
        tamaño: "Grande",
        imagenes: "../img/transportadora.jpg",
    },
    {
        id: 6,
        nombre: "Canil chico",
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

const mostrarProductos = (array) => {
    contenedorProductos.innerHTML = ''
    
    array.forEach( (producto) => {
        let div = document.createElement("div")
        div.style.width= "18rem";
        div.className= "card";
        div.innerHTML =`<div class="containercard">
                        <img src=${producto.imagenes} class="foto card-img-top" alt="producto">
                            <div class="card-body">
                                <h5 class="card-title textonombre">${producto.nombre}</h5>
                                <div class="card-text">
                                    <p>Precio: $${producto.precio}<br>
                                    Tamaño: ${producto.tamaño}</p>
                                </div>
                                <button onclick="agregarAlCarrito(${producto.id})" class="cuerpobtn btn btn-primary">Agregar <i class="fas fa-shopping-cart"></i></button>
                            </div>  
                        </div>`
        
        contenedorProductos.appendChild(div)
    } )
}

mostrarProductos(productos)

/////////////// Función donde se agregan productos y se renderiza en el contador del carrito, se carga a local storage


const agregarAlCarrito = (itemId) => {

    const productoEnCarrito = carrito.find((prod) => prod.id === itemId)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++
    } else {

        const producto = productos.find( (prod) => prod.id === itemId)
    
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        })
    }
    

    console.log(carrito)
    actualizarCarrito()

    //se carga carrito a LS
    localStorage.setItem("carrito", JSON.stringify(carrito))
}



const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                <p>${producto.nombre}</p>
                <p>Valor: $${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
             `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
}


///Recupero datos del carrito de local storage
function recuperarCarrito () {
    carritoLS = JSON.parse(localStorage.getItem('carrito'));

    if (localStorage.getItem('carrito') !== null) {
        for(let i = 0 ; i < carritoLS.length; i++){
            carrito.push(new ServiciosMascota(carritoLS[i].id, carritoLS[i].nombre, carritoLS[i].precio, carritoLS[i].tamaño, carritoLS[i].imagenes, carritoLS[i].cantidad))
        }
    }

    let total = 0; 
    let contador = document.getElementById("contadorCarrito")
    for(let i=0; i< carrito.length; i++){
        total += carrito[i].cantidad
    }
    contador.innerHTML= total

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                <p>${producto.nombre}</p>
                <p>Valor: $${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
             `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
}


recuperarCarrito()


console.log(carrito)
