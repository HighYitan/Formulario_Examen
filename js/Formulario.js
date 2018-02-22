window.onload = function () {
	var url = "https://rawgit.com/HighYitan/Formulario_Examen/master/json/Formulario.json";
	var formElement=null;
	var respuestasTexto=[];
	var respuestaSelect=null;
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			document.getElementById("demo").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET", url, true); //Abre la url del JSON
	xhttp.send();

	// función personalizada que gestiona la respuesta a la petición de fichero.
	
	function gestionarXml(datosXml){
		//Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
		var xmlDoc = datosXml.responseXML;
		imprimirTitulos(xmlDoc);
		//preguntasTexto
		for(var answers=2 ; answers<4 ; answers++){
			respuestasTexto[answers]=xmlDoc.getElementsByTagName("answer")[answers].innerHTML;
	}
	
	
	
	
	
	
		var obj = JSON.parse(dadesJson);
	
	parser = new DOMParser();
	document.getElementById("p1").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("t1").innerHTML = xmlDoc.getElementsByTagName("question")[0].getAttribute("type");
	document.getElementById("r1").innerHTML = xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue;
	document.getElementById("o1").innerHTML = xmlDoc.getElementsByTagName("option")[0].childNodes[0].nodeValue;
	
}