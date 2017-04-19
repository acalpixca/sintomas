var Sintoma = require('./sintoma');
var Anamnesis = require('./anamnesis');
var Diagnostico = require('./diagnostico');

var sintoma=new Sintoma("dolor de cabeza");
sintoma.baGang.setYin(1);
console.log (sintoma.getDescripcion());
console.log(sintoma.baGang.getYin());

var listaSintomas=[];
listaSintomas.push(sintoma); // dolor de cabeza
listaSintomas.push(new Sintoma("dolor de vientre"));
listaSintomas.push(new Sintoma("malestar general"));

console.log(listaSintomas);

var listaBaGang=[];
for (i=0;i<listaSintomas.length;i++){
	listaBaGang.push(listaSintomas[i].getBaGang());
}

console.log(listaBaGang);

var diagnostico=new Diagnostico(new Anamnesis("Ibis"));
diagnostico.getAnamnesis().setListaSintoma(listaSintomas);

console.log(diagnostico);

console.log(diagnostico.diagnosticoPorBaGang());


// aqui abajo estoy probando lo que pasa si un objeto date se asigna a otros objetos y tal, ver Trello
var anamnesis2=new Anamnesis("Eva");
var diagnostico2 = new Diagnostico();

console.log("Fecha anamnesis: " + anamnesis2.getFecha());
console.log("Fecha diagnostico: " + diagnostico2.getFecha());



setTimeout(function() {
    	//anamnesis2.setFecha(new Date());
	anamnesis2.setFecha(anamnesis2.getFecha().setDate(18));
	console.log("Fecha anamnesis: " + anamnesis2.getFecha());
	console.log("Fecha diagnostico: " + diagnostico2.getFecha());
}, 3000);



