


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
    find(key){
        var element;
        this.#elementos.forEach(function(elemento, indice){
            if (elemento.clave == key){
                element = elemento.valor;
            }
        })
        return element;
    }
   
    /* Agrega un nuevo par clave - valor, teniendo en cuenta que no exista una clave
     Ademas cumple con el requisito de ser unica ya que si se agrega una igual a una clave
     existente modificara su valor y no se agregara dos veces.
    */
    add(clave, valor) {
        var key = this.find(clave);
        /*  Me aseguro que sea un string la clave */
        if (typeof(clave) != 'string' )
        {
            return NaN;
        }
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

    /* Devuelvo una lista ordenadas de claves  */
    sortedList(){
        var srtLst = [];
        if (this.count() != 0){
            this.#elementos.forEach(function(element){
                srtLst.push(element.clave); // Solamente almaceno la clave en un nuevo array
            });
            /* Devuelvo la lista de claves ordenadas */
            return srtLst.sort()
        }else{
            return NaN;
        }
    }

    /* Borro un elemento a partir de una clave */
    eraseItem(key){
        var item = -1;
        this.#elementos.forEach(function(elemento, indice){
            if (elemento.clave == key){
               item = indice;
            }
        });
        if (item >= 0){
            this.#elementos.splice(item);
            return true;
        }else{
            return false;
        }
        
    }

};

