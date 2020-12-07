/**
 *  v  En una lista vacía hay cero elementos.
 *  v Cuando se agrega un elemento a una lista vacía hay un elemento.
 *  v En una lista vacía no se encuentra ninguna clave.
 *  v Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
 *  v Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
 *  v Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
 *  v Cuando se agrega un elemento a la lista de claves esta ordenada.
 */

/* 
Requisitos escritos en clase:

1.  v Almacena pares clave:valor. 
2.  v Las claves deben ser únicas.
3.  v Las claves son cadenas de texto.
4.  v Se debe poder recuperar un valor a partir de una clave.
5.  v Se debe poder actualizar el valor asociado a una clave.
6.  v Se debe poder recuperar la cantidad de elementos almacenados en la lista.
7.  v Se debe poder recuperar una lista ordenada con las claves almacenadas en la lista.
8.  v Se puede borrar una pareja a partir de la clave.
*/

const assert = require("chai").assert;
const Lista = require("../src/lista.js");

/* Test para una nueva lista vacia donde no se agregan elementos aun */
describe("en una lista vacia" , function() {
    var lista = new Lista();

    it("hay cero elementos", function() {
        assert.equal(lista.count(), 0);
    })

    it("no se encuentra ninguna clave", function() {
        assert.equal(lista.count(), 0);
    })
})

/* Tests para listas que estan vacias y se agrega un elemento */

describe("cuado se agrega un elemento a una lista vacía" , function() {
    var lista = new Lista();

    lista.add("clave", "valor");

    it("hay un elemento", function() {
        assert.equal(lista.count(), 1);
    });

    it("se puede recuperar el valor a partir de la clave", function() {
        assert.equal(lista.getValue("clave"), "valor");
    });
})

/* Creo otro describe ya que para estos test asumo que la lista no esta vacia y contiene
mas de un elemento
 */
describe("cuado se agrega un elemento" , function() {
    
    var lista = new Lista();
    lista.add("xxxxx", "valor2"); 
    lista.add("zzzzz", "valorZ");
    lista.add("clave", "valor");
    lista.add("clave3", "valor3");
    lista.add("bbbbb", "valor4");
    lista.add("aaaaa", "valorA");

    it("la lista de claves esta ordenada", function() {
        var orderedKeys = [ "aaaaa","bbbbb", "clave", "clave3", "xxxxx", "zzzzz" ]; // Lista de claves esperada
        assert.deepEqual(lista.sortedList(), orderedKeys);
    });
    
})

/* Creo otro describe ya que para estos test asumo que la lista no esta vacia y las operaciones
se realizan con las claves.
 */
describe("cuado se agrega una clave que ya esta en la lista" , function() {
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.add("clave2", "valor2");
    lista.add("clave3", "valor3");

    it("Devuelve una lista ordenada de claves", function(){
        var orderedList = [ "avclave", "clave", "clave2", "clave3", "fclave2", "zclave3" ];
        
        lista.add("avclave", "valor");
        lista.add("fclave2", "valor2");
        lista.add("zclave3", "valor3");
        
        assert.deepEqual(lista.sortedList(), orderedList);
    });

    it("se actualiza el valor correspondiente.", function() {
        lista.add("clave2", "valorNuevo");
        assert.equal(lista.getValue("clave2"), "valorNuevo");
    });
    
})

/* Creo otra prueba para poder borrar elementos.
 */
describe("a partir de una clave" , function() {
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.add("clave2", "valor2");
    lista.add("clave3", "valor3");


    it("se puede borrar un elemento del array", function() {
        lista.eraseItem("clave2");
        assert.isUndefined(lista.getValue("clave2"));
    });
    
})
