$(document).ready(function(){
	//console.log('hola');

	var tbl = $('table tr:has(td)').map(function(i, v) {
		var $td =  $('td', this)
			return {
					 //id: ++i,
					punto: $td.eq(0).text(),
					meridiano: $td.eq(0).text().split('-')[0],
					numero: $td.eq(0).text().split('-')[1],
					caracter: $td.eq(1).text(),
					nombre: $td.eq(2).text(),  
					english: $td.eq(0).text(),
					pinyin: $td.eq(1).text(),
					coreano: $td.eq(2).text(),
					romaji: $td.eq(0).text(),
					vietnamita: $td.eq(1).text(),
					alt: $td.eq(2).text()					
				   }
	}).get();
	
	console.log(tbl);
	$('body').append('<h1>Array de JSON:</h1>');
	$('body').append(JSON.stringify(tbl));
});