﻿var chai=require('chai');
var Punto=require('../punto');
var Canal=require('../canal');
var Organo=require('../organo');

var assert = chai.assert;

describe('Punto', function() {
  it('Constructor de PUNTO funciona y se puede acceder a sus propiedades', function() {
	var	parametros={ 
		canal: Canal.TAIYIN_MANO,
		numero: 1,
		nombre: 'No me lo se'
	};  
	var p=new Punto.Punto(parametros);
	assert.equal(p.getNombre(),'No me lo se');
	assert.equal(p.getNumero(),1);
	assert.equal(p.getCanal().TAIYIN_MANO);
  });
  
  // We can have more its here
});
