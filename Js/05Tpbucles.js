//Ejercicio 4
let suma = 0;
do {
    let numero = prompt("Introduce un numero");
    if (Number(numero) == numero) {
        numero = Number(numero);
        suma = suma + numero;
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
} while (numero != undefined);
document.write(suma);

document.write("<br>");

