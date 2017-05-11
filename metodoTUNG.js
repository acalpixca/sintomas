var Elemento=require('./elemento');
var Organo=require('./organo');
var assert=require('assert');

Organo.Organo.prototype.estrellaTUNG=function(){
	//assert.equal(1,1);
	//return('hola');
	//if (this.getNombre()=='rinon') {return(this.getNombre())}


	switch(this.getNombre()) {
		case 'rinon':
  			return(
				//this.getNombre()
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
				//this.getNombre()
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
				//this.getNombre()
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
				//this.getNombre()
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
				//this.getNombre()
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
				//this.getNombre()
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
				//this.getNombre()
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
				//this.getNombre()
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
				//this.getNombre()
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
				//this.getNombre()
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
				//this.getNombre()
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
				//this.getNombre()
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
	if (tonificarDispersar=='tonificar') {
		var resultado='whatever';
	}
	else {
	}
	return(resultado);
}

 module.exports.tratamientoTUNG = tratamientoTUNG;
