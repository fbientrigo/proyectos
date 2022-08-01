// funcionalidad de los turnos

//Turno inicial
// Inicia de manera random el primer turno (se puede cambiar por leer traits de velocidad)
let turno = (Math.random() > 0.5) ? 'izquierdo' : 'derecho';

//dictar lo que ocurre
const logger = document.getElementById('log');

const log = (text) => {
  logger.textContent = text;
}

const updateHP = () => {
  const player1HP = document.getElementById("vida-izquierdo");
  player1HP.innerText = izquierdo.getLifePoints();
  if (izquierdo.getLifePoints() <= 0) {
    player1HP.innerText = izquierdo.getLifePoints();
    alert("El juego terminó, gana el jugador derecho");
    location.reload();
  }

  const player2HP = document.getElementById("vida-derecho");
  player2HP.innerText = derecho.getLifePoints();
  if (derecho.getLifePoints() <= 0) {
    player2HP.innerText = derecho.getLifePoints();
    alert("El juego terminó, gana el jugador izquierdo");
    location.reload();
  }
};

// Desactivar los botones
const cambiarTurno = (turno) => {
  let nodes;
  let desactivadorDerecho = (turno === "derecho");
  let desactivadorIzquierdo = (turno === "izquierdo");

  nodes = document.getElementById("derecho").getElementsByTagName('*');
  for(let i = 0; i < nodes.length; i++){
    nodes[i].disabled = desactivadorDerecho; }

  nodes = document.getElementById("izquierdo").getElementsByTagName('*');
  for(let i = 0; i < nodes.length; i++){
    nodes[i].disabled = desactivadorIzquierdo; }
}

const loginfo = (lado) => {
  let enemigo = lado == "derecho" ? izquierdo : derecho;
  let player = lado == "izquierdo" ? izquierdo : derecho;

  console.table(player);
  console.table(enemigo);
}

const despuesDeTurno  = (lado) => {
  //luego de cada turno se actualiza el hp y se cambia el turno
  loginfo(lado);
  updateHP();
  cambiarTurno(lado);
}

// define funciones para poder atacar y defender
//lado se refiere a quien lanza el ataque
const funcionAtaque = (lado) => {
  let defender = lado == "derecho" ? izquierdo : derecho;
  let atacante = lado == "izquierdo" ? izquierdo : derecho;

  let damage = Math.ceil(atacante.getAttack() * Math.random());
  //desactiva las protecciones propias
  atacante.deactivateEsquivar();
  atacante.deactivateShield();

  //chequea el escudo
  if (defender.shield) {
    atacante.resistir(damage * 1.4);
    defender.deactivateShield();
    log(`${defender.name} reflejó el ataque con su escudo al 140%`);
    despuesDeTurno(lado);
  } else if (defender.esquivar) {
    log(`${defender.name} ha esquivado el ataque`)
    defender.deactivateEsquivar
    despuesDeTurno(lado);
  } else {
    // aqui puede escribirse un getType, para multiplicar
    defender.resistir(damage);
    despuesDeTurno(lado);

    log(
      `Daño efectuado a ${defender.name}, vida actual: ${defender.hp}`
    );
  }

};

const funcionDefensa = (lado) => {
  let defender = lado == "izquierdo" ? izquierdo : derecho;
  let enemigo = lado == "derecho" ? izquierdo : derecho;
  log(`${defender.name} se ha defendido, tiene un 40% de reflejar el siguiente ataque`);

  if (Math.random() <= 0.4) {
    defender.activateShield();
    log(`el escudo de ${defender.name} se encuentra activado`)
  } else if (Math.random() <= 0.2){
    log(`${defender.name} se tropezó y se hizó daño`);
    defender.resistir(10);
  }
  //desactiva escudo enemigo si no lo ha ataco
  enemigo.deactivateShield();
  enemigo.deactivateEsquivar();
  despuesDeTurno(lado);
}

const funcionEsquivar = (lado) => {
  let defender = lado == "izquierdo" ? izquierdo : derecho;
  let enemigo = lado == "derecho" ? izquierdo : derecho;

  log(`${defender.name} ha activado esquivar, 80% de probabilidad de funcionar`);
  if (Math.random() <= 0.8) {
    defender.activateEsquivar();
  } else {
    log(`${defender.name} se tropezó y se hizó daño`);
    defender.resistir(10);
  }
  //desactiva escudo enemigo si no lo ha ataco
  enemigo.deactivateShield();
  enemigo.deactivateEsquivar();
  despuesDeTurno(lado);
}

const innitGame = () => {

  cambiarTurno(turno);
  console.log("Iniciando juego");
  //selecciona los elementos de cada lado
  // ids: atk-derecho, dnd-derecho, mss-derecho
  let atkDerecho = document.querySelector("#atk-derecho");
  let dndDerecho = document.querySelector("#dnd-derecho");
  let mssDerecho = document.querySelector("#mss-derecho");

  let atkIzquierdo = document.querySelector("#atk-izquierdo");
  let dndIzquierdo = document.querySelector("#dnd-izquierdo");
  let mssIzquierdo = document.querySelector("#mss-izquierdo");

  atkDerecho.addEventListener("click", ()=>funcionAtaque("derecho"));
  dndDerecho.addEventListener("click", ()=>funcionDefensa("derecho"))
  mssDerecho.addEventListener("click", ()=>funcionEsquivar("derecho"));

  atkIzquierdo.addEventListener("click", ()=>funcionAtaque("izquierdo"));
  dndIzquierdo.addEventListener("click", ()=>funcionDefensa("izquierdo"))
  mssIzquierdo.addEventListener("click", ()=>funcionEsquivar("izquierdo"));
}