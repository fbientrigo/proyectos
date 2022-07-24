const dateTime = document.querySelector('.container-profile__info__time-date');
const userName = document.querySelector('.container-profile__info__name');
class ChangeObject {
  constructor(name) {
    this.name = name;
  }
  getName() {
    userName.innerHTML += ' ' + this.name;
  }
  clock() {
    const date = new Date();
    dateTime.innerHTML =
      date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }
}
let probando = new ChangeObject('john doe');

setInterval(() => {
  probando.clock();
}, 1000);

probando.getName();
