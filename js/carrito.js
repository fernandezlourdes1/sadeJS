document.addEventListener("DOMContentLoaded", function() {
    const carritoProductos = document.querySelector(".carrito-productos");
    const carritoVacio = document.querySelector(".carrito-vacio");
    const totalElement = document.querySelector("#total");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []; 

    if (carrito.length === 0) {
        carritoVacio.classList.remove("disable");
        carritoProductos.classList.add("disable");
    } else {
        carritoVacio.classList.add("disable");
        carritoProductos.classList.remove("disable");
        
        let total = 0;

        carrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.titulo}" class="carrito-productoimagen">
                <div class="carritoProducto-h2">
                    <small> Titulo</small>
                    <h2 class="titulodelprod">${producto.titulo}</h2>
                </div>
                <div class="carritoProducto-cantidad">
                    <small>Amount</small>
                    <p>1</p>
                </div>
                <div class="carritoProducto-precio">
                    <small> Price</small>
                    <p>$${producto.precio.toFixed(2)}</p>
                </div>
                <div class="carritoProducto-subtotal">
                    <small> Subtotal </small>
                    <p>$${producto.precio.toFixed(2)}</p>
                </div>
                <button class="carritoEliminarproducto" data-id="${producto.id}"><i class="bi bi-trash3"></i></button>
            `;
            carritoProductos.appendChild(div);
            total += producto.precio;
        });

        totalElement.textContent = `$${total.toFixed(2)}`; 
    }

    const botonesEliminar = document.querySelectorAll(".carritoEliminarproducto");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const idProducto = e.currentTarget.getAttribute("data-id");
            eliminarDelCarrito(idProducto);
        });
    });

    const botonVaciarCarrito = document.querySelector(".boton-vaciarCarrito");
    botonVaciarCarrito.addEventListener("click", vaciarCarrito);


    const botonOrderNow = document.querySelector(".carritoAcciones-comprar");
    botonOrderNow.addEventListener("click", manejarOrdenarAhora);
});

function manejarOrdenarAhora() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
        alert("Your cart is empty! Please add items to your cart before ordering.");
        return;
    }

    const totalAPagar = carrito.reduce((total, producto) => total + producto.precio , 0);
    
    const totalMessage = `Total to pay: $${totalAPagar.toFixed(2)}`;
    alert(totalMessage);

    const cuotas = prompt("Enter the number of installments you want:");

    if (cuotas) {
        const montoPorCuota = totalAPagar / cuotas;
        alert(`The amount is ${cuotas} quotas of $${montoPorCuota.toFixed(2)} each.`);
        alert("Purchase made successfully!");

        vaciarCarrito();


        window.location.href = "../pages/shop.html"; 
    } else {
        alert("canceled purchase.");
    }
}

function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoProductos = document.querySelector(".carrito-productos");
    const carritoVacio = document.querySelector(".carrito-vacio");
    const totalElement = document.querySelector("#total");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []; 

    carritoProductos.innerHTML = ""; 
    let total = 0;

    if (carrito.length === 0) {
        carritoVacio.classList.remove("disable");
        carritoProductos.classList.add("disable");
        totalElement.textContent = "$0.00";
    } else {
        carritoVacio.classList.add("disable");
        carritoProductos.classList.remove("disable");
        
        carrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add(" carrito-producto");
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.titulo}" class="carrito-productoimagen">
                <div class="carritoProducto-h2">
                    <small> Titulo</small>
                    <h2 class="titulodelprod">${producto.titulo}</h2>
                </div>
                <div class="carritoProducto-cantidad">
                    <small>Amount</small>
                    <p>1</p>
                </div>
                <div class="carritoProducto-precio">
                    <small> Price</small>
                    <p>$${producto.precio.toFixed(2)}</p>
                </div>
                <div class="carritoProducto-subtotal">
                    <small> Subtotal </small>
                    <p>$${producto.precio.toFixed(2)}</p>
                </div>
                <button class="carritoEliminarproducto" data-id="${producto.id}"><i class="bi bi-trash3"></i></button>
            `;
            carritoProductos.appendChild(div);
            total += producto.precio;
        });

        totalElement.textContent = `$${total.toFixed(2)}`; 
    }

    const botonesEliminar = document.querySelectorAll(".carritoEliminarproducto");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const idProducto = e.currentTarget.getAttribute("data-id");
            eliminarDelCarrito(idProducto);
        });
    });
}