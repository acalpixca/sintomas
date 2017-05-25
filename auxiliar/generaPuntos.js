var wikiPuntos=require('./puntosWikipedia');
var Canal=require('../canal');
var Organo=require('../organo');

var gp=['bazo', 'corazon', 'dumai', 'estomago', 'extrapoints','higado','id', 'ig', 'pericardio', 'pulmon', 'renmai', 'rinon', 'sanjiao', 'vejiga', 'vesicula'];

var codi="";
var expo="";

var codiMap = 'var canalNumeroPuntoMap=new Map();\n';

for (var i=0; i<gp.length;i++) {
	var lista=eval('wikiPuntos.'+ gp[i]);
	var canalStr=gp[i].toUpperCase();
	for (var j=0; j<lista.length;j++){
		if (canalStr==='EXTRAPOINTS') {
			codi=codi + 'const ' + lista[j].punto.replace(/-/g,'_') + ' =  new Punto({canal: \'\' , numero: null, nombre: \''+ lista[j].punto + '\', chinoTradicional: \'' + lista[j].caracter + '\', nombreTradicional: \'' + lista[j].nombre + '\' });\n';
			
			// todavia no se como meter el punto en el map
		}
		else if (canalStr==='DUMAI' || canalStr==='RENMAI'){
			// algo especial de dumai o renmai?
			codi=codi + 'const ' + lista[j].punto.replace(/-/g,'_') + ' =  new Punto({canal: \'Canal.' + canalStr + '\' , numero: ' + lista[j].numero + ' , nombre: \''+ lista[j].punto + '\', chinoTradicional: \'' +  lista[j].caracter + '\', nombreTradicional: \'' + lista[j].nombre + '\'  });\n'; // igual que el caso general
			
			codiMap=codiMap + 'canalNumeroPuntoMap.set({canal: Canal.' + canalStr + ' , numero: ' + lista[j].numero + '}, '  + lista[j].punto.replace(/-/g,'_') + ' );\n';
			
			
		}
		else { // punto de meridiano de organo
			var canal=Canal.getCanalPorOrgano(Organo.organoPorNombre(gp[i]));
			codi=codi + 'const ' + lista[j].punto.replace(/-/g,'_') + ' =  new Punto({canal: \'Canal.' + canal.getNombre().toUpperCase() + '_' + canal.getPieMano().toUpperCase() + '\' , numero: ' + lista[j].numero + ' , nombre: \''+ lista[j].punto + '\', chinoTradicional: \'' +  lista[j].caracter + '\', nombreTradicional: \'' + lista[j].nombre + '\'  });\n';
			// parametros {canal, numero, nombre, chinoTradicional}
			
			codiMap=codiMap + 'canalNumeroPuntoMap.set({canal: Canal.' + canal.getNombre().toUpperCase() + '_' + canal.getPieMano().toUpperCase() + ' , numero: ' + lista[j].numero + '}, ' +  lista[j].punto.replace(/-/g,'_') + ' );\n';

		}
		
		
		
		expo=expo + 'module.exports.' + lista[j].punto.replace(/-/g,'_') + ' = ' + lista[j].punto.replace(/-/g,'_') + ';\n'; 
	}
}


 console.log(codi);
 console.log('\n\n');
 console.log('// a este map le pasas {canal, numero} y te devuelve el punto de acupuntura.\n');
 console.log(codiMap);
 console.log('\n\n');
 console.log(expo);
 console.log('module.exports.canalNumeroPuntoMap=canalNumeroPuntoMap;');