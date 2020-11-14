module.exports = class Lista {    
    #elementos;

    constructor() {
        this.#elementos = [];
    }

    count() {
        return this.#elementos.length;
    }

    findByKey(key){
        return "valor";
    }
    find(position) {
        if (this.#elementos.length != 0) {
            return this.#elementos[position].valor;
        }
        return NaN;
    }

    add(clave, valor) {
        this.#elementos.push({clave, valor});
    }
};

