// Constructor
function BaGang() {
  // Parametros: ninguno.
  	this.yin = 0;
  	this.yang = 0; 
	this.interno=0;
	this.externo=0;
	this.calor=0;
	this.frio=0;
	this.exceso=0;
	this.deficiencia=0;
}
// class methods

BaGang.prototype.setYin = function(valor) {
	this.yin=valor;
}

BaGang.prototype.getYin= function(){
	return(this.yin);
}

BaGang.prototype.setYang = function(valor) {
	this.yang=valor;
}

BaGang.prototype.getYang= function(){
	return(this.yang);
}

BaGang.prototype.setInterno = function(valor) {
	this.interno=valor;
}

BaGang.prototype.getInterno= function(){
	return(this.interno);
}

BaGang.prototype.setExterno = function(valor) {
	this.externo=valor;
}

BaGang.prototype.getExterno= function(){
	return(this.externo);
}

BaGang.prototype.setCalor = function(valor) {
	this.calor=valor;
}

BaGang.prototype.getCalor= function(){
	return(this.calor);
}

BaGang.prototype.setFrio = function(valor) {
	this.frio=valor;
}

BaGang.prototype.getFrio= function(){
	return(this.frio);
}

BaGang.prototype.setExceso = function(valor) {
	this.exceso=valor;
}

BaGang.prototype.getExceso= function(){
	return(this.exceso);
}

BaGang.prototype.setDeficiencia = function(valor) {
	this.deficiencia=valor;
}

BaGang.prototype.getDeficiencia= function(){
	return(this.deficiencia);
}
// export the class
 module.exports = BaGang;

