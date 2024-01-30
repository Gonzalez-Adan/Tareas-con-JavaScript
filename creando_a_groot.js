// la encapsulacion
class Groot {
    #fechaDeAparicion; // atributo privado
    constructor(fechaDeAparicion) {
        this.edad = 60;

        // atributo o propiedad privada        
        this.#fechaDeAparicion = fechaDeAparicion;
    }
    #succionarMadera() {}
}

// Crear la instancia
let grootcito = new Groot("13-NOV-1960");
console.log(grootcito.edad);
let grootJoven = new Groot("29-ENE-2024");
grootJoven.edad = 11;
console.log(grootJoven.edad);