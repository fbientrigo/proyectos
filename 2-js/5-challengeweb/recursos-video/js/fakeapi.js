class Course {
  constructor (date, categoria, title, video){
    this.date = date;
    this.categoria = categoria;
    this.title = title;
    this.video = video;
  }
}

let lesson1 = new Course('29/06/2022','js', 'Explicación proyecto final HTML & CSS', `<iframe width="100%" height="315" src="https://www.youtube.com/embed/t2QcDbVM8E8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
let lesson2 = new Course('29/06/2022','html', 'Repaso git y resumen HTML & CSS', `<iframe width="100%" height="315" src="https://www.youtube.com/embed/DcN7MpJpbgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
let lesson3 = new Course('28/06/2022','css', 'Navigation Bar HTML', `<iframe width="100%" height="315" src="https://www.youtube.com/embed/hBB0ZyEqJk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
let lesson4 = new Course('28/06/2022','css', 'Preprocesador CSS', `<iframe width="100%" height="315" src="https://www.youtube.com/embed/A60uWXv2Q-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
let lesson5 = new Course('27/06/2022','html', 'Live-code Session', `<iframe width="100%" height="315" src="https://www.youtube.com/embed/XZ37KcVzm7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
let lesson6 = new Course('27/06/2022','js', 'Introducción a git, github & gitflow', `<iframe width="100%" height="315" src="https://www.youtube.com/embed/-iIKo9XmnVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

console.log( "objectts:", lesson1, lesson2, lesson3, lesson4, lesson5, lesson6);
console.log("lesson 1. date: ", lesson1.date);

let course = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6];
console.log(`cour: ${course}`);
console.log('cour.lesson1.date: ', course[0].date);

let cardsContainer = document.querySelector(".container__cards");
let selectItem = document.querySelector(".select__item");

selectItem.addEventListener("change", (e) => {
  let selected = e.target.value;
  console.log(selected);
  cardsContainer.innerHTML = "";
  for (i = 0; i < course.length; i++) {
    console.log(course[i].categoria);

    if (selected == course[i].categoria) {
      cardsContainer.innerHTML += `<div class="card__item" id="${course[i].date}">
    ${course[i].video}
    <div class="card__text-container">
    <div><h2>${course[i].title}</h2>
    <span>${course[i].date}</span></div>
    </div>
    </div>
    `;
    }
    if (selected == "all") {
      cardsContainer.innerHTML += `<div class="card__item" id="${course[i].date}">
    ${course[i].video}
    <div class="card__text-container">
    <div><h2>${course[i].title}</h2>
    <span>${course[i].date}</span></div>
    </div>
    </div>
    `;
    }
  }
});

for (i = 0; i < course.length; i++) {
  cardsContainer.innerHTML += `<div class="card__item" id="${course[i].date}">
  ${course[i].video}
  <div class="card__text-container">
  <div><h2>${course[i].title}</h2>
  <span>${course[i].date}</span></div>
  </div>
  </div>
  `;
}

/* Search  Resources */
function searchResource() {
  const input = document.getElementById('filter').value.toUpperCase();
  const cardContainer = document.getElementById('container__cards');
  console.log(cardContainer);

  const cards = cardContainer.getElementsByClassName('card__item');
  console.log(cards);

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].querySelector('.card__text-container h2');
    console.log(title);

    if (title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = '';
    } else {
      cards[i].style.display = 'none';
    }
  }
}
