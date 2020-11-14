/**
 *  v  En una lista vacía hay cero elementos.
 *  v Cuando se agrega un elemento a una lista vacía hay un elemento.
 *  v En una lista vacía no se encuentra ninguna clave.
 *  v Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
 * Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
 *  v Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
 * Cuando se agrega un elemento al principio la lista de claves esta ordenada.
 * Cuando se agrega un elemento al final la lista de claves esta ordenada.
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



