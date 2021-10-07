const productos =[
    {
        nombre: "Tortas",
        imagen: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJha2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
        nombre: "Criollos",
        imagen: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJha2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
        nombre: "Pan casero",
        imagen: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJha2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    }
]

let galeria=[]

for(let i = 0; i< productos.length; i++){
    galeria.push(productos[i])
    console.log(galeria)
}

let container = document.getElementById ("productos")
for(const foto of galeria){
    let div = document.createElement("div");
    div.className= "galeria col";
    div.innerHTML=`<img src=${foto.imagen}>
    <div class="desc"><p>${foto.nombre}</p></div>`
    container.appendChild(div)
}