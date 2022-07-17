//Ejercicio 1
let edad = prompt("Ingresa tu edad");

if (edad > 18 ) {
  document.write("Es mayor de edad:")
  
} else { 
  document.write("No es mayor:")
  
}

document.write("<br>")

//Ejercicio 11        
    
    let nombre1 = prompt("Nombre 1:");
    let edad1 = Number(prompt("Edad 1:"));

    let nombre2 = prompt("Nombre 2:");
    let edad2 = Number(prompt("Edad 2:"));

    let nombre3 = prompt("Nombre 3:");
    let edad3 = Number(prompt("Edad 3:"));


    let maximo = Math.max(edad1, edad2, edad3);

    if (maximo == edad1) {
        document.write("El mayor es: " + nombre1);
    }
    if (maximo == edad2) {
        document.write("El mayor es: " + nombre2);
    }
    if (maximo == edad3) {
        document.write("El mayor es: " + nombre3);
    }



