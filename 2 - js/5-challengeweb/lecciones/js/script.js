document.addEventListener("DOMContentLoaded", obtainData);
const lessonContainer = document.querySelector(".lessons");

function obtainData() {
  const url = "./js/db.json";
  fetch(url)
    .then((res) => res.json())
    .then((result) => loadHTML(result));
}

function loadHTML(data) {
  let lessonCard = ``;

  data.lessons.forEach((lesson) => {
    const { title, image } = lesson;

    const divLessonCard = document.createElement("div");
    divLessonCard.classList.add("lessons__card");
    divLessonCard.innerHTML = `
        <a href="">
            <i class="fa-solid fa-circle-play"></i>
            <img class="lesson__card_preview" src="${image}" alt=""/>
        </a>
        <a href="">
            <h2>${title}</h2>
        </a>
    `;

    lessonContainer.appendChild(divLessonCard);
  });
}
