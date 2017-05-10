var chai=require('chai');
var Elemento=require('../elemento');


// recurso buenísimo para UT en Node: https://www.sitepoint.com/unit-test-javascript-mocha-chai/
// y para mocha: http://chaijs.com/api/assert/

var assert = chai.assert;

describe('Elemento', function() {
  it('Elemento TIERRA puede ser accedido', function() {
    // Test implementation goes here

	//var arr = [];
    	//assert.equal(arr.length, 0);
	//var sintoma=new Sintoma("una descripcion");
	//var baGang=new BaGang();
	assert.equal(Elemento.TIERRA.nombre,'tierra');
  });

	it('Padre de TIERRA es FUEGO', function() {
	    // Test implementation goes here

		//var arr = [];
	    	//assert.equal(arr.length, 0);

		//var sintoma=new Sintoma("una descripcion");
		assert.equal(Elemento.TIERRA.padre(),Elemento.FUEGO.nombre);
	  });
	  
	  	it('Hijo de MADERA es FUEGO', function() {
	    // Test implementation goes here

		//var arr = [];
	    	//assert.equal(arr.length, 0);

		//var sintoma=new Sintoma("una descripcion");
		assert.equal(Elemento.MADERA.hijo(),Elemento.FUEGO.nombre);
	  });

	  	it('Abuelo de TIERRA es MADERA', function() {
	    // Test implementation goes here

		//var arr = [];
	    	//assert.equal(arr.length, 0);

		//var sintoma=new Sintoma("una descripcion");
		assert.equal(Elemento.TIERRA.abuelo(),Elemento.MADERA.nombre);
	  });
	  
	  	it('Nieto de METAL es MADERA', function() {
	    // Test implementation goes here

		//var arr = [];
	    	//assert.equal(arr.length, 0);

		//var sintoma=new Sintoma("una descripcion");
		assert.equal(Elemento.METAL.nieto(),Elemento.MADERA.nombre);
	  });
	  
  // We can have more its here
});

