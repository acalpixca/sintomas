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

  it('Organo VEJIGA es AGUA', function() {
  assert.equal(Organo.VEJIGA.getElemento().nombre,'agua');
  });

  it('Hora max en reloj para Organo HIGADO comienza a las 1', function() {
  assert.equal(Organo.HIGADO.getHoraMaxInicio(),1);
  });

  it('Hora max en reloj para Organo HIGADO acaba a las 1', function() {
  assert.equal(Organo.HIGADO.getHoraMaxFinal(),3);
  });

  it('Hora min en reloj para Organo HIGADO comienza a las 13', function() {
  assert.equal(Organo.HIGADO.getHoraMinInicio(),13);
  });

  it('Hora min en reloj para Organo HIGADO acaba a las 15', function() {
  assert.equal(Organo.HIGADO.getHoraMinFinal(),15);
  });



  // We can have more its here
});
