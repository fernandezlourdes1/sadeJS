
const productos= [
    {
        id:"Diamond Life 1984",
        titulo: "Diamond Life - 1984",
        imagen: "../Assets/Images/diamondcd.png" ,
        categoria: {
            nombre:"discs",
            id: "discs"
        },
        precio: 9.98,
        stock: 70,
    },
    {
        id:"Promise  1985",
        titulo: "Promise - 1985",
        imagen: "../Assets/Images/sadepromisescd.png" ,
        categoria: {
            nombre:"discs",
            id: "discs"
        },
        precio: 8.98,
        stock: 70,
    },
    {
        id:"Stronger Than Pride  1988",
        titulo: "Stronger Than Pride - 1988",
        imagen: "../Assets/Images/stlCD.png" ,
        categoria: {
            nombre:"discs",
            id: "discs"
        },
        precio: 23.30,
        stock: 70,
    },
    {
        id:"Love Deluxe  1992",
        titulo: "Love Deluxe - 1992",
        imagen: "../Assets/Images/lovedeluxecd.png" ,
        categoria: {
            nombre:"discs",
            id: "discs"
        },
        precio: 32.98,
        stock: 70,
    },
    {
        id:"Lovers Rock  2000",
        titulo: "Lovers Rock - 2000",
        imagen: "../Assets/Images/loversrockcd.png" ,
        categoria: {
            nombre:"discs",
            id: "discs"
        },
        precio: 8.98,
        stock: 70,
    },
    {
        id:"Soldier Of Love  2010",
        titulo: "Soldier Of Love - 2010",
        imagen: "../Assets/Images/soldieroflovecd.png" ,
        categoria: {
            nombre:"discs",
            id: "discs"
        },
        precio: 13.98,
        stock: 70,
    },
    {
        id:"The Best Of Sade  1994",
        titulo: "The Best Of Sade - 1994",
        imagen: "../Assets/Images/thebestofsadecd.png" ,
        categoria: {
            nombre:"discs",
            id: "discs"
        },
        precio: 59.99,
        stock: 70,
    },
    {
        id:"The Ultimate Collection  2011 ",
        titulo: "The Ultimate Collection - 2011 ",
        imagen: "../Assets/Images/theultimatecollectioncd.png" ,
        categoria: {
            nombre:"discs",
            id: "discs"
        },
        precio: 49.60,
        stock: 70,
    },
    {
        id:"Remix Deluxe  1944 ",
        titulo: "Remix Deluxe - 1944",
        imagen: "../Assets/Images/remixcd.png" ,
        categoria: {
            nombre:"discs",
            id: "discs"
        },
        precio: 39.99,
        stock: 70,
    },
    {
        id:"Lovers Live  2002",
        titulo: "Lovers Live - 2002",
        imagen: "../Assets/Images/loverslivecd.png" ,
        categoria: {
            nombre:"discs",
            id: "discs"
        },
        precio: 22.20,
        stock: 70,
    },
    {
        id:"Diamond Life  1984",
        titulo: "Diamond Life - 1984",
        imagen: "../Assets/Images/diamondlifevinyl.png" ,
        categoria: {
            nombre:"vinyls",
            id: "vinyls"
        },
        precio: 35.44,
        stock: 70,
    },
    {
        id:"Promise  1985",
        titulo: "Promise - 1985",
        imagen: "../Assets/Images/vinilo-promise.png" ,
        categoria: {
            nombre:"vinyls",
            id: "vinyls"
        },
        precio: 40.98,
        stock: 70,
    },
    {
        id:"Stronger Than Pride  1988 ",
        titulo: "Stronger Than Pride - 1988 ",
        imagen: "../Assets/Images/strongerthanpridevinilo.png",
        categoria: {
            nombre:"vinyls",
            id: "vinyls"
        },
        precio: 53.30,
        stock: 70,
    },
    {
        id:"Love Deluxe  1992  ",
        titulo: "Love Deluxe - 1992 ",
        imagen: "../Assets/Images/deluxesade.png",
        categoria: {
            nombre:"vinyls",
            id: "vinyls"
        },
        precio: 66.10,
        stock: 70,
    },
    {
        id:"Lovers Rock  2000",
        titulo: "Lovers Rock - 2000",
        imagen: "../Assets/Images/loversrockvinilo.png",
        categoria: {
            nombre:"vinyls",
            id: "vinyls"
        },
        precio: 28.98,
        stock: 70,
    },
    {
        id:"The Best Of Sade  1994",
        titulo: "The Best Of Sade - 1994",
        imagen: "../Assets/Images/thebestofsadevinyl (1).png",
        categoria: {
            nombre:"vinyls",
            id: "vinyls"
        },
        precio: 59.99,
        stock: 70,
    },
    {
        id:"Soldier Of Love  2010",
        titulo: "Soldier Of Love - 2010",
        imagen: "../Assets/Images/soldieroflovevinyl.jpeg",
        categoria: {
            nombre:"VINYL",
            id: "VINYL"
        },
        precio: 39.99,
        stock: 70,
    },
    {
        id:"Adu Sade - Crop Shirt",
        titulo: "Adu Sade Crop Shirt",
        imagen: "../Assets/Images/merchRemera1.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 9.99,
        stock: 70,
    },
    {
        id:"Adu Sade - Unisex Oversized T-Shirt ",
        titulo: "Adu Sade Unisex Oversized T-Shirt ",
        imagen: "../Assets/Images/merchRemera2.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 10.99,
        stock: 70,
    },
    {
        id:"Sade - T-shirt",
        titulo: "Sade T-shirt ",
        imagen: "../Assets/Images/merchRemera3.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 10.99,
        stock: 70,
    },
    {
        id:"Adu Sade - Tank",
        titulo: "Adu Sade Tank ",
        imagen: "../Assets/Images/merchRemera4.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 10.99,
        stock: 70,
    },
    {
        id:"Sade - T-shirt2 ",
        titulo: "Sade T-shirt2 ",
        imagen: "../Assets/Images/merchRemera5.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 10.99,
        stock: 70,
    },
    {
        id:"Adu Sade - Oversized T-shirt",
        titulo: "Adu Sade Oversized T-shirt",
        imagen: "../Assets/Images/merchRemera6.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 10.99,
        stock: 70,
    },
    {
        id:"Adu Sade - Oversized T-shirt2",
        titulo: "Adu Sade Oversized T-shirt2",
        imagen: "../Assets/Images/merchRemera7.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 10.99,
        stock: 70,
    },
    {
        id:"Adu Sade - Oversized T-shirt3",
        titulo: "Adu Sade Oversized T-shirt3",
        imagen: "../Assets/Images/merchRemera8.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 10.99,
        stock: 70,
    },
    {
        id:"Adu Sade - Oversized T-shirt4",
        titulo: "Adu Sade Oversized T-shirt4",
        imagen: "../Assets/Images/merchRemera9.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 10.99,
        stock: 70,
    },
    {
        id:"Adu Sade - Croptop Love Deluxe",
        titulo: "Adu Sade Croptop Love Deluxe",
        imagen: "../Assets/Images/merchRemera9-1.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 10.99,
        stock: 70,
    },
    {
        id:"Adu Sade - Oversized Hoodie ",
        titulo: "Adu Sade Oversized Hoodie ",
        imagen: "../Assets/Images/merchBuzo1.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 30.99,
        stock: 70,
    },
    {
        id:"Love Deluxe - Frame ",
        titulo: "Love Deluxe Frame ",
        imagen: "../Assets/Images/merchCuadro1.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 19.99,
        stock: 70,
    },
    {
        id:"Profile Sade - Frame",
        titulo: "Profile Sade Frame",
        imagen: "../Assets/Images/merchCuadro2.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 19.99,
        stock: 70,
    },
    {
        id:"Sade - Frame1",
        titulo: "Sade Frame1",
        imagen: "../Assets/Images/merchCuadro3.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 19.99,
        stock: 70,
    },
    {
        id:"Sade - Frame2",
        titulo: "Sade Frame2",
        imagen: "../Assets/Images/merchCuadro4.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 19.99,
        stock: 70,
    },
    {
        id:"Love Deluxe - Frame ",
        titulo: "Love Deluxe Frame ",
        imagen: "../Assets/Images/merchCuadro5.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 19.99,
        stock: 70,
    },
    {
        id:"BYW Sade - Frame",
        titulo: "BYW Sade Frame",
        imagen: "../Assets/Images/merchCuadro7.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 19.99,
        stock: 70,
    },
    {
        id:"Sade - Frame3",
        titulo: "Sade Frame3",
        imagen: "../Assets/Images/merchCuadro8.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 19.99,
        stock: 70,
    },
    {
        id:"Sade - Frame4",
        titulo: "Sade Frame4",
        imagen: "../Assets/Images/merchCuadro9.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 19.99,
        stock: 70,
    },
    {
        id:"Sade - Frame5",
        titulo: "Sade Frame5",
        imagen: "../Assets/Images/merchCuadro10.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 19.99,
        stock: 70,
    },
    {
        id:"Sade - Frame6",
        titulo: "Sade Frame6",
        imagen: "../Assets/Images/merchCuadro12.png",
        categoria: {
            nombre:"MERCH",
            id: "merch"
        },
        precio: 19.99,
        stock: 70,
    },
 ];
 
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria = document.querySelectorAll(".secciones");
const buscador = document.querySelector(".buscador"); 

