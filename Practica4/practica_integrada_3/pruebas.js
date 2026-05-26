import { ListaProductos } from "./lista_productos.js";
import { Pedido } from "./pedidos.js";


let lista_productos = new ListaProductos([
    {nombre: "pan", precio: 15, categoria: "postre"},
    {nombre: "cafe", precio: 20, categoria: "bebida"},
    {nombre: "agua", precio: 15, categoria: "bebida"},
    {nombre: "waffle", precio: 14, categoria: "postre"}
]
);

lista_productos.ver_productos();
lista_productos.agregar_producto("frappe", 20, "bebida");
lista_productos.ver_productos();
lista_productos.editar_producto(0, "agua", "bebida", 5);
lista_productos.ver_productos();
lista_productos.eliminar_producto(1);
lista_productos.ver_productos();

let pedidos = new Pedido(lista_productos);
pedidos.agregar_pedido(1, 9);
pedidos.agregar_pedido(0, 2);
pedidos.ver_pedidos();
pedidos.obtener_total();


console.log(pedidos.obtener_subtotal());
console.log(pedidos.obtener_total());

lista_productos.filtrar_productos(3);