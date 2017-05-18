var chai=require('chai');
var Canal=require('../canal');
var Organo=require('../organo');

var assert = chai.assert;

describe('Canal', function() {
  it('RENMAI puede ser accedido, probando con su nombre', function() {
	assert.equal(Canal.RENMAI.nombre,'renmai');
  });

	it('TAIYIN_MANO puede ser accedido, probando con nombre, pieMano y organo', function() {
		assert.equal(Canal.TAIYIN_MANO.nombre, 'taiyin');
		assert.equal(Canal.TAIYIN_MANO.pieMano, 'mano');
		assert.equal(Canal.TAIYIN_MANO.organo, Organo.PULMON);
	  });
  // We can have more its here
});

