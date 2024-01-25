/* Crear un array vacío para usar en una lista de compras
Agregar leche, pan, manzanas a tu lista.
Actualizar pan con bananas y huevos.
Remover el último elemento del array y mostrar en consola.
Ordenar la lista alfabéticamente
Encuentra y muestra la salida del index del valor "leche".
Después de bananas, agrega zanahorias y lechuga.
Crea una nueva lista conteniendo jugo y pop.
Combina ambas listas, agrega la nueva lista dos veces al final de la primera lista.
Obtener el último valor de index de pop y muestra en consola.
Tu lista final debería verse así: ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]
*/

// Nombramos una variable para el array
let listaDeCompras = ["leche", "pan", "manzanas"];

// Splice para borrar el elemento pan
listaDeCompras.splice(1, 1);

// Push para añadir nuevos elementos al array
listaDeCompras.push("bananas", "huevos");

// Pop para borrar el ultimo elemento del array
listaDeCompras.pop();

// Sort para ordenar alfabeticamente
listaDeCompras.sort();

// Mostrando en la consola
console.log({listaDeCompras});

let indexDeleche = listaDeCompras.indexOf("leche");
console.log("El indice de leche es: " + indexDeleche);

listaDeCompras.push("zanahoria", "lechuga");
console.log(listaDeCompras);

let nuevaLista = ["jugo", "pop"];

let combinarAmbasListas = listaDeCompras.concat(nuevaLista);
console.log(combinarAmbasListas);

let indexDePop = combinarAmbasListas.indexOf("pop");
console.log("El indice de pop es: " + indexDePop);



