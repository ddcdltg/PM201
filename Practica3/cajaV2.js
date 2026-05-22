const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Productos existentes
let productos = [
    { nombre: "Cafe", precio: 45 },
    { nombre: "Pan", precio: 30 },
    { nombre: "Frappe", precio: 65 }
];

// Lista donde se guardan los pedidos
let pedidos = [];

// Función para mostrar productos
function mostrarProductos() {

    console.log("\nPRODUCTOS:");

    // Recorre el arreglo de productos
    for(let i = 0; i < productos.length; i++) {

        // Destructuring: Extrae nombre y precio del objeto actual
        let { nombre, precio } = productos[i];

        console.log(
            i + " - " +
            nombre +
            " $" +
            precio
        );
    }
}

// Función de agregar pedido
function agregarPedido() {

    mostrarProductos();

    rl.question("\nSelecciona un producto: ", function(indice) {

        // Obtiene el producto seleccionado
        let producto = productos[indice];

        // Agrega el producto al arreglo de pedidos
        pedidos.push(producto);

        console.log("\nProducto agregado: " + producto.nombre);

        menu();
    });
}

// Función de ver pedidos
function verPedidos() {

    console.log("\nPEDIDOS:");

    // Mostrar pedidos realizados
    for(let i = 0; i < pedidos.length; i++) { // .length obtiene la cantidad de elementos del arreglo

        // Destructuring: Extrae del objeto el nombre y precio del pedido
        let { nombre, precio } = pedidos[i];

        console.log(
            nombre +
            " $" +
            precio
        );
    }

    // reduce() Recorre todos los pedidos y suma los precios
    let subtotal = pedidos.reduce(function(acumulador, producto) {

        return acumulador + producto.precio;

    }, 0);

    // Calcular IVA
    let iva = subtotal * 0.16;

    // Calcular total final
    let total = subtotal + iva;

    // Mostrar resultados
    console.log("\nSUBTOTAL: $" + subtotal.toFixed(2)); //To fixed sirve para mostrar cantidades con decimales

    console.log("IVA: $" + iva.toFixed(2));

    console.log("TOTAL: $" + total.toFixed(2));

    menu();
}

// MENÚ
function menu() {

    console.log("\nCAJA");

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

// Iniciar programa
menu();
