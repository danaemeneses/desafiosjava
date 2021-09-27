const saludar = () => {
    alert("¡Bienvenido!")
}

saludar()


// Segun el peso, si tiene vacunas y chip identificador, la mascota podrá viajar en cabina de avión o no

class MoldeadorAnimal {
    constructor (pNombre, pEdad, pPesoKG, pVacunas, pChipIdentificador) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.pesoKG = pPesoKG;
        this.vacunas = pVacunas;
        this.chipIdentificador = pChipIdentificador;
    };
    puedeViajar(){
        if(this.vacunas==="si" && this.chipIdentificador==="si"){
            return alert("Su mascota cumple las condiciones para viajar")
        }
        return alert("Su mascota aún no cumple las condiciones obligatorias para viajar en avión. Consultenos!")
    }
    viajarEnCabina(){
        if(this.pesoKG<=9){
            return alert("Su mascota puede viajar en cabina con usted!")
        }
        return alert("Su mascota deberá viajar en bodega.")
    }
}
    

let animal1 = new MoldeadorAnimal("Pancho","6 años", 17,"no","no")
let animal2 = new MoldeadorAnimal("Minnie","1 año", 3,"si","no")
let animal3 = new MoldeadorAnimal("Negro","4 años", 9,"si","si")
let animal4 = new MoldeadorAnimal("Raba","1 año", 18,"si","si")
let animal5 = new MoldeadorAnimal("Pepino","2 años", 7,"si","si")

function bicho(){
    let pNombre = prompt("Ingrese el nombre de su mascota: ");
    let pEdad = parseInt(prompt("Ingrese edad de su mascota: "));
    let pPesoKG = parseInt(prompt("Ingrese el peso de su mascota en KG: "));
    let pVacunas = prompt("¡Tiene las vacunas al día?(si/no): ");
    let pChipIdentificador = prompt("¿Tiene colocado chip identificador?(si/no): ");
    return new MoldeadorAnimal(pNombre, pEdad, pPesoKG, pVacunas, pChipIdentificador)
}

let animal6 = bicho()

console.log(animal1)
animal6.viajarEnCabina()
animal6.puedeViajar()