function cargarProductos(categoria = null, busqueda = "") {
    contenedorProductos.innerHTML = ""; 

    const productosFiltrados = productos.filter(prod => {
        const coincidenciaCategoria = categoria ? prod.categoria.id === categoria : true;
        const coincidenciaBusqueda = prod.titulo.toLowerCase().includes(busqueda.toLowerCase());
        return coincidenciaCategoria && coincidenciaBusqueda;
    });

    productosFiltrados.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img src="${card.imagen}" alt="${card.titulo}" class="Producto">
            <div class="card-content">
                <h2 class="h2">${card.titulo}</h2>
                <span class="precio">$${card.precio.toFixed(2)}</span>
                <button class="buy-button" data-id="${card.id}">Add to Cart</button>
            </div>
        `;
        contenedorProductos.appendChild(div);
    });
    agregarEventosBotones(); 
}

function agregarEventosBotones() {
    const botonesComprar = document.querySelectorAll(".buy-button");
    botonesComprar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function agregarAlCarrito(e) {
    const idProducto = e.currentTarget.getAttribute("data-id");
    const producto = productos.find(prod => prod.id === idProducto);
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    alert("Product added: " + producto.titulo);
    
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contadorCarrito = document.querySelector("#cart-count");
    contadorCarrito.textContent = carrito.length;
}

buscador.addEventListener("input", (e) => {
    const busqueda = e.target.value; 
    const categoriaSeleccionada = Array.from(botonesCategoria).find(boton => boton.classList.contains("active"))?.id; 
    cargarProductos(categoriaSeleccionada, busqueda); 
});

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        const categoria = e.currentTarget.id; 
        if (categoria === "all") {
            cargarProductos(); 
        } else {
            cargarProductos(categoria.toLowerCase()); 
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    cargarProductos();
    actualizarContadorCarrito();
});
function manejarOrdenarAhora() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
        alert("Your cart is empty! Please add items to your cart before ordering.");
        return;
    }

    const totalAPagar = carrito.reduce((total, producto) => total + producto.precio, 0);
    
    const totalMessage = `Total to pay: $${totalAPagar.toFixed(2)}`;
    alert(totalMessage);

    const cuotas = prompt("Ingrese la cantidad de cuotas que desea:");

    if (cuotas) {
        alert("Compra realizada con éxito!");
    } else {
        alert("Compra cancelada.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const botonOrderNow = document.querySelector(".carritoAcciones-comprar");
    if (botonOrderNow) {
        botonOrderNow.addEventListener("click", manejarOrdenarAhora);
    }
});