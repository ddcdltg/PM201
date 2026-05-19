const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Productos existentes
let productos = [
    { nombre: "Café", precio: 45 },
    { nombre: "Pan", precio: 30 },
    { nombre: "Frappé", precio: 65 }
];

// Lista de pedidos
let pedidos = [];

// Total acumulado
let total = 0;

// MOSTRAR PRODUCTOS
function mostrarProductos() {

    console.log("\nPRODUCTOS:");

    for(let i = 0; i < productos.length; i++) {

        console.log(
            i + " - " +
            productos[i].nombre +
            " $" +
            productos[i].precio
        );
    }
}

// AGREGAR PEDIDO
function agregarPedido() {

    mostrarProductos();

    rl.question("\nSelecciona un producto: ", function(indice) {

        let producto = productos[indice];

        pedidos.push(producto);

        total = total + producto.precio;

        console.log("\nProducto agregado: " + producto.nombre);

        menu();
    });
}

// VER PEDIDOS
function verPedidos() {

    console.log("\nPEDIDOS:");

    for(let i = 0; i < pedidos.length; i++) {

        console.log(
            pedidos[i].nombre +
            " $" +
            pedidos[i].precio
        );
    }

    console.log("\nTOTAL: $" + total);

    menu();
}

// MENÚ
function menu() {

    console.log("\n CAJA ");

    console.log("1. Ver productos");
    console.log("2. Agregar pedido");
    console.log("3. Ver pedidos");
    console.log("4. Salir");

    rl.question("\nOpción: ", function(opcion) {

        if(opcion == 1) {

            mostrarProductos();

            menu();
        }

        else if(opcion == 2) {
            agregarPedido();
        }

        else if(opcion == 3) {
            verPedidos();
        }

        else if(opcion == 4) {
            rl.close();
        }

        else {

            console.log("Opción inválida");

            menu();
        }
    });
}

menu();