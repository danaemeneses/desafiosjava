////Interacción de titulo, se agranda ////

const titulo = document.getElementById('titulo')

titulo.addEventListener('click', () => {
    titulo.classList.toggle('agrandar')
})

/////////////Texto bienvenida/////////////////

const contenedor = document.getElementById('textoservicios')

contenedor.innerHTML = `
                        <h5>¡Bienvenido/a! Te ofrecemos nuestros productos y servicios para tu mascota:</h5>
                    `


////Se crean tarjetas de productos con el método createElement que nos permite crear un nuevo nodo

const arrayServicios = [
    {img: 'https://via.placeholder.com/150', id:1, nombre: "Vacuna", precio: 1100, tamaño: "unico"},
    {img: 'https://via.placeholder.com/150', id:2, nombre: "Chip Identificador", precio: 4000, tamaño: "unico"},
    {img: 'https://via.placeholder.com/150', id:3, nombre: "Jaula chica", precio: 18000, tamaño: "Chico"},
    {img: 'https://via.placeholder.com/150', id:4, nombre: "Jaula Mediana", precio: 25000, tamaño: "Mediano"},
    {img: 'https://via.placeholder.com/150', id:6, nombre: "Jaula Grande", precio: 32000, tamaño: "Grande"},
    {img: 'https://via.placeholder.com/150', id:7, nombre: "Canil chico", precio: 9000, tamaño: "Chico"},
    {img: 'https://via.placeholder.com/150', id:8, nombre: "Canil mediano", precio: 15000, tamaño: "Mediano"},
    {img: 'https://via.placeholder.com/150', id:9, nombre: "Consulta veterinaria", precio: 1300, tamaño: "unico"},
    {img: 'https://via.placeholder.com/150', id:10, nombre: "Bebedero", precio: 450, tamaño: "unico"},
    {img: 'https://via.placeholder.com/150', id:11, nombre: "Comedero", precio: 400, tamaño: "unico"},

]


const contenedorServicios = document.getElementById('productos')

arrayServicios.forEach((producto) => {
    const div = document.createElement('div')
    div.className = "card-img-top"
    div.style = "width: 18rem"
    div.innerHTML = `
                    <div class="containercard">
                        <div class="infoproducto">
                            <img src=${producto.img} class="card-img-top" alt="producto">
                            <div class="card-body">
                                <h5 class="card-title textonombre">${producto.nombre}</h5>
                                <div class="card-text">
                                <p>Precio: $${producto.precio}<br>
                                Tamaño: ${producto.tamaño}</p>
                                </div>
                                <div id="btn" class="cuerpobtn">
                                    <a href="#"  class="btn btn-success">Agregar</a>
                                </div>
                            </div>
                         </div>    
                    </div>
    `
    contenedorServicios.appendChild(div)
})

//////////////Cuando da click en botón "Agregar" en el producto vacuna, se genera un alert y cuando mueve el mouse sobre él da un console log por cantidad de movimientos////////////

const cuerpobtn = document.getElementsByClassName("cuerpobtn")[0]


cuerpobtn.addEventListener('click', () => {
    alert("Clickeaste un botón")
})

cuerpobtn.onmousemove = () => {console.log("Move")}