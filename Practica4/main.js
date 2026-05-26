import { ListaProductos } from "./lista_productos.js";
import { Pedido } from "./pedidos.js";
import promptSync from "prompt-sync";

let lista_productos = new ListaProductos([
        {nombre: "pan", precio: 15, categoria: "postre"},
        {nombre: "cafe", precio: 20, categoria: "bebida"},
        {nombre: "agua", precio: 15, categoria: "bebida"},
        {nombre: "waffle", precio: 14, categoria: "postre"}
    ]
    );

let promociones = [];

let pedidos = new Pedido(lista_productos);

const prompt = promptSync();

// Función que recibe un callback
function procesarPedido(producto, callback) {
    // Muestra qué pedido se está procesando
    console.log(`Procesando pedido #${producto} `);

// Espera 3 segundos antes de ejecutar el callback
    setTimeout(() => {

        callback();

    }, 3000);
}

function crear_promociones (promociones, productos, nuevo_precio) {
    promociones.push({productos: productos, nuevo_precio});
}

crear_promociones(promociones, ["pan", "cafe"], 20);

function buscar_producto (productos, name_producto) {
    let producto_encontrado = productos.find((producto) => producto.nombre === name_producto);
    if (producto_encontrado) {
        console.table(producto_encontrado);
        menu_cliente();
    } else {
        console.log(`Producto no encontrado...`);
    }
}

function menu_cocina () {
    

    console.log(`
            Menú Cocina:
            1. Agregar Producto.
            2. Editar Producto.
            3. Eliminar Producto.
            4. Listar Productos.
            0. Volver.
        `);
    let entrada = prompt(`Ingrese opción: `);
    if (entrada == 1) {
        console.log(`
            Agregar producto:
            `);
        let nombre = prompt(`Ingrese nombre de producto: `);
        let precio = Number(prompt(`Ingrese precio del producto: `));
        let categoria = prompt(`Ingrese la categoría: `);
        lista_productos.agregar_producto(nombre, precio, categoria);

        menu_cocina();
    } else if (entrada == 2) {
        console.log(`Editar Producto: `);
        let indice = Number(prompt(`Ingrese el índice del producto que desea modificar: `));
        let nombre = prompt(`Ingrese nombre de producto: `);
        let precio = Number(prompt(`Ingrese precio del producto: `));
        let categoria = prompt(`Ingrese la categoría: `);
        
        lista_productos.editar_producto(indice, nombre, categoria, precio);

        menu_cocina();
    } else if (entrada ==  3) {
        console.log(`Eliminar Producto: `);
        lista_productos.ver_productos();
        let indice = prompt(`Ingrese el índice del producto que desea eliminar: `);
        lista_productos.eliminar_producto(indice);

        menu_cocina();
    } else if (entrada == 4) {
        lista_productos.ver_productos();

        menu_cocina();
    } else if (entrada == 0) {
        menu_principal();
    } else {
        menu_cocina();
    }
}

function menu_cajas () {
    console.log(`Menú Caja:
                1. Lista Pedidos.
                2. Agregar pedido.
                3. Total Pedidos.
                0. Volver.
        `);

        let entrada = prompt(`Ingrese opción: `);

    if (entrada == 1) {
        pedidos.ver_pedidos();
        
        menu_cajas();

    } 
    
    else if (entrada == 2) {
        // Muestra los productos disponibles
        lista_productos.ver_productos();

        // Pide al usuario el ID del producto
        let indice = prompt("Porfavor ingrese el ID del producto: ");

         // Pide la cantidad del producto
        let cantidad = prompt("Porfavor ingrese cantidad: ");

        // Agrega el pedido al arreglo productos_pedidos
        pedidos.agregar_pedido(indice, cantidad);

        // Obtiene la posición del último pedido agregado
        let ultimoPedido = pedidos.productos_pedidos.length - 1;

        // Obtiene el nombre del producto del último pedido
        let producto =
        pedidos.productos_pedidos[ultimoPedido].producto;

         // Pregunta si el pedido será realizado o cancelado
        let opcion = prompt(`
        1. Realizar pedido.
        2. Cancelar pedido.
        Seleccione opción: `);

        if (opcion == 1) {
            //si el usuario selecciona la opcion 1
            // llama a la función procesarPedido y manda un callback
            procesarPedido(producto, () => {
                
            // este código se ejecuta cuando callback() es llamado
                console.log("Pedido listo.");
            });

        } else if (opcion == 2) {
            //se manda un callback para cancelar
            procesarPedido(producto, () => {
                console.log("Pedido cancelado.");
            });

        } else {
            // si la opción no existe
            console.log("Opción inválida.");
        }

        //regresa al menú de Caja
        menu_cajas();
    }

    else if (entrada == 3) {
        pedidos.ver_pedidos();
        let subtotal = pedidos.obtener_subtotal();
        let total = pedidos.obtener_total();
        console.log(`
            Subtotal: ${subtotal}
            IVA: ${subtotal * 0.16}        
            Total: ${total}
        `);
        menu_cajas();

    } else if (entrada == 0) {
        menu_principal();

    } else {
        menu_cajas();
    }
}

function menu_cliente () {
    console.log(`
        Menú Cliente:
        1. Consultar Productos.
        2. Filtrar Caros
        3. Filtrar Baratos.
        4. Filtrar Postres.
        5. Filtrar Bebidas.
        6. Listar Pedidos.
        7. Ver Promociones.
        8. Buscar Producto.
        0. Volvler
        `);
    let entrada = prompt(`Ingrese opción: `);

    if (entrada == 1) {
        lista_productos.ver_productos();
        menu_cliente();
    } else if (entrada == 2) {
        lista_productos.filtrar_productos(1);
        menu_cliente();
    } else if (entrada == 3) {
        lista_productos.filtrar_productos(2);
        menu_cliente();
    } else if (entrada == 4) {
        lista_productos.filtrar_productos(3);
        menu_cliente();
    } else if (entrada == 5) {
        lista_productos.filtrar_productos(4);
        menu_cliente();
    } else if (entrada == 6) {
        pedidos.ver_pedidos();
        menu_cliente();
    } else if (entrada == 7) {
        console.log(`Promociones Disponibles:`);
        console.table(promociones);
        menu_cliente();
    } else if (entrada == 8) {
        let buscado = prompt("¿Qué producto desea buscar?: ");
        buscar_producto(lista_productos.productos, buscado);
        menu_cliente();
    } else if (entrada == 0) {
        menu_principal();
    } else {
        menu_cliente();
    }
}

function menu_principal () {
    console.log(`
        Módulos Disponibles:
        1. Cocina.
        2. Cajas.
        3. Clientes.
        0. Salir.
        `);
    let entrada = prompt(`Ingrese el módulo al que desea ingresar: `);
    
    if (entrada == 1) {
        menu_cocina();
    } else if (entrada == 2) {
        menu_cajas();
    } else if (entrada == 3) {
        menu_cliente();
    } else if (entrada == 0) {
        console.log(`Saliendo del Programa...`);
    } else {
        menu_principal();
    }

}

menu_principal();