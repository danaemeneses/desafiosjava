// Un Array es un objeto que almacena una lista de elementos. Puede ser un conjunto de números, strings, booleanos, objetos o hasta una lista de listas. Tanto la longitud como el tipo de los elementos de un array son variables. //

const saludar = () => {
    alert("¡Bienvenido!")
}

saludar()

class Animal {
    constructor(pNombre, pEdad, pPesoKG, pVacunas, pChipIdentificador) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.pesoKG = pPesoKG;
        this.vacunas = pVacunas;
        this.chipIdentificador = pChipIdentificador;
    };
    puedeViajar() {
        if (this.vacunas === "si" && this.chipIdentificador === "si") {
            return alert("Su mascota ya cumple las condiciones para viajar")
        }
        return alert("Su mascota aún no cumple las condiciones obligatorias para viajar en avión. Consultenos!")
    }
    viajarEnCabina() {
        if (this.pesoKG <= 9) {
            return alert("Su mascota puede viajar en cabina con usted!")
        }
        return alert("Su mascota deberá viajar en bodega.")
    }
}

let animal1 = new Animal("Pancho", "6 años", 17, "no", "no")
let animal2 = new Animal("Minnie", "1 año", 3, "si", "no")
let animal3 = new Animal("Negro", "4 años", 9, "si", "si")
let animal4 = new Animal("Raba", "1 año", 18, "si", "si")
let animal5 = new Animal("Pepino", "2 años", 7, "si", "si")

const mascotas = [animal1, animal2, animal3, animal4, animal5]

function bicho() {
    let pNombre = prompt("Ingrese el nombre de su mascota: ");
    let pEdad = parseInt(prompt("Ingrese edad de su mascota: "));
    let pPesoKG = parseInt(prompt("Ingrese el peso de su mascota en KG: "));
    let pVacunas = prompt("¿Tiene las vacunas al día?(si/no): ");
    let pChipIdentificador = prompt("¿Tiene colocado chip identificador?(si/no): ");
    return new Animal(pNombre, pEdad, pPesoKG, pVacunas, pChipIdentificador)
}

/*****/

let animal6 = bicho()

animal6.viajarEnCabina()

animal6.puedeViajar()

/*****/

mascotas.push(animal6)

console.log(mascotas)

console.log(mascotas.sort(function (a, b) {
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1
    }
    return 0;
}))