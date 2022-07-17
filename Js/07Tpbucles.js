//Ejercicio 6
let i, rep;
for (i = 1; i <= 30; i++) {
    for (rep = 0; rep < i; rep++) {
        document.write(i);
    }
    document.write("<br>");
}

document.write("<br>");

//Ejercicio 7
let numrep = prompt("Introduce numero de repeticiones");
if (Number(numrep) == numrep) {
    if (numrep > 0 && numrep <= 50) {
        let rep,i;
        for (i = numrep; i >= 1; i--) {
            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
}