//Ejercicio 14
let cadena = prompt("Introduce una cadena de texto:");
    let numchar = cadena.length;    
    let caracter;
    let i;
    for (i = 0; i < numchar; i++) {
	caracter = cadena.charAt(i);    
	if (i == numchar - 1) {
		document.write(caracter);
	}
	else {
		document.write(caracter + "-");
	}
    }