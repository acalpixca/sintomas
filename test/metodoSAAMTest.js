var chai=require('chai');
var MetodoSAAM=require('../metodoSAAM');
var Organo=require('../organo');
var Elemento=require('../elemento');



var assert = chai.assert;

describe('MetodoSAAM', function() {

  /*
  it('tratamientoSAAM tonificar VEJIGA', function() {

	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.VEJIGA,'tonificar').toString(),'Tonificar YANGMING_MANO (intestino grueso) - 1, o Shangyang ??,Tonificar TAIYANG_PIE (vejiga) - 67, o Zhiyin ??,Tonificar YANGMING_PIE (estomago) - 36, o Zusanli ???,Tonificar TAIYANG_PIE (vejiga) - 40, o Weizhong ??');
  });

  it('tratamientoSAAM tonficar ID', function() {

	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.ID,'tonificar').toString(),'Tonificar SHAOYANG_PIE (vesicula biliar) - 41, o Zulinqi ???,Tonificar TAIYANG_MANO (intestino delgado) - 3, o Houxi ??,Tonificar TAIYANG_PIE (vejiga) - 66, o Zutonggu ???,Tonificar TAIYANG_MANO (intestino delgado) - 2, o Qiangu ??');
  });

  it('tratamientoSAAM dispersar HIGADO', function() {

	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.HIGADO,'dispersar').toString(),'Tonificar SHAOYIN_MANO (corazon) - 8, o Shaofu ??,Tonificar JUEYIN_PIE (higado) - 2, o xíng jian ??,Tonificar TAIYIN_MANO (pulmon) - 8, o Jingqu ??,Tonificar JUEYIN_PIE (higado) - 4, o zhong feng ??');
  });
*/
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
