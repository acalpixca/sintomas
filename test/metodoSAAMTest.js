var chai=require('chai');
var MetodoSAAM=require('../metodoSAAM');
var Organo=require('../organo');
var Elemento=require('../elemento');


var assert = chai.assert;

describe('MetodoSAAM', function() {
  it('tratamientoSAAM tonificar VEJIGA', function() {
	
	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.VEJIGA,'tonificar').toString(),'Tonificar intestino grueso1.,Tonificar vejiga67.,Dispersar estomago36.,Dispersar vejiga40.');
  });

  it('tratamientoSAAM tonficar ID', function() {
	
	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.ID,'tonificar').toString(),'Tonificar vesicula biliar41.,Tonificar intestino delgado3.,Dispersar vejiga66.,Dispersar intestino delgado2.');
  });
  
  it('tratamientoSAAM dispersar HIGADO', function() {
	
	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.HIGADO,'dispersar').toString(),'Dispersar corazon8.,Dispersar higado2.,Tonificar pulmon8.,Tonificar higado4.');
  });

  it('Inclusion del metodo estrellaSAAM en Organo mediante manipulacion de su prototype. Punta fuego de estrella RINON vale 2.', function() {
	
	assert.strictEqual(Organo.RINON.estrellaSAAM().fuego,2);
  });

  it('Inclusion del metodo organoYang en Elemento mediante manipulacion de su prototype. Organo Yin de fuego es corazon', function() {
	
	assert.strictEqual(Elemento.FUEGO.organoYin().getNombre(),'corazon');
  });

  it('Inclusion del metodo organoYin en Elemento mediante manipulacion de su prototype. Organo Yang de fuego es intestino delgado', function() {
	
	assert.strictEqual(Elemento.FUEGO.organoYang().getNombre(),'intestino delgado');
  });
	  
  // We can have more its here
});

