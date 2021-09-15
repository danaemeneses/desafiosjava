function saludar() {
    alert("Bienvenido! Recuerde el mínmo de compra es $7500");
  }

saludar()

let nombreIngresado = prompt("Ingresa su nombre registrado:");
console.log("El nombre registrado es: " + nombreIngresado);

/***/

let precioAlimento1kg = 350
let precioAlimento3kg = 950
let precioAlimento7kg = 2100
let precioAlimento15kg = 4890



let totalUnidades = (a, b, c, d) => a + b + c + d


function valorTotalCompra() {

    alert("Ingresa los datos para tu compra")
    let alimento1kg = parseInt(prompt("Ingrese cantidad de bolsas de 1KG ($350 c/u)"))
    let Alimento3kg = parseInt(prompt("Ingrese cantidad de bolsas de 1KG ($950 c/u)"))
    let Alimento7kg = parseInt(prompt("Ingrese cantidad de bolsas de 1KG ($2100 c/u)"))
    let Alimento15kg = parseInt(prompt("Ingrese cantidad de bolsas de 1KG ($4890 c/u)"))
    
    let MontoTotal = totalUnidades(  
        (precioAlimento1kg * alimento1kg) , 
        (precioAlimento3kg * Alimento3kg) , 
        (precioAlimento7kg * Alimento7kg) , 
        (precioAlimento15kg * Alimento15kg));
    alert ("El valor de su compra es: $" + MontoTotal)
    return valorFinalCompra
}


let valorFinalCompra = valorTotalCompra() 
