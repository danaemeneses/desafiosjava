function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
}

const productos = [
    new Producto('Consulta veterinaria para apto médico', 2500),
    new Producto('Vacuna', 1100),
    new Producto('Chip identificador', 4000),
    new Producto('Jaula', 18000)
]

console.log(productos)

let total = 0

for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio
}

console.log(total)

let compra = prompt("¿Desea contratar el servicio completo? (si/no): ")

function respuestaCompra(){
    if (compra === "si"){
        return alert("El valor total es: " + total)
    }  return alert("Pronto podrá adquirir los productos y servicios por separado")
    }

respuestaCompra()


