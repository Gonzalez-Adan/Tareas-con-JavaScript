function crearpersona (nombre, apellidos, cedula) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.cedula = cedula;
}

// Una instancia, creacion antigua
let achar = new crearpersona("Marcelo", "Achar", "9645558");
achar.cedula = "31267890";
console.log(achar);

// Creacion de clase
class Persona {
    constructor(nombre, apellidos, cedula, altura) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.altura = altura;
        this.sexo = "";
        this.amigos = [];
    }
    agregarAmigos(amigos) {
        if(amigos) {
            this.amigos.push(amigos);
        }
    }
}

// Como creo una instancia de persona 
let giovanni = new Persona("Giovanni", "Gonzalez", "9634582", 1.72);
giovanni.sexo = "M";
let mayerli = new Persona("Mayerli", "Torres", "55542358", 1.63);
mayerli.sexo = "F";
let sebastian = new Persona("Sebastian", "Santacruz", "500000", 1.81);

giovanni.agregarAmigos(mayerli);
giovanni.agregarAmigos(sebastian);

console.log(giovanni);
