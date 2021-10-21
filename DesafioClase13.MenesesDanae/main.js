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


//////// Efecto en título con fadeOut /////


$("h1").on("mouseover", () => {
    $("h1").fadeOut(3000)
})

////////Se genera un hover para la foto cuando el mouse está posicionado sobre el elemento/////

let imagen = document.getElementById("imagen")
imagen.onmouseover = () => {
    imagen.classList.toggle('infotest')
}


////////Cupon descuento jQuery////////

$('#botonsorpresa').click( () => {
    $('#contenedorsorpresa p').slideToggle(1000)
})



/////Se carga datos ingresados por input//////

class Animal {
    constructor (nombre, peso, vacunas, chipIdentificador) {
        this.nombre = nombre;
        this.peso = peso;
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


//////


$('#botongato').click( () => {
    $('#contenedorgatito').slideToggle(1000)
})


$(() =>{

$("#arriba").click(function () {
    $("fotogato").animate({ "top": "-=50px"}, "slow");
});


$("#abajo").click(function () {
    $("#fotogato").animate({ "top": "+=50px"}, "slow");
})

$("#derecha").click(function () {
    $("fotogato").animate({"left": "+=50px"}, "slow");
});

$("#izquierda").click(function () {
    $("fotogato").animate({"left": "-=50px"}, "slow");
});



})