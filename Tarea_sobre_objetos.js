class juegosVarios {
    constructor (nombreDelJuego, añoDePublicacion, tipoDeJuego, valoracion, tamañoDelJuego, dispositivos) {
        this.nombreDelJuego = nombreDelJuego;
        this.añoDePublicacion = añoDePublicacion;
        this.tipoDeJuego = tipoDeJuego;
        this.valoracion = valoracion;
        this.tamañoDelJuego = tamañoDelJuego;
        this.dispositivos = dispositivos;
    }
}
let pesoJuego = " MB";
let freeFire = new juegosVarios("Free Fire", 2017, "Battle Royale", "4.5 de estrellas", 560 + pesoJuego, "Android, Apple y PC");
console.log(freeFire);
let mobile_Legends = new juegosVarios("Mobile Legends", 2016, "Multijugador en linea", "4.7 de estrellas", 165 + pesoJuego, "Android, Apple y PC");
console.log(mobile_Legends);
let clashRoyal = new juegosVarios("Clash Royal", 2016, "Estrategia en linea", "4.4 de estrellas", 270 + pesoJuego, "Android, Apple y PC");
console.log(clashRoyal);
