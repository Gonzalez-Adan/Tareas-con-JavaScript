let arrDeFiguras = ["Circulo", "Triangulo", "Rectangulo", "Pentagono"];
console.log({arrDeFiguras});

// Splice recibe varios argumentos, en la posicion 2 va a poner cuadrado y trapezoide y el 0 significa que no va a reemplazar 
// lo que estaba en rectangulo "circulo", "triangulo" 
arrDeFiguras.splice(2, 0, "Cuadrado", "Trapezoide");
console.log({arrDeFiguras});

// Borrar elementos
arrDeFiguras.splice(2, 4, "Rombo");
console.log({arrDeFiguras});

const valorObtenidoDeSplice = arrDeFiguras.splice(2, 0);

// El experimento de traer solamente
// "Circulo", "Triangulo" y "cuadrado"
const cortadito_1 = arrDeFiguras.splice(0, 2);
const cortadito_2 = arrDeFiguras[0];
const mezclar = cortadito_1.concat(cortadito_2);
console.log({arrDeFiguras});

