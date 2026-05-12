/* JS del lado del servidor, es decir que no nececitamos un html para verlo */

console.log("Hola mundo JS con Node")


/* calculo */

let edad1= 12
let edad2= 34

console.log("Edad promedio: ")
console.log((edad1+edad2)/2)

/* Medir el tiempo del proceso */

console.time("miProceso")

for(let i =0; i< 10000; i++){}
    
console.timeEnd("miProceso")

/* Objetos tipo tabla */
let usuarios=[
    {nombre:"Dalixia", edad: 24},
    {nombre:"Regina", edad: 21}
];

console.log(usuarios)
console.table(usuarios)