var chai=require('chai');
var MetodoSAAM=require('../metodoSAAM');
var Organo=require('../organo');
var Elemento=require('../elemento');

// recurso buenísimo para UT en Node: https://www.sitepoint.com/unit-test-javascript-mocha-chai/
// y para mocha: http://chaijs.com/api/assert/

var assert = chai.assert;

describe('MetodoSAAM', function() {
  it('tratamientoSAAM devuelve algo al tonificar', function() {
	
	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.VEJIGA,'tonificar').toString(),'superduper');
  });

  it('tratamientoSAAM tonficar ID que pasaaa devuelve algo al tonificar', function() {
	
	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.ID,'tonificar').toString(),'superduper');
  });
  
  it('tratamientoSAAM devuelve algo al dispersar', function() {
	
	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.HIGADO,'dispersar').toString(),'superduper');
  });

  it('Pruebo la inclusion del metodo estrellaSAAM en Organo manipulando prototype', function() {
	
	assert.strictEqual(Organo.RINON.estrellaSAAM().fuego,2);
  });

  it('Pruebo la inclusion del metodo organoYang en Elemento manipulando prototype. Organo Yin de fuego es corazon', function() {
	
	assert.strictEqual(Elemento.FUEGO.organoYin().getNombre(),'corazon');
  });

  it('Pruebo la inclusion del metodo organoYin en Elemento manipulando prototype. Organo Yang de fuego es intestino delgado', function() {
	
	assert.strictEqual(Elemento.FUEGO.organoYang().getNombre(),'intestino delgado');
  });
	  
  // We can have more its here
});

