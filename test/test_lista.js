/**
 *  v  En una lista vacía hay cero elementos.
 *  v Cuando se agrega un elemento a una lista vacía hay un elemento.
 *  v En una lista vacía no se encuentra ninguna clave.
 *  v Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
 * Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
 *  v Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
 *  v Cuando se agrega un elemento al principio la lista de claves esta ordenada.
 *  v Cuando se agrega un elemento al final la lista de claves esta ordenada.
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
        assert.isNaN(lista.find("clave"));
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
        assert.equal(lista.findByKey("clave"), "valor");
    });

    it("la lista de claves esta ordenada", function(){
        assert.equal(lista.find(0), "valor" );
    });
})

/* Creo otro describe ya que para estos test asumo que la lista no esta vacia y contiene
mas de un elemento
 */
describe("cuado se agrega un elemento" , function() {
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.add("clave2", "valor2");
    lista.add("clave3", "valor3");


    it("al principio la lista de claves esta ordenada", function() {
        assert.equal(lista.find(0), "valor");
    });

    it("al final la lista de claves esta ordenada", function() {
        assert.equal(lista.find(lista.count() - 1 ), "valor3");
    });
    
})

describe("cuado se agrega una clave que ya esta en la lista" , function() {
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.add("clave2", "valor2");
    lista.add("clave3", "valor3");


    it("se actualiza el valor correspondiente.", function() {
        lista.add("clave2", "valorNuevo");
        assert.equal(lista.find(1), "valorNuevo");
    });
    
})
