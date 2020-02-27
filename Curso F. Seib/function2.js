var nombre;
var apellido;
var nacimiento;
var dia;
var mes;
var anio;
var suEdad;

function ingresarDatos(){
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
    nacimiento = prompt("Ingrese su fecha de nacimiento (Formato DD/MM/AAAA)")
    dia = nacimiento.substring(0, 1);
    mes = nacimiento.substring(3, 4);
    anio = nacimiento.substring(6, 9);
}

function calcularEdad(){
    var fecha = new Date();
    suEdad = fecha.getFullYear() - anio;
    if(fecha.getDay() - dia <= 0 && (fecha.getMonth() + 1)- mes <= 0){
        suEdad--;
    } 
}

function mostrarDatos(){
    alert(nombre + " " + apellido + "\nEdad: " + suEdad);
}