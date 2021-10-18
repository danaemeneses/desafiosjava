/////// Alert con JQuery ////////

$(document).ready( () => {
    setTimeout (() => {
        swal({
            text: "Ingresa tu mail para recibir nuestras promociones y novedades!",
            content: "input",
            buttons: {
              Cancelar: true,
              Confirmar: true,
            },
          });
    }, 500)
})


////////Se genera un hover para la foto cuando el mouse está posicionado sobre el elemento/////

let imagen = document.getElementById("imagen")
imagen.onmouseover = () => {
    imagen.classList.toggle('infotest')
}

/////Se carga datos ingresados por input a un array//////

class Animal {
    constructor (nombre, peso, vacunas, chipIdentificador) {
        this.nombre = nombre;
        this.peso = parseInt(peso);
        this.vacunas = vacunas;
        this.chipIdentificador = chipIdentificador;
    }
}


/////Se utiliza jQuery evento submit /////

$("#form").submit( (event) => {
    event.preventDefault()
    const tipo = $("#inputTipo").val()
    const peso = $("#inputPeso").val()
    const vacunas = $("#inputVacunas").val()
    const chipIdentificador = $("#inputChip").val()

    
    $("#textomodal").append(`
    <p>Tu ${tipo}, pesa: ${peso}kg.<br>
    ${vacunas} tiene colocadas sus vacunas.<br>
    ${chipIdentificador} tiene colocado chip identificador.<br>
    </p>
    `)

}
)




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



