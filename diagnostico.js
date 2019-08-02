let Anamnesis = require('./anamnesis');
// var Sindrome = require('./sindrome'); // tienes que crearlo todavia. Por ejemplo, dada la tabla acumulada BaGang, sugerirá posibles síndromes
let BaGang = require('./baGang');

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

	// class methods
	this.setAnamnesis = (anamnesis) => {
		this.anamnesis=anamnesis;
	};

	this.getAnamnesis= () => {
		return(this.anamnesis);
	}

	this.setFecha = (fecha) => {
		this.fecha=fecha;
	};

	this.getFecha= () => {
		return(this.fecha);
	}

	this.setPracticante = (practicante) => {
		this.practicante=practicante;
	};

	this.getPracticante= () => {
		return(this.practicante);
	}

	this.diagnosticoPorBaGang= () => {

		let listaSintoma = this.anamnesis.getListaSintoma();
		let acumuladoBaGang=new BaGang();

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


}
// export the class

module.exports = Diagnostico;
