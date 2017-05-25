var wikiPuntos=require('./puntosWikipedia');

var gp=['bazo', 'corazon', 'dumai', 'estomago', 'extrapoints','higado','id', 'ig', 'pericardio', 'pulmon', 'renmai', 'rinon', 'sanjiao', 'vejiga', 'vesicula'];

var codi="";
var expo="";

for (var i=0; i<gp.length;i++) {
	var lista=eval('wikiPuntos.'+ gp[i]);
	var organoStr=gp[i].toUpperCase();
	for (var j=0; j<lista.length;j++){
		if (organoStr==='EXTRAPOINTS') {
			codi=codi + 'const ' + lista[j].punto.replace(/-/g,'_') + ' =  new Punto({canal: \'\' , numero: null, nombre: \''+ lista[j].punto + '\' });\n';
		}
		/*else if (organoStr==='DUMAI' || organoStr==='RENMAI'){
			// algo especial de dumai o renmai?
		} */
		else {
			codi=codi + 'const ' + lista[j].punto.replace(/-/g,'_') + ' =  new Punto({canal: \'Canal.' + organoStr + '\' , numero: ' + lista[j].numero + ' , nombre: \''+ lista[j].punto + '\' });\n';
			// parametros {canal, numero, nombre}
		}
		expo=expo + 'module.exports.' + lista[j].punto.replace(/-/g,'_') + ' = ' + lista[j].punto.replace(/-/g,'_') + ';\n'; 
	}
}


 console.log(codi);
 console.log('\n\n');
 console.log(expo);