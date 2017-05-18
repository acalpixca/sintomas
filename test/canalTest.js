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
  
  it('isYin funciona con canales primarios', function() {
	assert.equal(Canal.TAIYIN_MANO.isYin(),true);
  });
 
  it('isYang funciona con canales primarios', function() {
	assert.equal(Canal.TAIYIN_MANO.isYang(),false);
  }); 
/*  
  it('isYang no ha de funcionar con canales que no sean primarios', function() {
	assert.equal(Canal.RENMAI.isYang(),false);
  }); 
 */
  
  // We can have more its here
});
