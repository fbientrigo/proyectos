/*
Clase y creacion de Objetos Pokemon
las variables que definamos podran ser aplicadas en main.js
*/

class Ser {
  constructor(name, hp, attack, defense){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense; /* ability to create shields*/
    this.shield = 0;
  }

  getLifePoints() {
    return this.hp;
  }
  
  getAttack() {
    return this.attack;
  }

}

class Pokemon extends Ser {
  constructor(name, hp, attack, defense, type, img) {
    super(name, hp, attack, defense);
    this.type = type;
    this.image = img; // se le da directamente la direccion en la carpeta
    switch(type) {
      case 'fire':
        this.attackName = '🔥 Flujo Termodinamico '; 
        this.defenseName = '🎆 Escudo Entropico ';
        break;

      case 'water':
        this.attackName = '🌊 Oleaje de Gravedad';
        this.defenseName = '🌨 Pared de Frentes de Aire';
        break;

      default:
        this.attackName = 'Nombre del Ataque';
        this.defenseName = 'Nombre de la Defensa';
        break;
    }
    console.log(this.attackName,this.defenseName);
  };

  resistir(damage) {
    this.hp = this.hp - damage;
  }


}

class Personaje extends Pokemon {
  constructor(name, hp, attack, defense, type, img) {
    super(name, hp, attack, defense, type, img);
  }

  render(id, lado) {
    if (lado != 'izquierdo' && lado != 'derecho') {
      throw new Error('La variable "lado" en render debe de ser izquierdo o derecho');
    } else {
    let pivot = document.getElementById(id);  //pivot al div base de pokemon

    let plantilla = `<div class="pokemon-imagen">
    <img src="./src/img/${this.image}">
    </div>

    <div id="vida-${lado}" class="vida">
    ${this.hp}
    </div>

    <div class="controles">
      <button id="atk-${lado}" class="boton-ataque">${this.attackName}</button>
      <button id="dnd-${lado}" class="boton-defensa">${this.defenseName}</button>
      <button id="mss-${lado}" class="boton-esquivar"> 😵 Esquivar </button>
    </div>`;
   
    let node = document.createElement('div');
    node.innerHTML = plantilla;
    node.id = lado;
    pivot.appendChild(node);
    }}
  }

