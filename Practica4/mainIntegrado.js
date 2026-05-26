import { ListaProductos } from "./lista_productos.js";
import { Pedido } from "./pedidos.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

let lista_productos = new ListaProductos([
    { nombre: "pan", precio: 15, categoria: "postre" },
    { nombre: "cafe", precio: 20, categoria: "bebida" },
    { nombre: "agua", precio: 15, categoria: "bebida" },
    { nombre: "waffle", precio: 14, categoria: "postre" }
]);

let promociones = [];

let pedidos = new Pedido(lista_productos);

// INVENTARIO DE COCINA

let inventario_cocina = [
    { ingrediente: "cafe", cantidad: 5 },
    { ingrediente: "agua", cantidad: 5 },
    { ingrediente: "azucar", cantidad: 5 },
    { ingrediente: "vaso", cantidad: 5 }
];

function ver_ingredientes() {
    console.log(`\nIngredientes disponibles en cocina:`);
    console.table(inventario_cocina);
}

function buscar_ingrediente(nombre) {
    return inventario_cocina.find(
        item => item.ingrediente === nombre
    );
}

function preparar_cafe() {

    console.log(`\nPreparar Café:`);

    let receta_cafe = [
        { ingrediente: "cafe", cantidad: 1 },
        { ingrediente: "agua", cantidad: 1 },
        { ingrediente: "azucar", cantidad: 1 },
        { ingrediente: "vaso", cantidad: 1 }
    ];

    let faltantes = receta_cafe.filter(item => {

        let ingrediente =
        buscar_ingrediente(item.ingrediente);

        return !ingrediente ||
        ingrediente.cantidad < item.cantidad;
    });

    if (faltantes.length > 0) {

        console.log(
            `No se puede preparar el café. Falta ingrediente:`
        );

        console.table(faltantes);

        return;
    }

    receta_cafe.forEach(item => {

        let ingrediente =
        buscar_ingrediente(item.ingrediente);

        ingrediente.cantidad -= item.cantidad;
    });

    console.log(`Calentando agua...`);
    console.log(`Agregando café...`);
    console.log(`Agregando azúcar...`);
    console.log(`Sirviendo en vaso...`);
    console.log(`Café preparado correctamente.`);
}

function simular_error_cocina() {

    console.log(`\nError en Cocina:`);

    let error = prompt(
        `Describe el error ocurrido en cocina: `
    );

    console.log(`
        Se presentó un error en cocina:
        ${error}

        Estado: preparación detenida.
        Acción: revisar el problema antes de continuar.
    `);
}

function simular_falta_ingrediente() {

    console.log(`\nSimular falta de ingrediente:`);

    ver_ingredientes();

    let nombre = prompt(
        `Ingrese el ingrediente que desea agotar: `
    ).toLowerCase();

    let ingrediente = buscar_ingrediente(nombre);

    if (ingrediente) {

        ingrediente.cantidad = 0;

        console.log(
            `El ingrediente "${nombre}" ahora está agotado.`
        );

    } else {

        console.log(
            `El ingrediente no existe en el inventario.`
        );
    }
}

// PROMOCIONES

function crear_promociones(
    promociones,
    productos,
    nuevo_precio
) {

    promociones.push({
        productos: productos,
        nuevo_precio
    });
}

crear_promociones(
    promociones,
    ["pan", "cafe"],
    20
);



// CALLBACKS PEDIDOS

// Callback cuando el pedido está listo
function pedidoListo() {

    console.log("Pedido listo.");

    menu_cajas();
}

// Callback cuando el pedido es cancelado
function pedidoCancelado() {

    console.log("Pedido cancelado.");

    menu_cajas();
}

// Función principal que recibe un callback
function procesarPedido(producto, callback) {

    console.log(
        `Procesando pedido de ${producto}...`
    );

    setTimeout(callback, 3000);
}



// BUSCAR PRODUCTO

function buscar_producto(
    productos,
    name_producto
) {

    let producto_encontrado =
    productos.find(
        (producto) =>
        producto.nombre === name_producto
    );

    if (producto_encontrado) {

        console.table(producto_encontrado);

        menu_cliente();

    } else {

        console.log(`Producto no encontrado...`);
    }
}


// MENU COCINA

