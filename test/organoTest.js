var chai=require('chai');
var Organo=require('../organo');


// recurso buenísimo para UT en Node: https://www.sitepoint.com/unit-test-javascript-mocha-chai/
// y para mocha: http://chaijs.com/api/assert/

var assert = chai.assert;

describe('Organo', function() {
  it('Organo CORAZON puede ser accedido', function() {
	assert.equal(Organo.CORAZON.nombre,'corazon');
  });

  it('Organo BAZO puede ser accedido', function() {
	assert.equal(Organo.BAZO.nombre,'bazo pancreas');
  });

  it('Organo BAZO es yin', function() {
	assert.equal(Organo.BAZO.isYin(),true);
  });

  it('Organo BAZO NO es yang', function() {
	assert.equal(Organo.BAZO.isYang(),false);
  });

  it('Organo HIGADO es MADERA', function() {
	assert.equal(Organo.HIGADO.getElemento().nombre,'madera');
  });

  it('Hora min en reloj para Organo HIGADO es 1', function() {
  assert.equal(Organo.HIGADO.getHoraMin(),1);
  });

  it('Hora max en reloj para Organo HIGADO es 1', function() {
  assert.equal(Organo.HIGADO.getHoraMax(),3);
  });

  it('Organo HIGADO es MADERA', function() {
  assert.equal(Organo.HIGADO.getElemento().nombre,'madera');
  });
  // We can have more its here
});
