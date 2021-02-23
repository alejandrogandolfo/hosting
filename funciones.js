var operandoA;
var operandoB;
var operacion;





function init() {
	var resultado = document.querySelector("#resultado");
	var reset = document.querySelector("#reset");
    var suma = document.querySelector("#suma");
    var resta = document.querySelector("#resta");
    var multiplicacion = document.querySelector("#multiplicacion");
    var division = document.querySelector("#division");
    var raiz = document.querySelector("#raiz");
    var potencia = document.querySelector("#potencia");
    var uno = document.querySelector("#uno");
    var dos = document.querySelector("#dos");
    var tres = document.querySelector("#tres");
    var cuatro = document.querySelector("#cuatro");
    var cinco = document.querySelector("#cinco");
    var seis = document.querySelector("#seis");
    var siete = document.querySelector("#siete");
    var ocho = document.querySelector("#ocho");
    var nueve = document.querySelector("#nueve");
    var cero = document.querySelector("#cero");
    var igual = document.querySelector("#igual");
    var porcentaje = document.querySelector("#porcentaje");

  
    uno.addEventListener('click', function(e){
    	resultado.innerHTML = resultado.innerHTML + "1";
    } );
    

    dos.addEventListener('click', function(e){
    	resultado.innerHTML = resultado.innerHTML + "2";
    } );

    tres.addEventListener('click', function(e){
    	resultado.innerHTML = resultado.innerHTML + "3";
    } );

    cuatro.addEventListener('click', function(e){
    	resultado.innerHTML = resultado.innerHTML + "4";
    } );

    cinco.addEventListener('click', function(e){
    	resultado.innerHTML = resultado.innerHTML + "5";
    } );

    seis.addEventListener('click', function(e){
    	resultado.innerHTML = resultado.innerHTML + "6";
    } );

    siete.addEventListener('click', function(e){
    	resultado.innerHTML = resultado.innerHTML + "7";
    } );

    ocho.addEventListener('click', function(e){
    	resultado.innerHTML = resultado.innerHTML + "8";
    } );

    nueve.addEventListener('click', function(e){
    	resultado.innerHTML = resultado.innerHTML + "9";
    } );

    cero.addEventListener('click', function(e){
    	resultado.innerHTML = resultado.innerHTML + "0";
    } );


    reset.addEventListener('click', function(e){
    	resetear();
    });
      
    suma.addEventListener('click', function(e){
    	operandoA = resultado.innerHTML;
    	operacion = "+";
    	limpiar();
	});

    resta.addEventListener('click', function(e){
    	operandoA = resultado.innerHTML;
    	operacion = "-";
    	limpiar();
	});

    multiplicacion.addEventListener('click', function(e){
    	operandoA = resultado.innerHTML;
    	operacion = "*";
    	limpiar();
	});

	division.addEventListener('click', function(e){
    	operandoA = resultado.innerHTML;
    	operacion = "/";
    	limpiar();
	});

	porcentaje.addEventListener('click', function(e){
    	operandoA = resultado.innerHTML;
    	operacion = "%";
    	limpiar();
	});

	raiz.addEventListener('click', function(e){
    	operandoA = resultado.innerHTML;
    	operacion = "√";
    	limpiar();
	});

	potencia.addEventListener('click', function(e){
		operandoA = resultado.innerHTML;
		operacion = "(^)";
		limpiar();

	})

	igual.addEventListener('click', function(e){
    	operandoB = resultado.innerHTML;
    	resolver();
	});

}

function limpiar(){
	resultado.innerHTML = "";
}


function resetear(){
	resultado.innerHTML = "";
	operandoA = 0;
	operandoB = 0;
	operando = "";
}

function resolver(){
	var res = 0;
	switch(operacion){
		case "+":
			res = parseFloat(operandoA) + parseFloat(operandoB);
			break;

		case "-":
			res = parseFloat(operandoA) - parseFloat(operandoB);
			break;

		case "*":
			res = parseFloat(operandoA) * parseFloat(operandoB);
			 break;

		case "/":
			res = parseFloat(operandoA) / parseFloat(operandoB);
			break;

		case "%":
			res = (parseFloat(operandoA)*parseFloat(operandoB)) / 100;
			break;

		case "√":
			res = Math.sqrt(parseFloat(operandoA));
			break;

		case "(^)":
			res = Math.pow(operandoA,operandoB);
			break;

	}
	resetear();
	resultado.innerHTML = res;

}