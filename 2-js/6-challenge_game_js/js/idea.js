class Player {
  constructor(name, kind, lifePoints, attack1, attack2, defense1, defense2) {
    this.name = name; //nombre
    this.kind = kind; //tipo
    this.lifePoints = lifePoints; //contador
    this.attack1 = attack1;
    this.attack2 = attack2;
    this.defense1 = defense1;
    this.defense2 = defense2;
  }

  getName() {
    return this.name;
  }

  getKind() {
    return this.kind;
  }

  getAttack(attack) {
    return attack;
  }

  getDefense(defense) {
    return defense;
  }

  receiveDamage(damage) {
    this.lifePoints -= damage;
  }

  receiveDefense(defensePoints) {
    if (this.lifePoints + defensePoints < 101) {
      this.lifePoints += defensePoints;
    } else {
      this.lifePoints = 100;
    }
  }

  getLifePoints() {
    return this.lifePoints;
  }
}

const catAbilities = {
  attacks: {
    attack1: {
      name: "Arañar",
      damage: 12,
    },
    attack2: {
      name: "Morder",
      damage: 8,
    },
  },
  defense: {
    defense1: {
      name: "Esconderse",
      defensePoints: 3,
    },
    defense2: {
      name: "Saltar",
      defensePoints: 1,
    },
  },
};

const dogAbilities = {
  attacks: {
    attack1: {
      name: "Aplastar",
      damage: 8,
    },
    attack2: {
      name: "Morder",
      damage: 12,
    },
  },
  defense: {
    defense1: {
      name: "Ladrar",
      defensePoints: 1,
    },
    defense2: {
      name: "Correr",
      defensePoints: 3,
    },
  },
};

//los valores de ataque y defensa se sobreescriben con los
//objetos catAbilities y dogAbilities
let cat = new Player("Juanito", "cat", 100, 12, 3, 10, 5);
let dog = new Player("Pedrito", "dog", 100, 15, 5, 12, 5);

//ataques y defensas gato al inicio
let catAttack1 = null;
let catAttack2 = null;
let catDefense1 = null;
let catDefense2 = null;

//ataques y defensas perro al inicio
let dogAttack1 = null;
let dogAttack2 = null;
let dogDefense1 = null;
let dogDefense2 = null;

//esta función actualiza puntos de vida
const updateHP = () => {
  const player1HP = document.getElementById("first-player-hp");
  player1HP.innerText = cat.getLifePoints();
  if (cat.getLifePoints() <= 0) {
    alert("El juego terminó, gana el perro");
    location.reload();
  }

  const player2HP = document.getElementById("second-player-hp");
  player2HP.innerText = dog.getLifePoints();
  if (dog.getLifePoints() <= 0) {
    alert("El juego terminó, gana el gato");
    location.reload();
  }
};

//esta función determina quien defiende y que daño recibe
const attack = (defenderKind, attackDamage) => {
  //operador ternario, si se cumple condicion inicial (defender = 'cat', cat)
  //de lo contrario, dog
  let defender = defenderKind == "cat" ? cat : dog;

  if (defender.kind == "cat") {
    document.getElementById("first-player-container").className += " shake";
    setTimeout(() => {
      document
        .getElementById("first-player-container")
        .classList.remove("shake");
    }, 500);
  } else {
    document.getElementById("second-player-container").className += " shake";
    setTimeout(() => {
      document
        .getElementById("second-player-container")
        .classList.remove("shake");
    }, 500);
  }

  defender.receiveDamage(attackDamage);
  updateHP();

  toggleButtons(defenderKind);

  console.log(
    `Daño efectuado a ${defender.name}, vida actual: ${defender.lifePoints}`
  );
};

const defend = (defenderKind, defensePoints) => {
  let defender = defenderKind == "cat" ? cat : dog;
  let attacker = defenderKind == "cat" ? dog : cat;

  defender.receiveDefense(Number(defensePoints));
  updateHP();

  toggleButtons(attacker.kind);

  console.log(
    `Vida restaurada a ${defender.name}, vida actual: ${defender.lifePoints}`
  );
};

const toggleButtons = (defender) => {
  dogAttack1.disabled = defender == "cat";
  dogAttack2.disabled = defender == "cat";
  dogDefense1.disabled = defender == "cat";
  dogDefense2.disabled = defender == "cat";

  catAttack1.disabled = defender == "dog";
  catAttack2.disabled = defender == "dog";
  catDefense1.disabled = defender == "dog";
  catDefense2.disabled = defender == "dog";
};

const initCombat = () => {
  //
  const player1Name = document.getElementById("first-player-name");
  player1Name.innerText = cat.getName();

  updateHP();

  catAttack1.value = catAbilities.attacks.attack1.damage;
  catAttack1.innerText = catAbilities.attacks.attack1.name;

  catAttack2.value = catAbilities.attacks.attack2.damage;
  catAttack2.innerText = catAbilities.attacks.attack2.name;

  catDefense1.value = catAbilities.defense.defense1.defensePoints;
  catDefense1.innerText = catAbilities.defense.defense1.name;

  catDefense2.value = catAbilities.defense.defense2.defensePoints;
  catDefense2.innerText = catAbilities.defense.defense2.name;

  const player2Name = document.getElementById("second-player-name");
  player2Name.innerText = dog.getName();

  dogAttack1.value = dogAbilities.attacks.attack1.damage;
  dogAttack1.innerText = dogAbilities.attacks.attack1.name;

  dogAttack2.value = dogAbilities.attacks.attack2.damage;
  dogAttack2.innerText = dogAbilities.attacks.attack2.name;

  dogDefense1.value = dogAbilities.defense.defense1.defensePoints;
  dogDefense1.innerText = dogAbilities.defense.defense1.name;

  dogDefense2.value = dogAbilities.defense.defense2.defensePoints;
  dogDefense2.innerText = dogAbilities.defense.defense2.name;
};

window.onload = function () {
  catAttack1 = document.getElementById("player1-attack1");
  catAttack2 = document.getElementById("player1-attack2");
  catDefense1 = document.getElementById("player1-defense1");
  catDefense2 = document.getElementById("player1-defense2");

  //faltan los del perro
  dogAttack1 = document.getElementById("player2-attack1");
  dogAttack2 = document.getElementById("player2-attack2");
  dogDefense1 = document.getElementById("player2-defense1");
  dogDefense2 = document.getElementById("player2-defense2");

  initCombat();
  console.log(catAbilities);
  console.log(dogAbilities);
};
