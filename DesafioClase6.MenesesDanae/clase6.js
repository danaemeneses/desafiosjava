class Animal {
    constructor (pNombre, pEdad, pPesoKG, pVacunas, pChipIdentificador) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.pesoKG = pPesoKG;
        this.vacunas = pVacunas;
        this.chipIdentificador = pChipIdentificador};
    }
    

    let animal1 = new Animal("Pancho","6 años", 17,"no","no")
    let animal2 = new Animal("Minnie","1 año", 3,"si","no")
    let animal3 = new Animal("Negro","4 años", 9,"si","si")
    let animal4 = new Animal("Raba","1 año", 18,"si","si")
    let animal5 = new Animal("Pepino","2 años", 7,"si","si")

const mascotas = [animal1, animal2, animal3, animal4, animal5]

function crearMascota() {
    let nombre = prompt("Ingrese nombre de su mascota")
    let edad = parseInt(prompt("Ingrese edad de su mascota"))
    let pesoKG = parseInt(prompt("Ingrese peso de su mascota en KG"))
    let vacunas = prompt("¿Su mascota tiene las vacunas al día? (si/no)")
    let chipIdentificador = prompt("¿Su mascota tiene colocado el chip identificador? (si/no)")

    return new Animal(nombre, edad, pesoKG, vacunas, chipIdentificador)
}


mascotas.push(crearMascota())
mascotas.push(crearMascota())


//length

for (let i = 0; i < mascotas.length; i++) {
    console.log(mascotas[i])
    }

//////// 

let borrarMascota = mascotas.shift();

for (let i = 0; i < mascotas.length; i++){
console.log(mascotas[i].nombre)
}