# Proyecto de Ciclos
Para calcular numeros primos, comprobamos estos mediante un algoritmo que es `O(N)`, el cual es dividir el numero `N`que queremos poner a prueba por todos los numeros anteriores a él.

```javascript
...
if (numero > 1) {
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
...
```

___

## Indicaciones

@hereProyecto del día de hoy:
En base un problema que detectes en la vida real, escribir un párrafo que lo explique. Con ello detectar las entidades y los pasos a seguir para resolverlo.

Luego, escribir dos  códigos. 
 El primero tiene que resolver tu problema utilizando for 
El segundo tiene que resolver tu problema utilizando while

tienen el code que hicimos en la clase para guiarse.

nombre del proyecto: ciclos_js

En el live-code revisaremos sus algoritmos y las buenas practicas que hemos aprendido hasta el día de hoy.

IMPORTANTE: Documentar más hasta que sintamos que entendemos completamente el código sin necesidad de los comentarios

___