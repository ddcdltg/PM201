const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menú de pruema

let productos = [
    { nombre: "Café", precio: 45 },
    { nombre: "Pan", precio: 30 },
    { nombre: "Frappé", precio: 65 }
];

let pedidos = [];
let total = 0;

// Funciones generales

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


// Módulo de cocina 

function agregarProducto() {

    rl.question("Nombre: ", function(nombre) {

        rl.question("Precio: ", function(precio) {

            productos.push({
                nombre: nombre,
                precio: Number(precio)
            });

            console.log("Producto agregado");

            menuCocina();
        });
    });
}

function eliminarProducto() {

    mostrarProductos();

    rl.question("\nÍndice a eliminar: ", function(indice) {

        productos.splice(indice, 1);

        console.log("Producto eliminado");

        menuCocina();
    });
}

function menuCocina() {

    console.log("\n COCINA ");

    console.log("1. Agregar producto");
    console.log("2. Eliminar producto");
    console.log("3. Ver productos");
    console.log("4. Volver");

    rl.question("\nOpción: ", function(opcion) {

        if(opcion == 1) {
            agregarProducto();
        }

        else if(opcion == 2) {
            eliminarProducto();
        }

        else if(opcion == 3) {

            mostrarProductos();

            menuCocina();
        }

        else {
            menuPrincipal();
        }
    });
}


// Módulo de Caja

function agregarPedido() {

    mostrarProductos();

    rl.question(
        "\nSelecciona un producto (o escribe 'x' para terminar): ",
        function(indice) {

            // Finalizar pedido
            if(indice == "x") {

                console.log("\nPedido realizado correctamente");

                menuCaja();

                return;
            }

            let producto = productos[indice];

            // Validar producto
            if(producto == undefined) {

                console.log("Producto inválido");

                agregarPedido();

                return;
            }

            // Agregar producto al pedido
            pedidos.push(producto);

            total = total + producto.precio;

            console.log(
                "\nProducto agregado: " +
                producto.nombre
            );

            // Seguir agregando productos
            agregarPedido();
        }
    );
}

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

    menuCaja();
}

function menuCaja() {

    console.log("\n CAJA ");

    console.log("1. Ver productos");
    console.log("2. Agregar pedido");
    console.log("3. Ver pedidos");
    console.log("4. Volver al menú principal");

    rl.question("\nOpción: ", function(opcion) {

        if(opcion == 1) {

            mostrarProductos();

            menuCaja();
        }

        else if(opcion == 2) {
            agregarPedido();
        }

        else if(opcion == 3) {
            verPedidos();
        }

        else {
            menuPrincipal();
        }
    });
}


// Módulo de Cliente

// Crear pedido Cliente 
function crearPedidoCliente() {

    mostrarProductos();

    rl.question(
        "\nSelecciona un producto (x para terminar): ",
        function(indice) {

            // Finalizar pedido
            if(indice == "x") {

                console.log("\nPedido realizado exitosamente, espera a que te llamen para recibirlo");

                // Regresar al menú cliente
                menuCliente();

                return;
            }

            let producto = productos[indice];

            // Validar producto
            if(producto == undefined) {

                console.log("Producto inválido");

                crearPedidoCliente();

                return;
            }

            // Agregar producto
            pedidos.push(producto);

            total = total + producto.precio;

            console.log(
                "\nProducto agregado: " +
                producto.nombre
            );

            // Seguir agregando productos
            crearPedidoCliente();
        }
    );
}

function menuCliente() {

    console.log("\n CLIENTE ");

    console.log("\n Bienvenido a la cafetería Coffee Code");
    console.log("\n Selecciona una opción: ");

    console.log("1. Consultar productos");
    console.log("2. Crear pedido");
    console.log("3. Volver al menú principal");

    rl.question("\nOpción: ", function(opcion) {

        if(opcion == 1) {

            mostrarProductos();

            menuCliente();
        }

        else if(opcion == 2) {

            crearPedidoCliente();
        }

        else {

            menuPrincipal();
        }
    });
}

// MENÚ PRINCIPAL

function menuPrincipal() {

    console.log("\nMenú principal de Cafetería Coffee Code");

    console.log("\nSelecciona el módulo al que deseas acceder:");
    console.log("1. Cocina");
    console.log("2. Cajero");
    console.log("3. Cliente");
    console.log("4. Salir");

    rl.question("\nSelecciona módulo: ", function(opcion) {

        if(opcion == 1) {
            menuCocina();
        }

        else if(opcion == 2) {
            menuCaja();
        }

        else if(opcion == 3) {
            menuCliente();
        }

        else if(opcion == 4) {

            console.log("Programa finalizado");

            rl.close();
        }

        else {

            console.log("Opción inválida");

            menuPrincipal();
        }
    });
}

menuPrincipal();