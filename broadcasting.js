function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function colorearPropagacion(propagable, elementoDOM) {
    if(propagable) {
        elementoDOM.style.borderColor = 'green';
        elementoDOM.style.backgroundColor = 'lightgreen';
    }
    else {
        elementoDOM.style.borderColor = 'red';
        elementoDOM.style.backgroundColor = 'lightcoral';
    }
}

// INFO: http://w3.unpocodetodo.info/canvas/introduccion.php

function dibujarLienzo() {
	// encuentre el canvas para dibujar.
	var canvas = document.getElementById("lienzo");
	 // si existe el canvas y si tiene el método getContext
		if (canvas && canvas.getContext) {
		// utilice el método getContext para recuperar el contexto del canvas
		var ctx = canvas.getContext("2d");
		// y si tenemos contexto
			if (ctx) {
			// dibujamos las lineas que unen las cajas scopes del gráfico.
                var xini = 278;
                var yini = 72;

                ctx.lineWidth = 1;
                ctx.strokeStyle = "rgb(205,40,40)";

                ctx.moveTo(xini,yini);
                ctx.lineTo(xini,yini+42);

                ctx.moveTo(xini-110,yini+142);
                ctx.lineTo(xini,yini+100);
                ctx.lineTo(xini+110,yini+142);

                ctx.moveTo(xini-182,yini+242);
                ctx.lineTo(xini-110,yini+200);
                ctx.lineTo(xini-38,yini+242);

                ctx.moveTo(xini+115,yini+200);
                ctx.lineTo(xini+115,yini+242);

                ctx.stroke();
			}
		}
}

window.onload = function() {
    dibujarLienzo();
}
