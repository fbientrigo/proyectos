/*




*/

padre = document.getElementById("padre");

let characterName = "Hawking";
let hp = 100;
let attack = 20;
let defense = 16;
let type = "fire";
let imgH = "hawking.png";
let imgE = "einstein.png";

izquierdo = new Personaje(characterName, hp, attack, defense, type, imgH);
derecho = new Personaje("Einstein", hp, attack, defense, "water", imgE);

izquierdo.render("pokemonIzquierdo", "izquierdo");
derecho.render("pokemonDerecho", "derecho");

cambiarTurno(turno);
window.onload = innitGame();


