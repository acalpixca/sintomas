var chai=require('chai');
var MetodoTUNG=require('../metodoTUNG');
var Organo=require('../organo');
//var Elemento=require('../elemento');

// recurso buenísimo para UT en Node: https://www.sitepoint.com/unit-test-javascript-mocha-chai/
// y para mocha: http://chaijs.com/api/assert/

var assert = chai.assert;

describe('MetodoTUNG', function() {
  it('tratamientoTUNG devuelve algo', function() {
	
	assert.equal(MetodoTUNG.tratamientoTUNG(Organo.RINON,'tonificar'),'whatever');
  });

  /*it('Pruebo la inclusion del metodo estrellaTUNG en Organo manipulando prototype', function() {
	
	assert.strictEqual(Organo.RINON.estrellaTUNG(),{fuego: 2 ,
				 tierra: 3 ,
				 metal: 7 ,
				 agua: 10,
				 madera: 1
				});
  });*/

  it('Pruebo la inclusion del metodo estrellaTUNG en Organo manipulando prototype', function() {
	
	assert.strictEqual(Organo.RINON.estrellaTUNG().fuego,2);
  });
	  
  // We can have more its here
});

