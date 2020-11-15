module.exports = class Lista {    
    #elementos;

    constructor() {
        this.#elementos = [];
    }

    count() {
        return this.#elementos.length;
    }

    findByKey(key){
        var element;
        this.#elementos.forEach(function(elemento, indice){
            if (elemento.clave == key){
                element = elemento.valor;
            }
        })
        return element;
    }
    
    find(position) {
        if (this.#elementos.length != 0) {
            return this.#elementos[position].valor;
        }
        return NaN;
    }

    add(clave, valor) {
        var key = this.findByKey(clave);
       
        if (key != null){
            this.#elementos.forEach(function(element, indice){
                if (element.clave == clave){
                    element.valor = valor;                 
                }
            })
        }else{
            this.#elementos.push({clave, valor});
        }
    }
};

