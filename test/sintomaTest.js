var chai=require('chai');
var Sintoma=require('../sintoma');
var BaGang=require('../baGang');

// recurso buenísimo para UT en Node: https://www.sitepoint.com/unit-test-javascript-mocha-chai/
// y para mocha: http://chaijs.com/api/assert/

var assert = chai.assert;

describe('Sintoma', function() {
  it('Sintoma constructor generates a neutral baGang', function() {
    // Test implementation goes here

	//var arr = [];
    	//assert.equal(arr.length, 0);
	var sintoma=new Sintoma("una descripcion");
	var baGang=new BaGang();
	assert.deepEqual(baGang,sintoma.getBaGang());
  });

	it('Sintoma constructor initiates the descripcion property correctly', function() {
	    // Test implementation goes here

		//var arr = [];
	    	//assert.equal(arr.length, 0);

		var sintoma=new Sintoma("una descripcion");
		assert.equal(sintoma.getDescripcion(),"una descripcion");
	  });

  // We can have more its here
});

