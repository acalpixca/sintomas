const listaElementos=['fuego','tierra','metal','agua','madera'];

function Elemento(nombre){
	this.nombre=nombre;
	this.padre=function(){
		//return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-1 + 5) % 5]);
		var nombre=listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-1 + 5) % 5];
		switch(nombre) {
			case('fuego') : return (FUEGO); break;
			case('tierra'): return (TIERRA); break;
			case('metal'): return (METAL); break;
			case ('agua'): return(AGUA); break;
			case('madera'): return(MADERA); break;
			default: return('impossible');
		}
	};
	this.hijo=function(){
		//return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+1) % 5]);
		var nombre=listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+1) % 5];
		switch(nombre) {
			case('fuego') : return (FUEGO); break;
			case('tierra'): return (TIERRA); break;
			case('metal'): return (METAL); break;
			case ('agua'): return(AGUA); break;
			case('madera'): return(MADERA); break;
			default: return('impossible');
		}
	};
	this.abuelo=function(){
		//return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-2 + 5 ) % 5]);
		var nombre=listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-2 + 5 ) % 5];
		switch(nombre) {
			case('fuego') : return (FUEGO); break;
			case('tierra'): return (TIERRA); break;
			case('metal'): return (METAL); break;
			case ('agua'): return(AGUA); break;
			case('madera'): return(MADERA); break;
			default: return('impossible');
		}
	};
	this.nieto=function(){
		//return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+2) % 5]);
		var nombre=listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+2) % 5];
		switch(nombre) {
			case('fuego') : return (FUEGO); break;
			case('tierra'): return (TIERRA); break;
			case('metal'): return (METAL); break;
			case ('agua'): return(AGUA); break;
			case('madera'): return(MADERA); break;
			default: return('impossible');
		}
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
