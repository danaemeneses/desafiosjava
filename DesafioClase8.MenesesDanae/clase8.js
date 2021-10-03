////Genero texto de bienvenida, usuario ingresa nombre por prompt

const contenedor = document.getElementById('textoservicios')

let nombre = prompt("Ingrese su nombre")
let tipoAnimal = prompt ("Ingrese tipo de animal: (gato/perro)")

contenedor.innerHTML = `
                        <h5>Bienvenido/a ${nombre}. Te ofrecemos nuestros servicios para tu ${tipoAnimal}:</h5>
                    `

            
////se crean tarjetas de productos con el método createElement que nos permite crear un nuevo nodo

const arrayServicios = [
    {img: 'https://via.placeholder.com/150', nombre: "Vacuna", precio: 1100},
    {img: 'https://via.placeholder.com/150', nombre: "Chip Identificador", precio: 4000},
    {img: 'https://via.placeholder.com/150', nombre: "Jaula chica", precio: 18000},
    {img: 'https://via.placeholder.com/150', nombre: "Jaula Mediana", precio: 25000},
    {img: 'https://via.placeholder.com/150', nombre: "Jaula Grande", precio: 32000},
    {img: 'https://via.placeholder.com/150', nombre: "Canil chico", precio: 9000},
    {img: 'https://via.placeholder.com/150', nombre: "Canil mediano", precio: 15000},
    {img: 'https://via.placeholder.com/150', nombre: "Consulta veterinaria", precio: 1300},
    {img: 'https://via.placeholder.com/150', nombre: "Bebedero", precio: 450},
]

const contenedorServicios = document.getElementById('productos')

arrayServicios.forEach((producto) => {
    const div = document.createElement('div')
    div.className = "card-img-top"
    div.style = "width: 18rem"
    
    div.innerHTML = `
                    <img src=${producto.img} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title textonombre">${producto.nombre}</h5>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <a href="#" class="btn btn-success boton">Agregar</a>
                    </div>
                `
    
    contenedorServicios.appendChild(div)
})



