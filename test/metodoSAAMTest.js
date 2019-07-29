var chai=require('chai');
var MetodoSAAM=require('../metodoSAAM');
var Organo=require('../organo');
var Elemento=require('../elemento');



var assert = chai.assert;

describe('MetodoSAAM', function() {


  it('tratamientoSAAM tonificar VEJIGA', function() {

	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.VEJIGA,'tonificar').toString(),'Dispersar ESTOMAGO - 36 -- Zusanli 足三里,Dispersar VEJIGA - 40 -- Weizhong 委中,Tonificar INTESTINO GRUESO - 1 -- Shangyang 商陽,Tonificar VEJIGA - 67 -- Zhiyin 至陰');
  });


  it('tratamientoSAAM tonficar ID', function() {

	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.ID,'tonificar').toString(),'Dispersar VEJIGA - 66 -- Zutonggu 足通谷,Dispersar INTESTINO DELGADO - 2 -- Qiangu 前谷,Tonificar VESICULA BILIAR - 41 -- Zulinqi 足臨泣,Tonificar INTESTINO DELGADO - 3 -- Houxi 後谿');
  });

  it('tratamientoSAAM dispersar HIGADO', function() {

	assert.equal(MetodoSAAM.tratamientoSAAM(Organo.HIGADO,'dispersar').toString(),'Dispersar CORAZON - 8 -- Shaofu 少府,Dispersar HIGADO - 2 -- xíng jiān 行間,Tonificar PULMON - 8 -- Jingqu 經渠,Tonificar HIGADO - 4 -- zhōng fēng 中封');
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
