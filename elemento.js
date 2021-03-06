const listaElementos=['fuego','tierra','metal','agua','madera'];

function Elemento(nombre){
	this.nombre=nombre;
	this.padre= () => {
		//return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-1 + 5) % 5]);
		let nombre=listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-1 + 5) % 5];
		return elementoPorNombre(nombre);
	};
	this.hijo= () => {
		//return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+1) % 5]);
		let nombre=listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+1) % 5];
		return elementoPorNombre(nombre);
	};
	this.abuelo= () => {
		//return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-2 + 5 ) % 5]);
		let nombre=listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-2 + 5 ) % 5];
		return elementoPorNombre(nombre);
	};
	this.nieto= () => {
		//return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+2) % 5]);
		let nombre=listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+2) % 5];
		return elementoPorNombre(nombre);
	}
	this.getNombre= () => {
		return(this.nombre);
	}
}

function elementoPorNombre(nombre) {
// helper function que devuelve el objeto elemento correspondiende a nombre
	switch(nombre) {
			case('fuego') : return (FUEGO); break;
			case('tierra'): return (TIERRA); break;
			case('metal'): return (METAL); break;
			case ('agua'): return(AGUA); break;
			case('madera'): return(MADERA); break;
			default: return('impossible');
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
