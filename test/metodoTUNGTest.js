var chai=require('chai');
var MetodoTUNG=require('../metodoTUNG');
var Organo=require('../organo');
var Elemento=require('../elemento');

// recurso buenísimo para UT en Node: https://www.sitepoint.com/unit-test-javascript-mocha-chai/
// y para mocha: http://chaijs.com/api/assert/

var assert = chai.assert;

describe('MetodoTUNG', function() {
  it('tratamientoTUNG devuelve algo', function() {
	
	assert.equal(MetodoTUNG.tratamientoTUNG(Organo.RINON,'tonificar'),'superduper');
  });


  it('Pruebo la inclusion del metodo estrellaTUNG en Organo manipulando prototype', function() {
	
	assert.strictEqual(Organo.RINON.estrellaTUNG().fuego,2);
  });

  it('Pruebo la inclusion del metodo organoYang en Elemento manipulando prototype. Organo Yin de fuego es corazon', function() {
	
	assert.strictEqual(Elemento.FUEGO.organoYin().getNombre(),'corazon');
  });

  it('Pruebo la inclusion del metodo organoYin en Elemento manipulando prototype. Organo Yang de fuego es intestino delgado', function() {
	
	assert.strictEqual(Elemento.FUEGO.organoYang().getNombre(),'intestino delgado');
  });
	  
  // We can have more its here
});

