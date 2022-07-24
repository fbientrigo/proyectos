const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contrasenia = document.getElementById("contrasenia");
const form = document.getElementById("form");
const parrafo = document.getElementById("alerta");
const iniciarSesion = document.getElementById("contenedor__boton");
const registrase = document.getElementById("form__button");
let a = document.createElement('a')
let enlaceInicioSesion= document.createTextNode

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let alerta = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  parrafo.innerHTML = "";
  if (nombre.value.length < 6) {
    alerta += `El nombre debe contener más de 6 caracteres <br>`;
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    alerta += `El email no es válido <br>`;
    entrar = true;
  }
  if (contrasenia.value.length < 8) {
    alerta += `La contraseña debe tener al menos 8 caracteres <br>`;
    entrar = true;
  }
  if (entrar) {
    parrafo.innerHTML = alerta;
  } else {
    parrafo.innerHTML = "Registro Exitoso";
  }
  
  registrase.addEventListener('click', (e)=>{
    e.preventDefault
    window.location.href='./menu_principal/index.html'
  })
});


iniciarSesion.addEventListener('click', (e)=>{
  e.preventDefault
  window.location.href='./login/index.html'
})



