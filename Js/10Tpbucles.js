//Ejercicio 10
//DECLARAMOS LAS VARIABLES
var i,j;
//PEDIMOS POR TECLADO EL NÚMERO DE FILAS
//Number fuerza a que se introduzca un número
var filas = Number(prompt("Introduce numero de filas"));
//PEDIMOS EL NÚMERO DE COLUMNAS
var colum = Number(prompt("Introduce numero de columnas"));
//MULTIPLICAMOS filas * columnas Y GUARDAMOS EL RESULTADO EN res
var res = filas * colum;
//COMENZAMOS A IMPRIMIR LA TABLA
document.write("<table border>");
//BUCLE DESDE 0 HASTA EL NÚMERO DE FILAS
for (i = 0; i < filas; i++) {

    document.write("<tr>");
    for (j = 0; j < colum; j++) {
        document.write("<td>");
        //valor de res
        document.write(res);
        //le restamos un valor a res
        res--;
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");