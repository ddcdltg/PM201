export class ListaProductos {
    //Clase de una lista de productos, define la lista, la muestra, agrega un nuevo producto, edita un productos de la lista o lo elimina.
    //Se debe pasar un Array de diccionarios como argumento.
    constructor(productos) {
        //Inicializa la lista de productos, se le debe pasar un Array de diccionarios.
        this.productos = productos;
    }

    ver_productos() {
        //Muestra los productos, los devuelve con una vista de tabla.
        console.log(`\nProductos Disponibles:`);
        console.table(this.productos);
    }

    agregar_producto (nombre, precio, categoria) {
        //Agrega un producto, recibe como argumentos el nombre del producto y su precio.
        console.log(`\nAgregar producto:`);
        this.productos.push({nombre: nombre, precio: precio, categoria: categoria});
        console.log(`Producto agregado...`);
    }

    editar_producto (indice, nuevo_nombre, categoria, nuevo_precio) {
        //Edita un producto contenido en la lista de productos, recibe como argumentos el índice del argumento que se quiere editar,
        //el nuevo nombre del producto y su nuevo precio.
        console.log(`\nEditar producto:`);
        this.productos[indice] = {nombre: nuevo_nombre, precio: nuevo_precio, categoria: categoria};
        console.log(`Producto edtado...`);
    }

    eliminar_producto (indice) {
        //Elimina un producto
        //Recibe como argumento el índice del producto que se desea eliminar.
        this.productos.splice(indice, 1);
        console.log(`Producto eliminado...\n`);
    }

    filtrar_productos (tipo){
        let arreglo_filtrado = [];
        if (tipo == 1) {
            //Filtrar por baratos
            console.log(`\nFiltrado por productos baratos:`);
            arreglo_filtrado = this.productos.filter(producto => producto.precio > 50);
            console.table(arreglo_filtrado);
        } else if (tipo == 2) {
            //Filtrar caros
            console.log(`\nFiltrado por productos caros:`);
            arreglo_filtrado = this.productos.filter(producto => producto.precio <= 50);
            console.table(arreglo_filtrado);
        } else if (tipo == 3) {
            //Filtrar postres
            console.log(`\nFiltrado por Postres:`);
            arreglo_filtrado = this.productos.filter(producto => producto.categoria === "postre");
            console.table(arreglo_filtrado);
        } else if (tipo == 4) {
            //Filtrar bebidas
            console.log(`\nFiltrado por bebidas:`);
            arreglo_filtrado = this.productos.filter(producto => producto.categoria === "bebida");
            console.table(arreglo_filtrado);
        }
    }
}


