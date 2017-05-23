var Organo=require('./organo');
var assert=require('assert');

const CANALPRIMARIO="canalPrimario";
const CANALDIVERGENTE="canalDivergente";
const CANALEXTRAORDINARIO="canalExtraordinario";

function Canal(parametros){
	// tipo es {canalPrimario | canalDivergente | canalExtraordinario }
	var nombre=parametros.nombre;
	var organo=parametros.organo;
	var pieMano=parametros.pieMano;
	var yin=parametros.yin;
	var yang=parametros.yang;
	var tipo=parametros.tipo;
	
	assert.equal((organo==null || organo==Organo.CORAZON || organo==Organo.ID || 
	organo==Organo.PERICARDIO || organo==Organo.SANJIAO || 
	organo==Organo.BAZO || organo==Organo.ESTOMAGO || 
	organo==Organo.PULMON || organo==Organo.IG || 
	organo==Organo.RINON ||	organo==Organo.VEJIGA || 
	organo==Organo.HIGADO || 
	organo==Organo.VESICULA),true);

	assert.equal((yin==null || yin==true || yin==false),true);
	assert.equal((yang==null || yang==true || yang==false),true);
	
	assert.equal((pieMano==null || pieMano=='pie' || pieMano=='mano'),true);
	assert.equal((tipo==CANALPRIMARIO || tipo==CANALDIVERGENTE || tipo==CANALEXTRAORDINARIO),true);

	this.nombre=nombre;
	this.organo=organo;
	this.yin=yin;
	this.yang=yang;
	this.pieMano=pieMano;
	this.tipo=tipo;

	this.getNombre=function(){
		return(this.nombre);	
	}
	this.getOrgano=function(){
		return(this.organo);
	}
	this.isYin=function(){
		assert.equal(this.tipo,CANALPRIMARIO);
		return(this.yin);
	}
	this.isYang=function(){
				assert.equal(this.tipo,CANALPRIMARIO);
		return(this.yang);
	}
	this.getPieMano=function(){
		assert.equal(this.tipo,CANALPRIMARIO);
		return(this.pieMano);
	}
	this.isPie=function(){
		assert.equal(this.tipo,CANALPRIMARIO);
		return(this.pieMano=="pie");
	}
	this.isMano=function(){
		assert.equal(this.tipo,CANALPRIMARIO);
		return(this.pieMano=="mano");
	}
}

function canalPorNombre(nombre, pieMano) {
// helper function que devuelve el objeto Canal correspondiende a nombre. pieMano es optativo.
	switch(nombre) {
			case('taiyin') : 
				if(pieMano=="pie") return(TAIYIN_PIE); else return(TAIYIN_MANO); 
				break;
			case('yangming') : 
				if(pieMano=="pie") return(YANGMING_PIE); else return(YANGMING_MANO); 
				break;
			case('shaoyin') : 
				if(pieMano=="pie") return(SHAOYIN_PIE); else return(SHAOYIN_MANO); 
				break;	
			case('taiyang') : 
				if(pieMano=="pie") return(TAIYANG_PIE); else return(TAIYANG_MANO); 
				break;
			case('jueyin') : 
				if(pieMano=="pie") return(JUEYIN_PIE); else return(JUEYIN_MANO); 
				break;
			case('shaoyang') : 
				if(pieMano=="pie") return(SHAOYANG_PIE); else return(SHAOYANG_MANO); 
				break;
			case('renmai') : 
				return(RENMAI); 
				break;
			case('dumai') : 
				return(DUMAI); 
				break;
			case('daimai') : 
				return(DAIMAI); 
				break;
			case('chongmai') : 
				return(CHONGMAI); 
				break;
			case('yinqiao') : 
				return(YINQIAO); 
				break;
			case('yangqiao') : 
				return(YANGQIAO); 
				break;
			case('yinwei') : 
				return(YINWEI); 
				break;
			case('yangwei') : 
				return(YANGWEI); 
				break;
			default: return('impossible');
		}
}

function getCanalPorOrgano(organo) {
switch (organo) {
case Organo.RINON: return (SHAOYIN_PIE); break;
case Organo.CORAZON: return (SHAOYIN_MANO); break;
case Organo.PULMON: return (TAIYIN_MANO); break;
case Organo.BAZO: return (TAIYIN_PIE); break;
case Organo.IG: return(YANGMING_MANO); break;
case Organo.ESTOMAGO: return(YANGMING_PIE); break;
case Organo.ID: return(TAIYANG_MANO); break;
case Organo.VEJIGA: return(TAIYANG_PIE); break;
case Organo.PERICARDIO: return(JUEYIN_MANO); break;
case Organo. HIGADO: return(JUEYIN_PIE); break;
case Organo.SANJIAO: return(SHAOYANG_MANO); break;
case Organo.VESICULA: return(SHAOYANG_PIE); break;
default: return('imposible');
}
}

