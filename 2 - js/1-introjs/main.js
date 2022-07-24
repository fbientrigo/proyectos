// --- Seccion de Enteros ---
var pi = 3.141592653589793;
var plank = 6.626 * 10**(-34);

console.log("Experimento con valores numericos")
console.log(pi)
console.log(plank)

console.log("El porque las computadoras son malas sumando")
var num1 = 0.1
var num2 = 0.2
console.log(num1, num2)
console.log(num1 + num2)
var orderError = num1 + num2 - 0.3 
console.log("observese la diferencia numerica del orden de:", orderError)


console.log("Sección de Objetos, el ente principal")
var miObjeto = {
    nombre: "Objeto numero 1",
    estado: "Creado",
    voda: 100,
    ataque: 3
}
console.log(miObjeto)

console.log("Sección de Arreglos")
var miArreglo = [1, 3, 4, 5 , "42"]
for (let index = 0; index < miArreglo.length; index++) {
    var element = miArreglo[index];
    console.log(element)
}

// --- Seccion de Disyuncion ---
console.log("Tablas de Disyunción")
// Tomamos los distintos valores de la tabla
var p1 = document.getElementById("p1").textContent;
var q1 = document.getElementById("q1").textContent;
var p2 = document.getElementById("p2").textContent;
var q2 = document.getElementById("q2").textContent;
var p3 = document.getElementById("p3").textContent;
var q3 = document.getElementById("q3").textContent;
var p4 = document.getElementById("p4").textContent;
var q4 = document.getElementById("q4").textContent;
/* este metodo no se usa, ya que toda astring que contenga algo
sera evaluada como true var p1 = Boolean("false"); */
/* proviniente del source https://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript */
// Esta es la conversion a booleanos para pasar un string que diga true o no
// ojo que cualquier cosa que no sea "true" sera interpretada como falsa
var p1 = (p1 === "true")
var p2 = (p2 === "true")
var p3 = (p3 === "true")
var p4 = (p4 === "true")
var q1 = (q1 === "true")
var q2 = (q2 === "true")
var q3 = (q3 === "true")
var q4 = (q4 === "true")

//Se toma para modificar los elementos:
var porq1 = document.getElementById("porq1");
var porq2 = document.getElementById("porq2");
var porq3 = document.getElementById("porq3");
var porq4 = document.getElementById("porq4");
var pandq1 = document.getElementById("pandq1");
var pandq2 = document.getElementById("pandq2");
var pandq3 = document.getElementById("pandq3");
var pandq4 = document.getElementById("pandq4");

// modifcamos el contenido de texto
porq1.textContent = p1 || q1;
porq2.textContent = p2 || q2;
porq3.textContent = p3 || q3;
porq4.textContent = p4 || q4;
pandq1.textContent = p1 && q1;
pandq2.textContent = p2 && q2;
pandq3.textContent = p3 && q3;
pandq4.textContent = p4 && q4;

