window.onload = function () {

var textXML = '<preguntes><pregunta tipus="text"><text>Quin és el color del cel?</text>'+
'<resposta>blau</resposta></pregunta></preguntes>';




	
	parser = new DOMParser();
	document.getElementById("p1").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("t1").innerHTML = xmlDoc.getElementsByTagName("question")[0].getAttribute("type");
	document.getElementById("r1").innerHTML = xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue;
	document.getElementById("o1").innerHTML = xmlDoc.getElementsByTagName("option")[0].childNodes[0].nodeValue;
	
}