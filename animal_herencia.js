class animal {
    #patas = 4;
    constructor(patas) {
        this.#patas = patas;
    }
    get patas() {
        return this.#patas;
    }
}

class mamifero extends animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Pez extends animal {
    constructor (patas) {
        super(patas);
    }
}

class reptil extends animal {
    constructor (patas) {
        super(patas);
    }
}

class ave extends animal {
    constructor (patas) {
        super(patas);
    }
}

// creaccion de instancias
const pez = new Pez(0);
console.log(pez.patas);
const mam = new mamifero(2);
console.log(mam.patas);