var Organo=require('./organo');
var Canal=require('./canal')
var assert=require('assert');

function Punto(parametros){
	this.canal=parametros.canal;
	this.numero=parametros.numero;
	this.nombre=parametros.nombre;
	
	this.getCanal=function(){
		return this.canal;
	}
	
	this.getNumero=function(){
		return this.numero;
	}
	
	this.getNombre=function(){
		return this.nombre;
	}
}

function puntoPorCanalNumero(canal, numero){
	// canal es nombre + pieMano (excepto si es dumai o renmai)
	var	parametros={ 
		canal: Canal.TAIYIN_MANO,
		numero: 1,
		nombre: 'No me lo se'
	};  
	var p=new Punto.Punto(parametros);
	
	return(p);
}

function puntoPorNombre(nombre){
	var	parametros={ 
		canal: Canal.TAIYIN_MANO,
		numero: 1,
		nombre: 'No me lo se'
	};  
	
	var p=new Punto.Punto(parametros);
	
	switch(nombre) {
		case 'd ': return(p); break;
		default: return(p);
	}
}

// ahora "solo" tienes que crear todos estos puntos: https://en.wikipedia.org/wiki/List_of_acupuncture_points

module.exports.Punto=Punto;