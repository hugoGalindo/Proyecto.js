//Encabezado

var txt = "Bienvenidos a SEGUROS TK-U";
document.write("<p>" + txt.italics() + "   </p>");

//PETICION DE NOMBRES Y APELLIDOS
var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
console.log("Nombres y apellidos:" + nombreCompleto);
document.write("Gracias por preferirnos  " + nombreCompleto)

//FECHA DE NACIMIENTO 
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
document.write("<br> Fecha de nacimiento: " + diaNacimiento);
console.log(diaNacimiento);
document.write()

var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
document.write("/" + mesNacimiento);
console.log(mesNacimiento);

var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
document.write("/" + anioNacimiento);
console.log(anioNacimiento);
// verificacion si es mayor o menor de 18
if (anioNacimiento <= 2002) {
    console.log()
} else if (anioNacimiento > 2002)
    alert("Le podremos realizar su cotizacion pero no tiene la edad suficiente para ser asegurado"); {}

//CONYUGUE 
var conyuge
conyuge = prompt("¿Tiene cónyuge?", " SI/NO");
document.write("<br> ¿Tiene conyuge?: " + conyuge)

if (conyuge === "si") {
    var edadConyuge = prompt("¿Cuál es la edad de su conyuge?");
}

//HIJOS
var hijos
hijos = prompt("¿Tiene hijos?", " SI/NO");
document.write("<br> ¿Tiene Hijos?: " + hijos)
if (hijos == "si") {
    var cantidadHijos = prompt("Ingrese cantidad de hijos menores de 21 años");
    document.write("<br> Cantidad de hijos menores de 21 años: " + cantidadHijos)
}
//desglose de cargos
var desg = "A continuación presentan los detalles de los servicios prestados:";
document.write("<p>" + desg.bold() + "   </p>");

const precioBase = 250;
comision = precioBase * 0.30;
// El siguiente es un comentario.
// Por favor no elimine los caracteres 
// que se encuentran al inicio.
// En la siguiente variable usted debe calcular los cargos correspondientes.
// Puede crear la cantidad de variables necesarias para calcular cada uno
// de los recargos que sean necesarios



recargos = 0;
recargosedad = 0;
recargosconyuge = 0;
// mayor de 18
if (anioNacimiento > 2002) {
    document.write("Lo sentimos, aun no tiene la edad suficiente para ser asegurado")

}
//menor de 21
if (anioNacimiento > 1999 && anioNacimiento <= 2002) {
    document.write("No se le aplicara recargos por edad" + "-----Q.00.00")
}
///entre 21 y 25//
if (anioNacimiento > 1995 && anioNacimiento <= 1999) {

    recargosedad = precioBase * 0.01
    document.write("Recargos por edad" + "------Q." + recargosedad)

}
//entre 25 y 30
if (anioNacimiento > 1990 && anioNacimiento <= 1995) {


    recargosedad = precioBase * 0.02
    document.write("Recargos por edad" + "------Q." + recargosedad)

}
//entre 30 y 40
if (anioNacimiento > 1980 && anioNacimiento <= 1990) {

    recargosedad = precioBase * 0.05
    document.write("Recargos por edad:" + "-----Q." + recargosedad)
}
//entre 40 y 50
if (anioNacimiento > 1970 && anioNacimiento <= 1980) {

    recargosedad = precioBase * 0.08
    document.write("Recargos por edad" + "-----Q." + recargosedad)
}
//entre 50 y 65
if (anioNacimiento > 1955 && anioNacimiento <= 1970) {

    recargosedad = precioBase * 0.12
    document.write("Recargos por edad:" + "-----Q." + recargosedad)
}
// mayor de 65
if (anioNacimiento <= 1955) {
    document.write("Lo sentimos,no lo podemos asegurar")
}
//Recargos por cónyuge: 
//menor de 30 
if (edadConyuge < 30) {
    recargosconyuge = precioBase * 0.01

    document.write("<br> Recargos por conyuge:" + "-----Q." + recargosconyuge)
}
if (edadConyuge >= 30 && edadConyuge < 40) {
    recargosconyuge = precioBase * 0.02
    document.write("<br> Recargos por conyuge:" + "-----Q." + recargosconyuge)
}
if (edadConyuge >= 40 && edadConyuge < 50) {
    recargosconyuge = precioBase * 0.03
    document.write("<br> Recargos por conyuge:" + "-----Q." + recargosconyuge)
}
if (edadConyuge >= 50 && edadConyuge < 70) {
    recargosconyuge = precioBase * 0.05
    document.write("<br> Recargos por conyuge:" + "-----Q." + recargosconyuge)
}
//recargos por hijos
if (cantidadHijos < 21) {
    recargos = precioBase * 0.01 * cantidadHijos

    document.write("<br> Recargos por hijos:" + "-----Q." + recargos)
}


totalPagar = precioBase + comision + recargos + recargosconyuge + recargosedad;
document.write("<br> Total a pagar:" + totalPagar);