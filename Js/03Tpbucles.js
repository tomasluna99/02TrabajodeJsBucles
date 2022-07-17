//Ejercicio 15
let cadena = prompt("Introduce una cadena de texto:");
let numchar = cadena.length;    
cadena = cadena.toUpperCase();  
let car;
let contador = 0;
let i;
for (i = 0; i < numchar; i++) {
    car = cadena.charAt(i);    
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");

//Ejercicio 16
