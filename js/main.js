let nombreUsuario = prompt ("Ingrese su nombre");
if (nombreUsuario== " "){
    alert("Ingrese un nombre de Usuario válido" );
}else {
    alert("Bienvenido" + " " + nombreUsuario);

};
const productos= [
    {
        id:1,
        nombre: "Vinilo Love Deluxe",
        imagen: 
        "../Assets/Images/vinilosadelovedeluxe.jpg",
        precio: 38500,
        stock: 70,
        seccion: "vinilos",
    },
    {
        id:2,
        nombre: "Vinilo Diamond Life",
        imagen: 
        "../Assets/Images/diamondlifevinyl.png",
        precio: 36000,
        stock: 40,
        seccion: "vinilos",
    },
    {
        id:3,
        nombre: "Vinilo The Best Of Sade",
        imagen: 
        "../Assets/Images/thebestofsadevinyl.png",
        precio: 49999,
        stock: 55,
        seccion: "vinilos",
    },    
    {
        id:4,
        nombre: "Vinilo Lovers Rock",
        imagen: 
        "../Assets/Images/loversrockvinyl.jpeg",
        precio: 56970,
        stock: 53,
        seccion: "vinilos",
    },
    {
        id:5,
        nombre: "Vinilo Love Stronger Than Pride",
        imagen: 
        "../Assets/Images/strongerthanpridevinyl.jpeg",
        precio: 60000,
        stock: 39,
        seccion: "vinilos",
    },
    {
        id:6,
        nombre: "Vinilo Solider Of Love",
        imagen: 
        "../Assets/Images/soldieroflove.jpeg",
        precio: 79500,
        stock: 62,
        seccion: "vinilos",
    },
    {
        id:7,
        nombre: "CD Diamond Life",
        imagen: 
        "../Assets/Images/diamondcd.png",
        precio: 15000,
        stock: 42,
        seccion: "cd",
    },
    {
        id:8,
        nombre: "CD Love Deluxe",
        imagen: 
        "../Assets/Images/lovedeluxecd.png",
        precio: 15000,
        stock: 42,
        seccion: "cd",
    },
    {
        id:9,
        nombre: "CD Lovers Rock",
        imagen: 
        "../Assets/Images/loversrockcd",
        precio: 15000,
        stock: 80,
        seccion: "cd",
    },
    {
        id:10,
        nombre: "CD Promise",
        imagen: 
        "../Assets/Images/sadepromisescd.png",
        precio: 15000,
        stock: 23,
        seccion: "cd",
    },
    {
        id:11,
        nombre: "CD Soldier Love",
        imagen: 
        "../Assets/Images/soldieroflovecd.png",
        precio: 15000,
        stock: 27,
        seccion: "cd",
    },
    {
        id:12,
        nombre: "CD The Best Of Sade",
        imagen: 
        "../Assets/Images/thebestofsadecd.png",
        precio: 22990,
        stock: 43,
        seccion: "cd",
    },
    {
        id:13,
        nombre: "CD Lovers Live",
        imagen: 
        "../Assets/Images/loverslivecd.png",
        precio: 17000,
        stock: 10,
        seccion: "cd",
    },
    {
        id:14,
        nombre: "CD The Deluxe Remix",
        imagen: 
        "../Assets/Images/remixcd.png",
        precio: 28990,
        stock: 5,
        seccion: "cd",
    },
    {
        id:15,
        nombre: "Remera Sade negra",
        imagen: 
        "../Assets/Images/merchRemera1.png",
        precio: 19900,
        stock: 59,
        seccion: "remeras",
    },
    {
        id:16,
        nombre: "Remera Sade negra",
        imagen: 
        "../Assets/Images/merchRemera3.png",
        precio: 19900,
        stock: 33,
        seccion: "remeras",
    },
    {
        id:17,
        nombre: "Remera Sade negra",
        imagen: 
        "../Assets/Images/merchRemera2.png",
        precio: 19900,
        stock: 68,
        seccion: "remeras",
    },
    {
        id:18,
        nombre: "Remera Sade negra",
        imagen: 
        "../Assets/Images/merchRemera8.png",
        precio: 19900,
        stock: 54,
        seccion: "remeras",
    },
    {
        id:19,
        nombre: "Remera Sade negra",
        imagen: 
        "../Assets/Images/merchRemera5.png",
        precio: 19900,
        stock: 44,
        seccion: "remeras",
    },
    {
        id:20,
        nombre: "Remera Sade negra",
        imagen: 
        "../Assets/Images/merchRemera6.png",
        precio: 19900,
        stock: 59,
        seccion: "remeras",
    },
    {
        id:21,
        nombre: "Remera Sade blanca",
        imagen: 
        "../Assets/Images/merchRemera9-1.png",
        precio: 19900,
        stock: 70,
        seccion: "remeras",
    },
    {
        id:22,
        nombre: "Remera Sade blanca",
        imagen: 
        "../Assets/Images/merchRemera1.png",
        precio: 19900,
        stock: 5,
        seccion: "remeras",
    },
    {
        id:23,
        nombre: "Remera Sade gris",
        imagen: 
        "../Assets/Images/merchRemera4.png",
        precio: 19900,
        stock: 22,
        seccion: "remeras",
    },
    {
        id:24,
        nombre: "Remera Sade gris",
        imagen: 
        "../Assets/Images/merchRemera7.png",
        precio: 19900,
        stock: 67,
        seccion: "remeras",
    },
    {
        id:25,
        nombre: "Remera Sade crema",
        imagen: 
        "../Assets/Images/merchRemera9.png",
        precio: 19900,
        stock: 45,
        seccion: "remeras",
    },
    {
        id:26,
        nombre: "Remera Sade gris",
        imagen: 
        "../Assets/Images/merchBuzo1.png",
        precio: 19900,
        stock: 1,
        seccion: "remeras",
    },
    {
        id:27,
        nombre: "Lamina Sade",
        imagen: 
        "../Assets/Images/lamina1.jpg",
        precio: 3800,
        stock: 200,
        seccion: "laminas",
    },
    {
        id:28,
        nombre: "Lamina Sade",
        imagen: 
        "../Assets/Images/lamina2.jpg",
        precio: 3800,
        stock: 90,
        seccion: "laminas",
    },
    {
        id:27,
        nombre: "Lamina Sade",
        imagen: 
        "../Assets/Images/lamina3.jpg",
        precio: 3800,
        stock: 199,
        seccion: "laminas",
    },
    {
        id:27,
        nombre: "Lamina Sade",
        imagen: 
        "../Assets/Images/lamina4.jpg",
        precio: 3800,
        stock: 44,
        seccion: "laminas",
    },
    {
        id:27,
        nombre: "Lamina Sade",
        imagen: 
        "../Assets/Images/lamina5.jpg",
        precio: 3800,
        stock: 30,
        seccion: "laminas",
    },
    {
        id:27,
        nombre: "Lamina Sade",
        imagen: 
        "../Assets/Images/lamina6.jpg",
        precio: 3800,
        stock: 183,
        seccion: "laminas",
    },
    {
        id:27,
        nombre: "Lamina Sade",
        imagen: 
        "../Assets/Images/lamina7.jpg",
        precio: 3800,
        stock: 3,
        seccion: "laminas",
    }
 ];

 const agregarProductos = ({nombre,imagen,precio,stock,seccion}) => {
      productos.push({nombre, imagen, precio, stock, seccion});
 }

 const mostrarProductos = () => {
    let mensajeInfoUsuario = " ";
    for ( let producto of productos){
    
        mensajeInfoUsuario+= 
         `ID : ${producto.id}
         nombre: ${producto.nombre}
         imagen: ${producto.imagen}
         precio: ${producto.precio}
         stock: ${producto.stock}
         seccion${producto.seccion}
         `;
    }
    console.log(mensajeInfoUsuario);
};
const pedirDatosProductos = () =>{
   let nombreProducto = prompt("Ingrese el nombre del producto");
   let imagenProducto = prompt("Ingrese la url de la imágen");
   let precioProducto = parseFloat(prompt
    ("Ingrese el precio del producto")
   );
   let stock= parseInt(prompt("Por favor, ingresa la cantidad de unidades disponibles"));
   if(nombreProducto && !isNaN(precioProducto) && imagenProducto && !isNaN(stock) ){
    return{nombre : nombreProducto , precio: precioProducto , imagen , stock}
   } else{
    alert("Error, ingrese datos válidos por favor.");
   }

};
const eliminarProductos = (nombre) => {
    const indice = productos.findIndex ((producto)=>producto.nombre.toLowerCase() === nombre.toLowerCase());
    if(indice !== -1){
        productos.splice(indice ,1);
        console.log("¡Producto eliminado correctamente!");
        alert("Producto eliminado correctamente");
    
    }else {
        alert(`Producto ${nombre} no encontrado`)
        }
};


const main = () => {
    let opcion= " ";

    while(opcion !== "4"){
        opcion= prompt("Por favor, selecciona una opción:  \n1. Agregar Productos  \n2. Ver Productos \n3. Eliminar Producto \n4. Salir ")
        switch(opcion){
            case "1" :
                const nuevoProducto = pedirDatosProductos();
                if(nuevoProducto) {
                     agregarProductos(nuevoProducto);
                    }
                break;

            case "2": 
                mostrarProductos();
                break;

            case "3": 
                const productoEliminar = prompt("Ingresa el nombre del producto que deseas eliminar");
                eliminarProductos(productoEliminar);
            break;

            case "4":
                console.log("saliendo...");
            default:
                if(opcion !== "4"){
                alert("Opción NO válida. Por favor, ingrese otra");
                }
        }
    }    
};

main();
