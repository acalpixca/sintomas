var Elemento = require('./elemento');

const valorMax=100;
const valorMin=0;
const valorInicial=50;

// const listaElementos=['fuego','tierra','metal','agua','madera'];
/*
function padre(item){
	return(listaElementos[Math.abs(listaElementos.indexOf(item)-1) % 5]);
}

function hijo(item){
	return(listaElementos[Math.abs(listaElementos.indexOf(item)+1) % 5]);
}

function abuelo(item){
	return(listaElementos[Math.abs(listaElementos.indexOf(item)-2) % 5]);
}

function nieto(item){
	return(listaElementos[Math.abs(listaElementos.indexOf(item)+2) % 5]);
}
*/
/*var padre= {fuego: 'madera', // el padre del fuego es la madera, etc.
	tierra:'fuego',
	metal:'tierra',
	agua:'metal',
	madera:'agua'
	};

var hijo = {fuego: 'tierra', // el hijo del fuego es la tierra, etc.
	tierra:'metal',
	metal:'agua',
	agua:'madera',
	madera:'fuego'
	};

var nieto = {fuego: 'metal', // el nieto del fuego es el metal, etc.
	tierra:'agua',
	metal:'madera',
	agua:'fuego',
	madera:'tierra'
	};

var abuelo = {fuego: 'agua', // el abuelo del fuego es el agua, etc.
	tierra:'madera',
	metal:'fuego',
	agua:'tierra',
	madera:'metal'
	};
*/
var persona= {fuego: valorInicial,
	tierra:50,
	metal:50,
	agua:50,
	madera:50
	};

var numIter=0;
var aUrgencias=false;

function exceso(elemento,incremento,callback){

	if (typeof incremento === "function") {
		var incr=1;
		callback=incremento;
	}
	else {
		// var incr = incremento || 1;
		var incr=incremento;
	} 
	
	numIter++;
	//console.log('Numero iteraciones: ' + numIter);
	//console.log('Soy exceso y mi parametro es ' + elemento);

	if (!aUrgencias) {
		if (persona[elemento]<valorMax) {
			persona[elemento]+=incr;
			//console.log('elemento ' + elemento + ' ha subido. Esta en nivel ' + persona[elemento] + '.');
			callback(elemento);
		}
		else {
			aUrgencias=true;
			//console.log('ATENCION: elemento ' + elemento + ' esta en nivel critico: ' + persona[elemento] + '. A URGENCIAS!!');
			throw "URGENCIAS";	
		}
	}
}

function deficiencia(elemento,decremento,callback){
	
	if (typeof decremento === "function") {
		var decr=1;
		callback=decremento;
	}
	else {
		// var decr = decremento || 1;
		var decr=decremento;
	} 

	numIter++;
	//console.log('Numero iteraciones: ' + numIter);
	//console.log('Soy deficiencia y mi parametro es ' + elemento);

	if (!aUrgencias){		
		if (persona[elemento]>valorMin) {
			persona[elemento]-=decr;
			//console.log('elemento ' + elemento + ' ha bajado. Esta en nivel ' + persona[elemento] + '.');
			callback(elemento);	
		}
		else {
			aUrgencias=true;
			//console.log('ATENCION: elemento ' + elemento + ' esta en nivel critico: ' + persona[elemento] + '. A URGENCIAS!!');	
			throw "URGENCIAS";
		}
	}
}

function callbackExceso(elemento){
	var ii=Math.floor(Math.random()*8);
	var delta=Math.floor(Math.random()*10);
	if (ii==0) { deficiencia(nieto(elemento),delta,callbackDeficiencia);} else {deficiencia(nieto(elemento),callbackDeficiencia);}
	if (ii==1) { deficiencia(abuelo(elemento),delta,callbackDeficiencia);} else {deficiencia(abuelo(elemento),callbackDeficiencia);}
	if (ii==2) { exceso(hijo(elemento),delta,callbackExceso);} else { deficiencia(abuelo(elemento),callbackExceso);}
	if (ii==3) { exceso(padre(elemento),delta,callbackExceso);} else { exceso(padre(elemento),callbackExceso);}

}

function callbackDeficiencia(elemento){
	var ii=Math.floor(Math.random()*8);
	var delta=Math.floor(Math.random()*10);
	if (ii==0) { exceso(nieto(elemento),delta,callbackExceso); } else { exceso(nieto(elemento),callbackExceso);}
	if (ii==1) { exceso(abuelo(elemento),delta,callbackExceso); } else { exceso(abuelo(elemento),callbackExceso);}
	if (ii==2) { deficiencia(hijo(elemento),delta,callbackDeficiencia); } else { deficiencia(hijo(elemento),callbackDeficiencia);}
	if (ii==3) { deficiencia(padre(elemento),delta,callbackDeficiencia); } else { deficiencia(padre(elemento),callbackDeficiencia);}
}

// AQUI LANZO LA EMULACION


/* Pruebas de las pruebas de paternidad ;)
	console.log(padre('madera'));	
	console.log(hijo('agua'));
	console.log(abuelo('madera'));
	console.log(nieto('agua'));*/

try {
	if ((Math.floor(Math.random()*10)%2)==0) {
		exceso(listaElementos[Math.floor(Math.random())*4],callbackExceso);
	}
	else {
		deficiencia(listaElementos[Math.floor(Math.random())*4],callbackExceso);
	}
}

catch(err) {
//	console.log('==================================================\nEste es el resultado final en ' + numIter + ' iteraciones: ');
//	console.log(persona);
//	console.log('[\n');
	var resultado={
		parametros: {'valorMax':valorMax, 'valorMin': valorMin, 'valorInicial': valorInicial},
		numeroInvocaciones: numIter,
		valoresFinales: persona
	}
	console.log(resultado); 
//	console.log(']');    
}


