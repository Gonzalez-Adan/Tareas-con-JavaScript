// Definiendo la funcion
function decirHola() {
 // bueno, aqui dentro vas a
 // escribir las sentencias de tu programa o 
 // algoritmo
 console.log("Hola");
}

function otraFuncion() {
    alert("Soy una alerta");
}
// Lo que esta dentro del parentesis se llama parametro, y es por defecto
function decirNombre(nombre = "") {
console.log(`El nombre ingresado es ${nombre}`);
}

function dameElNombreDeMiMascotaNormal(nombre) {
    return nombre;
}
// Funcion flecha, la flechita es el return
const dameElNombreDeMiMascota = (nombre) => nombre;

// Funciones anonimas
const recibiendoFuncionAnonima = function() {console.log("Soy una funcion anonima")};

// Invoco, llamo, call
decirHola();
otraFuncion();
recibiendoFuncionAnonima();
// Lo que esta dentro del parentesis se llama argumento 
decirNombre("Adan");
decirNombre();
const nombreDeMascota = dameElNombreDeMiMascotaNormal("Firulais");

// Usando find
const frutas = ["pomelo", "manzana", "bananas"];
const frutaEncontrada = frutas.find(function(fruta) { return fruta === "pomelo"});
const frutaEncontradaConFuncionFlecha = frutas.find( (fruta) => fruta === "pomelo");
console.log(frutaEncontrada);
console.log(frutaEncontradaConFuncionFlecha);
