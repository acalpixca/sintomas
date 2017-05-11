const listaElementos=['fuego','tierra','metal','agua','madera'];

function Elemento(nombre){
	this.nombre=nombre;
	this.padre=function(){
		return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-1 + 5) % 5]);
	};
	this.hijo=function(){
		return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+1) % 5]);
	};
	this.abuelo=function(){
		return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-2 + 5 ) % 5]);
	};
	this.nieto=function(){
		return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+2) % 5]);
	}
	this.getNombre=function(){
		return(this.nombre);	
	}
}

const FUEGO = new Elemento('fuego');
const TIERRA = new Elemento('tierra');
const METAL = new Elemento('metal');
const AGUA = new Elemento('agua');
const MADERA = new Elemento('madera');

 module.exports.Elemento = Elemento;
 module.exports.FUEGO = FUEGO;
 module.exports.TIERRA = TIERRA;
 module.exports.METAL = METAL;
 module.exports.AGUA = AGUA;
 module.exports.MADERA = MADERA;
