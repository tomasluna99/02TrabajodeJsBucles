//Ejercicio 8
let numrep = prompt("Introduce numero de repeticiones");
if (Number(numrep) == numrep) {
    if (numrep > 0 && numrep <= 50) {
        let rep,i;
        for (i = 0; i <=numrep; i++) {
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
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

//Ejercicio 9
for(let indice = 1; indice <=  500; indice++){
  document.write(indice);
  //Preguntar si es multiplo de 4
  if( indice % 4 === 0){
    document.write("Es multiplo de 4")
  }
  if( indice % 9 ===0){
    document.write("Es multiplo de 9")
  }
  document.write("<br>");
  //mostrar una linea
  if( indice % 5 === 0){
    document.write("<hr>")
  }
}