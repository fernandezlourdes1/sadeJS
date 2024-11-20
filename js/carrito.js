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
                    <small>Titulo</small>
                    <h2 class="titulodelprod">${producto.titulo}</h2>
                </div>
                <div class="carritoProducto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio.toFixed(2)}</p>
                </div>
                <button class="carritoEliminarproducto" data-id="${producto.id}">
            <i class="bi bi-trash"></i> 
            </button>
            `;
            carritoProductos.appendChild(div);
            total += producto.precio;
        });

        totalElement.textContent = `$${total.toFixed(2)}`; 


        const botonOrderNow = document.querySelector(".carritoAcciones-comprar");
        botonOrderNow.addEventListener("click", () => manejarOrdenarAhora(carrito, total));
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
});

function manejarOrdenarAhora() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
        alert("Your cart is empty! Please add items to your cart before ordering.");
        return;
    }

    let totalAPagar = 0;
    let detallesProductos = carrito.map(producto => {
        totalAPagar += producto.precio;
        return `${producto.titulo}: $${producto.precio.toFixed(2)}`;
    }).join("\n");

    detallesProductos += `\nTotal to pay: $${totalAPagar.toFixed(2)}`;

    alert(detallesProductos);

    const cuotas = parseInt(prompt("In how many installments would you like to pay? (maximum 6)"), 10);
    
    if (cuotas > 0 && cuotas <= 6) {
        const montoPorCuota = totalAPagar / cuotas;
        alert(`The amount of each installment is: $${montoPorCuota.toFixed(2)}`);
        alert("Purchase successful!");

        vaciarCarrito(); 

        setTimeout(() => {
            window.location.href = "shop.html"; 
        }, 1000); 
    } else {
        alert("Error, you have between 1 and 6 installments available to make the payment.");
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
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.titulo}" class="carrito-productoimagen">
                <div class="carritoProducto-h2">
                    <small>Titulo</small>
                    <h2 class="titulodelprod">${producto.titulo}</h2>
                </div>
                <div class="carritoProducto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio.toFixed(2)}</p>
                </div>
                <button class="carritoEliminarproducto" data-id="${producto.id}">
                    <i class="bi bi-trash"></i> 
                </button>
            `;
            carritoProductos.appendChild(div);
            total += producto.precio;
        });

        totalElement.textContent = `$${total.toFixed(2)}`; 


        const botonesEliminar = document.querySelectorAll(".carritoEliminarproducto");
        botonesEliminar.forEach(boton => {
            boton.addEventListener("click", (e) => {
                const idProducto = e.currentTarget.getAttribute("data-id");
                eliminarDelCarrito(idProducto);
            });
        });
    }
}