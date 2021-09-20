function saludar() {
    alert("¡Bienvenido!");
  }

saludar()


// Segun el peso, si tiene vacunas y chip identificador, la mascota podrá viajar en cabina de avión o no

class MoldeadorAnimal {
    constructor (pNombre, pEdad, pPesoKG, pVacunas, pChipIdentificador) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.pesoKG = pPesoKG;
        this.vacunas = pVacunas;
        this.chipIdentificador = pChipIdentificador};
        puedeViajar = function() {
            console.log("this:", this);
            return this.pesoKG <=9 && this.vacunas === "si" && this.chipIdentificador === "si" ? true : false;
        }
    }
    

    let animal1 = new MoldeadorAnimal("Pancho","6 años", 17,"no","no")
    let animal2 = new MoldeadorAnimal("Minnie","1 año", 3,"si","no")
    let animal3 = new MoldeadorAnimal("Negro","4 años", 9,"si","si")
    let animal4 = new MoldeadorAnimal("Raba","1 año", 18,"si","si")
    let animal5 = new MoldeadorAnimal("Pepino","2 años", 7,"si","si")


// console.log(animal1.puedeViajar())