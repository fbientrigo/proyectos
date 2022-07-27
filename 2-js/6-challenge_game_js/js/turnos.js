// funcionalidad de los turnos

//Turno inicial
// Inicia de manera random el primer turno (se puede cambiar por leer traits de velocidad)
let turno = (Math.random() > 0.5) ? 'izquierdo' : 'derecho';

//esta función actualiza puntos de vida
// [ ] Reescribir
const updateHP = () => {
  const player1HP = document.getElementById("vida-izquierdo");
  player1HP.innerText = izquierdo.getLifePoints();
  if (izquierdo.getLifePoints() <= 0) {
    alert("El juego terminó, gana el perro");
    location.reload();
  }

  const player2HP = document.getElementById("vida-derecho");
  player2HP.innerText = derecho.getLifePoints();
  if (derecho.getLifePoints() <= 0) {
    alert("El juego terminó, gana el gato");
    location.reload();
  }
};

// Desactivar los botones
const cambiarTurno = (turno) => {
  let nodes;
  let desactivadorDerecho = (turno == "derecho");
  let desactivadorIzquierdo = (turno == "izquierdo");

  nodes = document.getElementById("derecho").getElementsByTagName('*');
  for(let i = 0; i < nodes.length; i++){
    nodes[i].disabled = desactivadorDerecho; }

  nodes = document.getElementById("izquierdo").getElementsByTagName('*');
  for(let i = 0; i < nodes.length; i++){
    nodes[i].disabled = desactivadorIzquierdo; }
}

// define funciones para poder atacar y defender
//lado se refiere a quien lanza el ataque
const funcionAtaque = (lado, damage) => {
  let defender = lado == "derecho" ? izquierdo : derecho;

  defender.resistir(damage);
  updateHP();

  cambiarTurno(lado);

  console.log(
    `Daño efectuado a ${defender.name}, vida actual: ${defender.lifePoints}`
  );
};


const innitGame = () => {
  console.log("Iniciando juego");
  //selecciona los elementos de cada lado
  // ids: atk-derecho, dnd-derecho, mss-derecho
  let atkDerecho = document.querySelector("#atk-derecho");
  let dndDerecho = document.querySelector("#dnd-derecho");
  let mssDerecho = document.querySelector("#mss-derecho");

  let atkIzquierdo = document.querySelector("#atk-izquierdo");
  let dndIzquierdo = document.querySelector("#dnd-izquierdo");
  let mssIzquierdo = document.querySelector("#mss-izquierdo");

  atkDerecho.addEventListener("click", ()=>funcionAtaque("derecho",10));
  atkIzquierdo.addEventListener("click", ()=>funcionAtaque("izquierdo",10));
}