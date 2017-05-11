var chai=require('chai');
var Elemento=require('../elemento');


// recurso buenísimo para UT en Node: https://www.sitepoint.com/unit-test-javascript-mocha-chai/
// y para mocha: http://chaijs.com/api/assert/

var assert = chai.assert;

describe('Elemento', function() {
  it('Elemento TIERRA puede ser accedido', function() {
	assert.equal(Elemento.TIERRA.nombre,'tierra');
  });

	it('Padre de TIERRA es FUEGO - no requiere % en el calculo', function() {
		assert.equal(Elemento.TIERRA.padre(),Elemento.FUEGO.getNombre());
	  });

	it('Padre de FUEGO es MADERA - requiere % en el calculo', function() {
		assert.equal(Elemento.FUEGO.padre(),Elemento.MADERA.getNombre());
	  });
	  	  
	it('Hijo de MADERA es FUEGO', function() {
		assert.equal(Elemento.MADERA.hijo(),Elemento.FUEGO.getNombre());
	  });

	  it('Abuelo de TIERRA es MADERA - requiere % en el calculo', function() {
		assert.equal(Elemento.TIERRA.abuelo(),Elemento.MADERA.nombre);
	  });

	  it('Abuelo de FUEGO es AGUA - requiere % en el calculo', function() {
		assert.equal(Elemento.FUEGO.abuelo(),Elemento.AGUA.getNombre());
	  });
  
	  it('Abuelo de MADERA es METAL - no requiere % en el calculo', function() {
		assert.equal(Elemento.MADERA.abuelo(),Elemento.METAL.getNombre());
	  });

	  it('Nieto de METAL es MADERA', function() {
		assert.equal(Elemento.METAL.nieto(),Elemento.MADERA.getNombre());
	  });

	it('Nieto de MADERA es TIERRA - requiere % en el calculo', function() {

		assert.equal(Elemento.MADERA.nieto(),Elemento.TIERRA.getNombre());
	  });
	  
  // We can have more its here
});

