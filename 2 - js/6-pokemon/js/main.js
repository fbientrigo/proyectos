/*




*/

padre = document.getElementById("padre");

let characterName = "Hawking";
let hp = 100;
let attack = 20;
let defense = 16;
let type = "fire";
let img = "hawking.jpg";
personaje = new Personaje(characterName, hp, attack, defense, type, img);

personaje.render("main-pokemon");
personaje.render("pokemon2");