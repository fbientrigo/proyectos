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

  damage(enemigo, multiplicador) {
    console.log(`${this.name} ataca`);
    let hpEnemigo = enemigo.hp;
    let realDamage = (enemigo.shield - this.attack * multiplicador);
    if (realDamage < 0) {
      enemigo.hp = (hpEnemigo - this.attack * multiplicador);
    }
    else {
      console.log(`${enemigo.name} logró soportar el ataque`);
      enemigo.shield = 0;
    }

  }

  defender() {
    this.shield = this.defense;
    console.log(`${this.name} se ha defendido`);

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
  }

}

class Personaje extends Pokemon {
  constructor(name, hp, attack, defense, type, img) {
    super(name, hp, attack, defense, type, img);
  }

  render(id) {
    let pivot = document.getElementById(id);  //pivot al div base de pokemon

    let plantilla = `<div class="pokemon-imagen">
    <img src="./src/img/${this.image}">
    </div>

    <div class="controles">
      <button class="boton-ataque">${this.attackName}</button>
      <button class="boton-defensa">${this.defenseName}</button>
      <button class="boton-esquivar"> 😵 Esquivar </button>
    </div>`;
   
    let node = document.createElement('div');
    node.innerHTML = plantilla;
    pivot.appendChild(node);
  }

}

/* Al inciio de cada turno, que se manejara por un contador, el pokemon reinicia su defensa a 0*/