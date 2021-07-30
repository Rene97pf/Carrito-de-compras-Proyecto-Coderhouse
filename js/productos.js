

const inventario = [
    {
        id: 1,
        nombre: "REDCITY REMERA",
        precio: 1500,
        imagen: "./imagenes/city.jpg"

    },
    {
        id: 2,
        nombre: "PETALOS REMERA",
        precio: 1500,
        imagen: "./imagenes/petalos1.jpeg"

    },
    {
        id: 3,
        nombre: "TOKYO REMERA",
        precio: 1500,
        imagen: "./imagenes/snake.jpg"

    },
    {
        id: 4,
        nombre: "TIGER REMERA",
        precio: 1500,
        imagen: "./imagenes/tiger.jpg"

    },
    {
        id: 5,
        nombre: "PETALOS BUZO",
        precio: 3000,
        imagen: "./imagenes/tokyo1.jpg"

    },
    {
        id: 6,
        nombre: "SPACE BUZO",
        precio: 3000,
        imagen: "./imagenes/space.jpg"

    },
    {
        id: 7,
        nombre: "KYO BUZO",
        precio: 3000,
        imagen: "./imagenes/kyo.jpg"

    },
    {
        id: 8,
        nombre: "SAKURA BUZO",
        precio: 3000,
        imagen: "./imagenes/sakura.jpg"

    }

]

function generarProductos() {
    let contProductos = document.getElementById("contenedorProductos")
    contProductos.innerHTML = null
    const fragmento = document.createDocumentFragment()
    for (let producto of inventario) {
        let div = document.createElement("div")
        div.classList.add("cards__body")
        div.innerHTML = `
        
          <div class="card text-center">
                <img src=${producto.imagen} class="card__img--focus" alt="Remera1">
                <div class="card-body">
                    <p class="card-text" id="titulo">${producto.nombre}</p>
                    <h5 class="card-title precio">$${producto.precio}</h5>
                    <p class="cards__cuotas"><span class="fw-bold">6</span> cuotas de <strong>$${producto.precio/6}</strong></p>
          <a href="" class="btn effect01 agregar-carrito" data-id="${producto.id}">Comprar</a>
          </div>
        </div>`

        fragmento.appendChild(div)

    }
    contProductos.appendChild(fragmento)
}
$(document).ready(function(){
    generarProductos();
    $(".agregar-carrito").click(function() {
        $(this).text("Producto agregado al carrito!")
        
    })
    $("#vaciar-carrito").click(function() {
        $(".agregar-carrito").text("COMPRAR")
        
    })
    
})

