var Elemento=require('./elemento');
var Organo=require('./organo');
var Canal=require('./canal');
var Punto=require('./punto');
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

Organo.Organo.prototype.estrellaSAAM=function(){
	switch(this.getNombre()) {	
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
		case 'vesicula biliar':
  			return(
				{fuego: 38 ,
				 tierra: 34 ,
				 metal: 44 ,
				 agua: 43,
				 madera: 41
				}	

			);
  			break;
			
		default:
  			drink = 'Will never happen';
	}

};

function tratamientoSAAM(organo, tonificarDispersar){
	assert.equal((tonificarDispersar=='tonificar' || tonificarDispersar=='dispersar'),true);

	var resultado=[];
	var elementoAbuelo=organo.getElemento().abuelo();
	var elementoPadre=organo.getElemento().padre();
	var elementoHijo=organo.getElemento().hijo();

	if (tonificarDispersar=='tonificar') {
	// tonificas padre y dispersas abuelo

		if (organo.isYin()) { 
			var organoPadre=elementoPadre.organoYin();
			var organoAbuelo=elementoAbuelo.organoYin()
		}
		else {
			var organoPadre=elementoPadre.organoYang();
			var organoAbuelo=elementoAbuelo.organoYang()
		}

		//tonificar el padre
		var t1Meridiano=organoPadre.getNombre();
		var t1Punto=organoPadre.estrellaSAAM()[elementoPadre.getNombre()];

		var t2Meridiano=organo.getNombre();
		var t2Punto=organo.estrellaSAAM()[elementoPadre.getNombre()];

		// dispersar el abuelo
		var d1Meridiano=organoAbuelo.getNombre();
		var d1Punto=organoAbuelo.estrellaSAAM()[elementoAbuelo.getNombre()];

		var d2Meridiano=organo.getNombre();
		var d2Punto=organo.estrellaSAAM()[elementoAbuelo.getNombre()];
// aqui intentamos usar bien los objetos
		var t1ObjetoPunto=Punto.puntoPorCanalNumero(Canal.getCanalPorOrgano(Organo.organoPorNombre(t1Meridiano)),t1Punto);
		var t2ObjetoPunto=Punto.puntoPorCanalNumero(Canal.getCanalPorOrgano(Organo.organoPorNombre(t2Meridiano)),t2Punto);
		var d1ObjetoPunto=Punto.puntoPorCanalNumero(Canal.getCanalPorOrgano(Organo.organoPorNombre(d1Meridiano)),d1Punto);
		var d2ObjetoPunto=Punto.puntoPorCanalNumero(Canal.getCanalPorOrgano(Organo.organoPorNombre(d2Meridiano)),d2Punto);

		resultado.push("Tonificar " + d1ObjetoPunto.getCanal().replace('Canal.','') + ' (' + Organo.organoPorNombre(d1Meridiano).getNombre() + ') - ' + d1ObjetoPunto.getNumero() + ', o ' + d1ObjetoPunto.getNombreTradicional() + ' ' + d1ObjetoPunto.getChinoTradicional());
		resultado.push("Tonificar " + d2ObjetoPunto.getCanal().replace('Canal.','') + ' (' + Organo.organoPorNombre(d2Meridiano).getNombre() + ') - ' + d2ObjetoPunto.getNumero() + ', o ' + d2ObjetoPunto.getNombreTradicional() + ' ' + d2ObjetoPunto.getChinoTradicional());	
		resultado.push("Tonificar " + t1ObjetoPunto.getCanal().replace('Canal.','') + ' (' + Organo.organoPorNombre(t1Meridiano).getNombre() + ') - ' + t1ObjetoPunto.getNumero() + ', o ' + t1ObjetoPunto.getNombreTradicional() + ' ' + t1ObjetoPunto.getChinoTradicional());
		resultado.push("Tonificar " + t2ObjetoPunto.getCanal().replace('Canal.','') + ' (' + Organo.organoPorNombre(t2Meridiano).getNombre() + ') - ' + t2ObjetoPunto.getNumero() + ', o ' + t2ObjetoPunto.getNombreTradicional() + ' ' + t2ObjetoPunto.getChinoTradicional());
// fin aqui
		/* 
		resultado.push("Dispersar " + d1Meridiano + d1Punto + ".");
		resultado.push("Dispersar " + d2Meridiano + d2Punto + ".");	
		resultado.push("Tonificar " + t1Meridiano + t1Punto + ".");	
		resultado.push("Tonificar " + t2Meridiano + t2Punto + ".");
	 */
	}
	else { // dispersar
	// dispersas el hijo y tonificas el abuelo
		if (organo.isYin()) { 
			var organoHijo=elementoHijo.organoYin();
			var organoAbuelo=elementoAbuelo.organoYin()
		}
		else {
			var organoHijo=elementoHijo.organoYang();
			var organoAbuelo=elementoAbuelo.organoYang()
		}

		// dispersar el hijo
		var d1Meridiano=organoHijo.getNombre();
		var d1Punto=organoHijo.estrellaSAAM()[elementoHijo.getNombre()];

		var d2Meridiano=organo.getNombre();
		var d2Punto=organo.estrellaSAAM()[elementoHijo.getNombre()];
		//tonificar el abuelo
		var t1Meridiano=organoAbuelo.getNombre();
		var t1Punto=organoAbuelo.estrellaSAAM()[elementoAbuelo.getNombre()];

		var t2Meridiano=organo.getNombre();
		var t2Punto=organo.estrellaSAAM()[elementoAbuelo.getNombre()];

// aqui intentamos usar bien los objetos
		var t1ObjetoPunto=Punto.puntoPorCanalNumero(Canal.getCanalPorOrgano(Organo.organoPorNombre(t1Meridiano)),t1Punto);
		var t2ObjetoPunto=Punto.puntoPorCanalNumero(Canal.getCanalPorOrgano(Organo.organoPorNombre(t2Meridiano)),t2Punto);
		var d1ObjetoPunto=Punto.puntoPorCanalNumero(Canal.getCanalPorOrgano(Organo.organoPorNombre(d1Meridiano)),d1Punto);
		var d2ObjetoPunto=Punto.puntoPorCanalNumero(Canal.getCanalPorOrgano(Organo.organoPorNombre(d2Meridiano)),d2Punto);
		
		resultado.push("Tonificar " + d1ObjetoPunto.getCanal().replace('Canal.','') + ' (' + Organo.organoPorNombre(d1Meridiano).getNombre() + ') - ' + d1ObjetoPunto.getNumero() + ', o ' + d1ObjetoPunto.getNombreTradicional() + ' ' + d1ObjetoPunto.getChinoTradicional());
		resultado.push("Tonificar " + d2ObjetoPunto.getCanal().replace('Canal.','') + ' (' + Organo.organoPorNombre(d2Meridiano).getNombre() + ') - ' + d2ObjetoPunto.getNumero() + ', o ' + d2ObjetoPunto.getNombreTradicional() + ' ' + d2ObjetoPunto.getChinoTradicional());	
		resultado.push("Tonificar " + t1ObjetoPunto.getCanal().replace('Canal.','') + ' (' + Organo.organoPorNombre(t1Meridiano).getNombre() + ') - ' + t1ObjetoPunto.getNumero() + ', o ' + t1ObjetoPunto.getNombreTradicional() + ' ' + t1ObjetoPunto.getChinoTradicional());
		resultado.push("Tonificar " + t2ObjetoPunto.getCanal().replace('Canal.','') + ' (' + Organo.organoPorNombre(t2Meridiano).getNombre() + ') - ' + t2ObjetoPunto.getNumero() + ', o ' + t2ObjetoPunto.getNombreTradicional() + ' ' + t2ObjetoPunto.getChinoTradicional());		
		
// fin aqui
		
		/*resultado.push("Dispersar " + d1Meridiano + d1Punto + ".");
		resultado.push("Dispersar " + d2Meridiano + d2Punto + ".");
		resultado.push("Tonificar " + t1Meridiano + t1Punto + ".");	
		resultado.push("Tonificar " + t2Meridiano + t2Punto + "."); */
	}
	return(resultado);
}

 module.exports.tratamientoSAAM = tratamientoSAAM;
