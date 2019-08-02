let BaGang = require('./baGang');
// Constructor
function Sintoma(descripcion) {
  // always initialize all instance properties
	this.descripcion = descripcion;
	this.baGang = new BaGang();

// class methods
	this.setDescripcion = (descripcion) => {
		this.descripcion=descripcion;
	};

	this.getDescripcion= () => {
		return(this.descripcion);
	}

	this.setBaGang = (baGang) => {
		this.baGang=baGang;
	}

	this.getBaGang = () => {
		return(this.baGang);
	}

}
// export the class

module.exports = Sintoma;