function menu_cocina() {

    console.log(`
            Menú Cocina:
            1. Agregar Producto.
            2. Editar Producto.
            3. Eliminar Producto.
            4. Listar Productos.
            5. Preparar Café.
            6. Simular Error en Cocina.
            7. Simular Falta de Ingrediente.
            8. Ver Ingredientes.
            0. Volver.
        `);

    let entrada = prompt(`Ingrese opción: `);

    if (entrada == 1) {

        console.log(`
            Agregar producto:
        `);

        let nombre =
        prompt(`Ingrese nombre de producto: `);

        let precio = Number(
            prompt(`Ingrese precio del producto: `)
        );

        let categoria =
        prompt(`Ingrese la categoría: `);

        lista_productos.agregar_producto(
            nombre,
            precio,
            categoria
        );

        menu_cocina();

    }

    else if (entrada == 2) {

        console.log(`Editar Producto:`);

        let indice = Number(
            prompt(
                `Ingrese el índice del producto que desea modificar: `
            )
        );

        let nombre =
        prompt(`Ingrese nombre de producto: `);

        let precio = Number(
            prompt(`Ingrese precio del producto: `)
        );

        let categoria =
        prompt(`Ingrese la categoría: `);

        lista_productos.editar_producto(
            indice,
            nombre,
            categoria,
            precio
        );

        menu_cocina();
    }

    else if (entrada == 3) {

        console.log(`Eliminar Producto:`);

        lista_productos.ver_productos();

        let indice = prompt(
            `Ingrese el índice del producto que desea eliminar: `
        );

        lista_productos.eliminar_producto(indice);

        menu_cocina();
    }

    else if (entrada == 4) {

        lista_productos.ver_productos();

        menu_cocina();
    }

    else if (entrada == 5) {

        preparar_cafe();

        menu_cocina();
    }

    else if (entrada == 6) {

        simular_error_cocina();

        menu_cocina();
    }

    else if (entrada == 7) {

        simular_falta_ingrediente();

        menu_cocina();
    }

    else if (entrada == 8) {

        ver_ingredientes();

        menu_cocina();
    }

    else if (entrada == 0) {

        menu_principal();
    }

    else {

        console.log(`Opción no válida.`);

        menu_cocina();
    }
}



// MENU CAJAS

function menu_cajas() {

    console.log(`
        Menú Caja:
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

        lista_productos.ver_productos();

        let indice = prompt(
            "Porfavor ingrese el ID del producto: "
        );

        let cantidad = prompt(
            "Porfavor ingrese cantidad: "
        );

        setTimeout(() => {
            console.log(`Pedido Recibido`);
        }, 1000);

        setTimeout(() => {
            console.log(`Preparando...`);
        }, 2000);

        setTimeout(() => {
            console.log(`Empacando...`);
        }, 3000);

        setTimeout(() => {

            pedidos.agregar_pedido(
                indice,
                cantidad
            );

            console.log(`Pedido agregado...`);

            let ultimoPedido =
            pedidos.productos_pedidos.length - 1;

            let producto =
            pedidos.productos_pedidos[
                ultimoPedido
            ].producto;

            let opcion = prompt(`
                1. Realizar pedido.
                2. Cancelar pedido.
                Seleccione opción:
            `);

            if (opcion == 1) {

                procesarPedido(
                    producto,
                    pedidoListo
                );
            }

            else if (opcion == 2) {

                procesarPedido(
                    producto,
                    pedidoCancelado
                );
            }

            else {

                console.log("Opción inválida.");

                menu_cajas();
            }

        }, 4000);
    }

    else if (entrada == 3) {

        pedidos.ver_pedidos();

        let subtotal =
        pedidos.obtener_subtotal();

        let total =
        pedidos.obtener_total();

        console.log(`
            Subtotal: ${subtotal}
            IVA: ${subtotal * 0.16}
            Total: ${total}
        `);

        menu_cajas();
    }

    else if (entrada == 0) {

        menu_principal();
    }

    else {

        menu_cajas();
    }
}



// MENU CLIENTES

function menu_cliente() {

    console.log(`
        Menú Cliente:
        1. Consultar Productos.
        2. Filtrar Caros.
        3. Filtrar Baratos.
        4. Filtrar Postres.
        5. Filtrar Bebidas.
        6. Listar Pedidos.
        7. Ver Promociones.
        8. Buscar Producto.
        0. Volver.
    `);

    let entrada = prompt(`Ingrese opción: `);

    if (entrada == 1) {

        lista_productos.ver_productos();

        menu_cliente();
    }

    else if (entrada == 2) {

        lista_productos.filtrar_productos(1);

        menu_cliente();
    }

    else if (entrada == 3) {

        lista_productos.filtrar_productos(2);

        menu_cliente();
    }

    else if (entrada == 4) {

        lista_productos.filtrar_productos(3);

        menu_cliente();
    }

    else if (entrada == 5) {

        lista_productos.filtrar_productos(4);

        menu_cliente();
    }

    else if (entrada == 6) {

        pedidos.ver_pedidos();

        menu_cliente();
    }

    else if (entrada == 7) {

        console.log(`Promociones Disponibles:`);

        console.table(promociones);

        menu_cliente();
    }

    else if (entrada == 8) {

        let buscado = prompt(
            "¿Qué producto desea buscar?: "
        );

        buscar_producto(
            lista_productos.productos,
            buscado
        );

        menu_cliente();
    }

    else if (entrada == 0) {

        menu_principal();
    }

    else {

        menu_cliente();
    }
}

// MENU PRINCIPAL
function menu_principal() {

    console.log(`
        Módulos Disponibles:
        1. Cocina.
        2. Cajas.
        3. Clientes.
        0. Salir.
    `);

    let entrada = prompt(
        `Ingrese el módulo al que desea ingresar: `
    );

    if (entrada == 1) {

        menu_cocina();

    }

    else if (entrada == 2) {

        menu_cajas();

    }

    else if (entrada == 3) {

        menu_cliente();

    }

    else if (entrada == 0) {

        console.log(`Saliendo del Programa...`);
    }

    else {

        menu_principal();
    }
}

menu_principal();