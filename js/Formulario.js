window.onload = function () {
	var url = "https://rawgit.com/HighYitan/Formulario_Examen/master/json/Formulario.json";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			document.getElementById("demo").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET", url, true); //Abre la url del JSON
	xhttp.send();

		var obj = JSON.parse(dadesJson);
	
	parser = new DOMParser();
	document.getElementById("p1").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("t1").innerHTML = xmlDoc.getElementsByTagName("question")[0].getAttribute("type");
	document.getElementById("r1").innerHTML = xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue;
	document.getElementById("o1").innerHTML = xmlDoc.getElementsByTagName("option")[0].childNodes[0].nodeValue;
	
}