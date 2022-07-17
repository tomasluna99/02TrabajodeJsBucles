//Ejercicio 2

a=prompt("ingrese la nota del alumno ");
           if(a>=7){
               alert("bien");
           }else{
               if(a>5&&a<7){
                   alert("suficiente");
               }else{
                   if(a<=5){
                       alert("insuficiente");
                   }
               }
           }

           document.write("<br>");

//Ejercicio 3
let resultado = "";
do {
    let cadena = prompt("Introduce una cadena");
    if (resultado == "") {
        resultado = resultado + cadena;
    }
    else {
        resultado = resultado + "-" + cadena;
    }
} while (confirm("Desea seguir?"));
document.write(resultado);           