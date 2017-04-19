var chai=require('chai');
var BaGang=require('../baGang');

// recurso buenísimo para UT en Node: https://www.sitepoint.com/unit-test-javascript-mocha-chai/

var assert = chai.assert;

describe('BaGang', function() {
  it('Yin value should be zero', function() {
    // Test implementation goes here

	//var arr = [];
    	//assert.equal(arr.length, 0);

	var baGang=new BaGang();
	assert.equal(baGang.getYin(),0);
  });

	it('Yang value should be zero', function() {
	    // Test implementation goes here

		//var arr = [];
	    	//assert.equal(arr.length, 0);

		var baGang=new BaGang();
		assert.equal(baGang.getYang(),0);
	  });

  // We can have more its here
});

