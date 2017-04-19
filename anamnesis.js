var Sintoma = require('./sintoma');
// Constructor
function Anamnesis(paciente) {
  // Parametros: paciente, o nada.
	if (arguments.length==0){
		this.paciente=paciente;
	}
	else {
		this.paciente="John Doe";
	}
	this.fecha=new Date();
	this.listaSintoma = [];
	this.practicante = 'Eva'; // default value
}
// class methods
Anamnesis.prototype.setPaciente = function(paciente) {
	this.paciente=paciente;
};

Anamnesis.prototype.getPaciente= function(){
	return(this.paciente);
}

Anamnesis.prototype.setFecha = function(fecha) {
	this.fecha=fecha;
};

Anamnesis.prototype.getFecha= function(){
	return(this.fecha);
}

Anamnesis.prototype.setListaSintoma = function(lista) {
	this.listaSintoma=lista;
};

Anamnesis.prototype.addSintomaToListaSintoma = function(sintoma) {
	this.listaSintoma.push(sintoma);
}

Anamnesis.prototype.getListaSintoma= function(){
	return(this.listaSintoma);
}

Anamnesis.prototype.setCreador = function(practicante) {
	this.practicante=practicante;
};

Anamnesis.prototype.getPracticante= function(){
	return(this.practicante);
}


// export the class

module.exports = Anamnesis;
