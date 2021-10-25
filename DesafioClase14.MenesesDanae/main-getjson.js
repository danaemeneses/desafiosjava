class Producto {
    constructor(id, descripcion, precio) {
        this.id = id;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    mostrarInfo() {
        return `El precio de ${this.descripcion} es ${this.precio}`;
    }
}

//ruta de mi archivo data.josn (observar que la ruta no parte de main-getjson.js, sino de index.html que es el archivo HTML que tiene linkeado a main-getjson.js)
const URL = "./json/data.json";

// Creamos un div contenedor en el body
$('body').append('<div id="contenedor"></div>')

// Realizamos una llamada asíncrona con el método getJSON (podría haberse utilizado el método get también, pero como sabemos que lo que traemos es un JSON, este método es más específico)
$.getJSON(URL, (response, success) => {
    // response es un array de objetos literales
    console.log(response);
    // success es el estado de mi petición
    console.log(success);
    // Si la petición se realizó exitosamente llamo a la función instanciarData pasándole, como parámetro, los datos traídos
    if (success === 'success') {
        instanciarData(response)
    }  
});

// Crea un nuevo array de productos, pero, ahora, cada producto va a ser una instancia de la class Producto (de esta manera puedo aplicar a cada producto el método mostrarInfo())
function instanciarData(response) {
    const data = response.map(item => new Producto(item.id, item.descripcion, item.precio));
    mostrarProductos(data);
}

// Muestro la información de mis productos en el div contenedor utilizando el método mostrarInfo()
function mostrarProductos(data) {   
    data.forEach(item => {
        $('#contenedor').append(`<h3>${item.mostrarInfo()}</h3>`)
    })
}


