const listaElementos=['fuego','tierra','metal','agua','madera'];

function Elemento(nombre){
	this.nombre=nombre;
}

function padre(){
	return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-1) % 5]);
}

function hijo(){
	return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+1) % 5]);
}

function abuelo(){
	return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)-2) % 5]);
}

function nieto(){
	return(listaElementos[Math.abs(listaElementos.indexOf(this.nombre)+2) % 5]);
}

 module.exports = Elemento;
