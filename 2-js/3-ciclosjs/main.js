// Desafio 2 JS
/* 
- Definir un problema
- Transferirlo a Algoritmos de If/Else

*/

/*
Problema:
Jared Leto tiene OCD y necesita que sus transferencias bancarias sean solo
numeros primos

*/
//accion con el boton para pedir el numero
/* Todo el codigo parte con el Boton*/
document.getElementById("depositar").addEventListener('click', function(){

var numero = parseInt(prompt("Ingresa una cantidad para depositar: "));

/* 
    Seccion para crear tablas con el resultado
*/
var deposito = document.getElementById("deposito");
var opinion = document.getElementById("opinion");

// escribir la cantidad
deposito.textContent = numero

// --- algoritmo de primos --- 
var primo = true;
// comprobar si es 1
if (numero === 1) {
}

else if (numero > 1) {
    // en caso de ser mayor, dividiremos por todos los numeros
    // usando el modulo
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
            break; //quiere decir que dejamos de loopear
        }
    }

    // Jared Leto dara su opinion
    if (primo) {
        opinion.textContent = "Es un numero primo :)"
    } else {
        opinion.textContent = "No es un numero primo"
    }
}
else { // Si es un numero negativo 
    opinion.textContent = "Estas depositandome dinero negativo!"
}

});
