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