var Elemento=require('./elemento');

function Organo(params){
	this.nombre=params.nombre;
	this.yin=params.yin;
	this.yang=params.yang;
	this.elemento=params.elemento;

	this.isYin=function(){
		return(this.yin);
	};
	this.isYang=function(){
		return(this.yang);
	};
	this.getElemento=function(){
		return(this.elemento);
	};
	this.getNombre=function(){
		return(this.nombre);
	}
}

function organoPorNombre(nombre) {
// helper function que devuelve el objeto elemento correspondiende a nombre
	switch(nombre) {
			case('corazon') : return (CORAZON); break;
			case('intestino delgado'): return (ID); break;
			case('id'): return (ID); break;
			case('pericardio'): return (PERICARDIO); break;
			case('maestro corazon'): return (PERICARDIO); break;
			case('mc'): return (PERICARDIO); break;
			case ('san jiao'): return(SANJIAO); break;
			case ('sanjiao'): return(SANJIAO); break;
			case ('triple calentador'): return(SANJIAO); break;
			case ('tc'): return(SANJIAO); break;
			case('bazo pancreas'): return(BAZO); break;
			case('bazo'): return(BAZO); break;
			case('estomago'): return (ESTOMAGO); break;
			case('pulmon'): return (PULMON); break;
			case ('intestino grueso'): return(IG); break;
			case ('ig'): return(IG); break;
			case('rinon') : return (RINON); break;
			case('vejiga'): return (VEJIGA); break;
			case('higado'): return (HIGADO); break;
			case ('vesicula biliar'): return(VESICULA); break;
			case ('vesicula'): return(VESICULA); break;
			default: return('impossible');
		}
}

// zangfu elemento FUEGO
const CORAZON = new Organo({nombre:'corazon', yin: true, yang: false, elemento: Elemento.FUEGO});
const ID = new Organo({nombre:'intestino delgado', yin: false, yang: true, elemento: Elemento.FUEGO});
const PERICARDIO = new Organo({nombre:'pericardio', yin: true, yang: false, elemento: Elemento.FUEGO});
const SANJIAO = new Organo({nombre:'san jiao', yin: false, yang: true, elemento: Elemento.FUEGO});
// zangfu elemento TIERRA
const BAZO = new Organo({nombre:'bazo pancreas', yin: true, yang: false, elemento: Elemento.TIERRA});
const ESTOMAGO = new Organo({nombre:'estomago', yin: false, yang: true, elemento: Elemento.TIERRA});
// zangfu elemento METAL
const PULMON = new Organo({nombre:'pulmon', yin: true, yang: false, elemento: Elemento.METAL});
const IG = new Organo({nombre:'intestino grueso', yin: false, yang: true, elemento: Elemento.METAL});
// zangfu elemento AGUA
const RINON = new Organo({nombre:'rinon', yin: true, yang: false, elemento: Elemento.AGUA});
const VEJIGA = new Organo({nombre:'vejiga', yin: false, yang: true, elemento: Elemento.AGUA});
// zangfu elemento MADERA
const HIGADO = new Organo({nombre:'higado', yin: true, yang: false, elemento: Elemento.MADERA});
const VESICULA = new Organo({nombre:'vesicula biliar', yin: false, yang: true, elemento: Elemento.MADERA});

module.exports.organoPorNombre=organoPorNombre;
module.exports.Organo = Organo;
module.exports.CORAZON = CORAZON;
module.exports.ID= ID;
module.exports.PERICARDIO = PERICARDIO;
module.exports.SANJIAO = SANJIAO;
module.exports.BAZO = BAZO;
module.exports.ESTOMAGO = ESTOMAGO;
module.exports.PULMON = PULMON;
module.exports.IG = IG;
module.exports.RINON = RINON;
module.exports.VEJIGA = VEJIGA;
module.exports.HIGADO = HIGADO;
module.exports.VESICULA = VESICULA;
