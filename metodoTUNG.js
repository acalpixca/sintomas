var Elemento=require('./elemento');
var Organo=require('./organo');
var assert=require('assert');

Elemento.Elemento.prototype.organoYin=function(){
	switch(this.getNombre()){
		case 'fuego': return(Organo.CORAZON); break;
		case 'tierra': return(Organo.BAZO); break;
		case 'metal': return(Organo.PULMON); break;
		case 'agua': return(Organo.RINON); break;
		case 'madera': return(Organo.HIGADO); break;
		default: return('impossible');
	}
}

Elemento.Elemento.prototype.organoYang=function(){
	switch(this.getNombre()){
		case 'fuego': return(Organo.ID); break;
		case 'tierra': return(Organo.ESTOMAGO); break;
		case 'metal': return(Organo.IG); break;
		case 'agua': return(Organo.VEJIGA); break;
		case 'madera': return(Organo.VESICULA); break;
		default: return('impossible');
	}
}

Organo.Organo.prototype.estrellaTUNG=function(){
	switch(this.getNombre()) {
		case 'rinon':
  			return(
				{fuego: 2 ,
				 tierra: 3 ,
				 metal: 7 ,
				 agua: 10,
				 madera: 1
				}	

			);
  			break;
		case 'vejiga':
  			return(
				{fuego: 60 ,
				 tierra: 40 ,
				 metal: 67,
				 agua: 66,
				 madera: 65
				}	

			);
  			break;
		case 'higado':
  			return(
				{fuego: 2 ,
				 tierra: 3 ,
				 metal: 4 ,
				 agua: 8,
				 madera: 1
				}	

			);
  			break;
		case 'vesicula':
  			return(
				{fuego: 38 ,
				 tierra: 34 ,
				 metal: 44 ,
				 agua: 43,
				 madera: 41
				}	

			);
  			break;
		case 'corazon':
  			return(
				{fuego: 8 ,
				 tierra: 7 ,
				 metal: 4 ,
				 agua: 3,
				 madera: 9
				}	

			);
  			break;
		case 'intestino delgado':
  			return(
				{fuego: 5 ,
				 tierra: 8 ,
				 metal: 1 ,
				 agua: 2,
				 madera: 3
				}	

			);
  			break;
		case 'pericardio':
  			return(
				{fuego: 8 ,
				 tierra: 7 ,
				 metal: 5 ,
				 agua: 3,
				 madera: 9
				}	

			);
  			break;
		case 'san jiao':
  			return(
				{fuego: 6 ,
				 tierra: 10 ,
				 metal: 1 ,
				 agua: 2,
				 madera: 3
				}	

			);
  			break;
		case 'bazo pancreas':
  			return(
				{fuego: 2 ,
				 tierra: 3 ,
				 metal: 5 ,
				 agua: 9,
				 madera: 1
				}	

			);
  			break;
		case 'estomago':
  			return(
				{fuego: 41 ,
				 tierra: 36 ,
				 metal: 45 ,
				 agua: 44,
				 madera: 43
				}	

			);
  			break;
		case 'pulmon':
  			return(
				{fuego: 10 ,
				 tierra: 9 ,
				 metal: 8 ,
				 agua: 5,
				 madera: 11
				}	

			);
  			break;
		case 'intestino grueso':
  			return(
				{fuego: 5 ,
				 tierra: 11 ,
				 metal: 1 ,
				 agua: 2,
				 madera: 3
				}	

			);
  			break;
		
		default:
  			drink = 'Will never happen';
	}

};

function tratamientoTUNG(organo, tonificarDispersar){
	assert.equal((tonificarDispersar=='tonificar' || tonificarDispersar=='dispersar'),true);

	var resultado="superduper";
	if (tonificarDispersar=='tonificar') {
	// tonificas madre y dispersas abuelo
		//tonificar la madre
		
		var elementoAbuelo=organo.getElemento().abuelo();
		if (organo.isYin()) { var organoAbuelo=elementoAbuelo.organoYin()}
		else {var organoAbuelo=elementoAbuelo.organoYang()}

		var t2Meridiano=organo.getNombre();
		var t2Punto=organo.estrellaTung(); //[elementoAbuelo.getNombre()];
	}
	else { // dispersar
	}
	return(resultado);
}

 module.exports.tratamientoTUNG = tratamientoTUNG;
