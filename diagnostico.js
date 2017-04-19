var Anamnesis = require('./anamnesis');
// var Sindrome = require('./sindrome'); // tienes que crearlo todavia. Por ejemplo, dada la tabla acumulada BaGang, sugerirá posibles síndromes
var BaGang = require('./baGang');

// Constructor
function Diagnostico() {
  // Parametros: anamnesis, o nada.
	if (arguments.length==0){
		this.anamnesis=new Anamnesis();
		this.fecha=this.anamnesis.getFecha(); // default value
		this.practicante = this.anamnesis.getPracticante(); // default value
	}
	else {
		this.anamnesis=arguments[0];
		this.fecha=arguments[0].getFecha(); // default value
		this.practicante = arguments[0].getPracticante(); // default value
	}
}
// class methods
Diagnostico.prototype.setAnamnesis = function(anamnesis) {
	this.anamnesis=anamnesis;
};

Diagnostico.prototype.getAnamnesis= function(){
	return(this.anamnesis);
}

Diagnostico.prototype.setFecha = function(fecha) {
	this.fecha=fecha;
};

Diagnostico.prototype.getFecha= function(){
	return(this.fecha);
}

Diagnostico.prototype.setPracticante = function(practicante) {
	this.practicante=practicante;
};

Diagnostico.prototype.getPracticante= function(){
	return(this.practicante);
}

Diagnostico.prototype.diagnosticoPorBaGang=function(){

	var listaSintoma = this.anamnesis.getListaSintoma();
	var acumuladoBaGang=new BaGang();

	for (i=0; i< listaSintoma.length; i++) {
		acumuladoBaGang.setYin(acumuladoBaGang.getYin()+listaSintoma[i].getBaGang().getYin());
		acumuladoBaGang.setYang(acumuladoBaGang.getYang()+listaSintoma[i].getBaGang().getYang());
		acumuladoBaGang.setInterno(acumuladoBaGang.getInterno()+listaSintoma[i].getBaGang().getInterno());
		acumuladoBaGang.setExterno(acumuladoBaGang.getExterno()+listaSintoma[i].getBaGang().getExterno());
		acumuladoBaGang.setCalor(acumuladoBaGang.getCalor()+listaSintoma[i].getBaGang().getCalor());
		acumuladoBaGang.setFrio(acumuladoBaGang.getFrio()+listaSintoma[i].getBaGang().getFrio());
		acumuladoBaGang.setExceso(acumuladoBaGang.getExceso()+listaSintoma[i].getBaGang().getExceso());
		acumuladoBaGang.setDeficiencia(acumuladoBaGang.getDeficiencia()+listaSintoma[i].getBaGang().getDeficiencia());
	}
	return (acumuladoBaGang);
}

// export the class

module.exports = Diagnostico;
