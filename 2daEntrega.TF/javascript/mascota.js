/////// Interacción del titulo con evento toggle///


const titulo = document.getElementById('titulo')

titulo.addEventListener('click', () => {
    titulo.classList.toggle('agrandar')
})

////////Se genera un hover para la foto cuando el mouse está posicionado sobre el elemento/////

let imagen = document.getElementById("imagen")
imagen.onmouseover = () => {
    imagen.classList.toggle('infotest img:hover')
}

////////Validar datos del peso////////

document.getElementById("inputPeso").addEventListener("blur", comprobarPeso);

function comprobarPeso() {
    const peso = document.getElementById("inputPeso").value;
    if(peso < 9){
        document.getElementById("inputPeso").style.backgroundColor = "Green"
    } else{
        document.getElementById("inputPeso").style.backgroundColor = "Red"
    }
}

//////Se carga datos ingresados por input a un array//////

class Animal {
    constructor (nombre, peso, vacunas, chipIdentificador) {
        this.nombre = nombre;
        this.peso = peso;
        this.vacunas = vacunas;
        this.chipIdentificador = chipIdentificador;
    }
}


document.getElementById("form").addEventListener("submit", mostrarForm)


function mostrarForm(e) {
    e.preventDefault();
    let nombre = document.getElementById("inputNombre").value;
    let peso = document.getElementById("inputPeso").value;
    let vacunas = document.getElementById("inputVacunas").value;
    let chipIdentificador = document.getElementById("inputChip").value;

    
    let listadoAnimales = []
    listadoAnimales.push(new Animal(nombre, peso, vacunas, chipIdentificador));
    console.log(listadoAnimales)
}




///modal 

const abrirModal = document.getElementById("modal-abrir")
const cerrarModal = document.getElementById("modal-cerrar")
const modalContainer = document.getElementsByClassName("modal-container")[0]

abrirModal.addEventListener("click", () =>{
    modalContainer.classList.add("modal-active")
})

cerrarModal.addEventListener("click", () =>{
    modalContainer.classList.remove("modal-active")
})
