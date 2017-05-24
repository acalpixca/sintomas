var wikiPuntos=require('./puntosWikipedia');

var gp=['bazo', 'corazon', 'dumai', 'estomago', 'extrapoints','higado','id', 'ig', 'pericardio', 'pulmon', 'renmai', 'rinon', 'sanjiao', 'vejiga', 'vesicula'];

var codi="";

for (var i=0; i<gp.length;i++) {
	//codi=codi+ ' const ' + gp[i].toUpperCase() + '= blabla;\n';	
	//console.log(eval(gp[i]));
	var lista=eval('wikiPuntos.'+ gp[i]);
	for (var j=0; j<lista.length;j++){
		codi=codi + 'const ' + lista[j].punto + ' =  new Punto({canal: \'algo\' , numero: ' + lista[j].numero + ' , nombre: \''+ lista[j].punto + '\' });\n';
		// parametros {canal, numero, nombre}
	}
}


 console.log(codi);