//nombre, organo, pieMano, yin, yang, tipo)

const TAIYIN_MANO = new Canal({nombre: 'taiyin', pieMano: 'mano', organo: Organo.PULMON, yin: true, yang: false, tipo: CANALPRIMARIO});
const TAIYIN_PIE = new Canal({nombre: 'taiyin', pieMano: 'pie', organo: Organo.BAZO, yin: true, yang: false, tipo: CANALPRIMARIO});

const YANGMING_MANO = new Canal({nombre: 'yangming', pieMano: 'mano', organo: Organo.IG, yin: false, yang: true, tipo: CANALPRIMARIO});
const YANGMING_PIE = new Canal({nombre: 'yangming', pieMano: 'pie', organo: Organo.ESTOMAGO, yin: false, yang: true, tipo: CANALPRIMARIO});

const SHAOYIN_MANO = new Canal({nombre: 'shaoyin', pieMano: 'mano', organo: Organo.CORAZON, yin: true, yang: false, tipo: CANALPRIMARIO});
const SHAOYIN_PIE = new Canal({nombre: 'shaoyin', pieMano: 'pie', organo: Organo.RINON, yin: true, yang: false, tipo: CANALPRIMARIO});

const TAIYANG_MANO = new Canal({nombre: 'taiyang', pieMano: 'mano', organo: Organo.ID, yin: false, yang: true, tipo: CANALPRIMARIO});
const TAIYANG_PIE = new Canal({nombre: 'taiyang', pieMano: 'pie', organo: Organo.VEJIGA, yin: false, yang: true, tipo: CANALPRIMARIO});

const JUEYIN_MANO = new Canal({nombre: 'jueyin', pieMano: 'mano', organo: Organo.PERICARDIO, yin: true, yang: false, tipo: CANALPRIMARIO});
const JUEYIN_PIE = new Canal({nombre: 'jueyin', pieMano: 'pie', organo: Organo.HIGADO, yin: true, yang: false, tipo: CANALPRIMARIO});

const SHAOYANG_MANO = new Canal({nombre: 'shaoyang', pieMano: 'mano', organo: Organo.SANJIAO, yin: false, yang: true, tipo: CANALPRIMARIO});
const SHAOYANG_PIE = new Canal({nombre: 'shaoyang', pieMano: 'pie', organo: Organo.VESICULA, yin: false, yang: true, tipo: CANALPRIMARIO});

const RENMAI = new Canal({nombre: 'renmai', tipo: CANALEXTRAORDINARIO});
const DUMAI = new Canal({nombre: 'dumai', tipo: CANALEXTRAORDINARIO});
const DAIMAI = new Canal({nombre: 'daimai', tipo: CANALEXTRAORDINARIO});
const CHONGMAI = new Canal({nombre: 'chongmai', tipo: CANALEXTRAORDINARIO});
const YINGQIAO = new Canal({nombre: 'yinqiao', tipo: CANALEXTRAORDINARIO});
const YANGQIAO = new Canal({nombre: 'yangqiao', tipo: CANALEXTRAORDINARIO});
const YINWEI = new Canal({nombre: 'yinwei', tipo: CANALEXTRAORDINARIO});
const YANGWEI = new Canal({nombre: 'yangwei', tipo: CANALEXTRAORDINARIO});
 

module.exports.Canal = Canal;
module.exports.TAIYIN_MANO = TAIYIN_MANO;
module.exports.TAIYIN_PIE = TAIYIN_PIE;
module.exports.YANGMING_MANO = YANGMING_MANO;
module.exports.YANGMING_PIE = YANGMING_PIE;
module.exports.SHAOYIN_MANO = SHAOYIN_MANO;
module.exports.SHAOYIN_PIE = SHAOYIN_PIE;
module.exports.TAIYANG_MANO = TAIYANG_MANO;
module.exports.TAIYANG_PIE = TAIYANG_PIE;
module.exports.JUEYIN_MANO = JUEYIN_MANO;
module.exports.JUEYIN_PIE = JUEYIN_PIE;
module.exports.SHAOYANG_MANO = SHAOYANG_MANO;
module.exports.SHAOYANG_PIE = SHAOYANG_PIE;
 
module.exports.RENMAI = RENMAI;
module.exports.DUMAI = DUMAI;
module.exports.DAIMAI = DAIMAI;
module.exports.CHONGMAI = CHONGMAI;
module.exports.YINQIAO = YINGQIAO;
module.exports.YANGQIAO = YANGQIAO;
module.exports.YINWEI = YINWEI;
module.exports.YANGWEI = YANGWEI;