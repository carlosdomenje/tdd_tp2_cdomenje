module.exports = class Lista {    
    #elementos;

    constructor() {
        this.#elementos = [];
    }
    /* Retorna la cantidad total de elementos que tiene el array. */
    count() {
        return this.#elementos.length;
    }
    /* Busca un valor por clave */
    findByKey(key){
        var element;
        this.#elementos.forEach(function(elemento, indice){
            if (elemento.clave == key){
                element = elemento.valor;
            }
        })
        return element;
    }
    /* Busca en el array por posicion del mismo mientras no sea 0 la cantidad 
    de elementos */
    find(position) {
        if (this.#elementos.length != 0) {
            return this.#elementos[position].valor;
        }
        return NaN;
    }
    /* Agrega un nuevo par clave - valor, teniendo en cuenta que no exista una clave */
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

