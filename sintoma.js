var BaGang = require('./baGang');
// Constructor
function Sintoma(descripcion) {
  // always initialize all instance properties
	this.descripcion = descripcion;
	this.baGang = new BaGang();
}
// class methods
Sintoma.prototype.setDescripcion = function(descripcion) {
	this.descripcion=descripcion;
};

Sintoma.prototype.getDescripcion= function(){
	return(this.descripcion);
}

Sintoma.prototype.setBaGang = function(baGang) {
	this.baGang=baGang;
}

Sintoma.prototype.getBaGang = function(){
	return(this.baGang);
}
// export the class

module.exports = Sintoma;
