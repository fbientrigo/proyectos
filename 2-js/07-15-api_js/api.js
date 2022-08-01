const url = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';
const div = document.querySelector('.card_container');

function llamarApi() {
  //posee una promesa
  return new Promise(function (resolve, reject) {
    //dentro la funcion asincrona que se ha de esperar
    // donde resolve y reject son reemplazados por fnciones animas

    // axios es tambien una promesa, de donde extraemos la respuesta o error
    axios.get(url)
      .then(function (response) {
        resolve(response.data.communityCategories)
      })
      .catch(function (error) {
        reject(error)
      });
  });
}

async function main() {
  // se usa await para esperar la promesa
  const categories = await llamarApi()
  categories.forEach((data) => {
    div.innerHTML += `
    <div class="card">
      <div class="card_cover">
        <img class="card_cover--background" src="${data.background || 'https://storage.googleapis.com/bucket-larnu/media/business/153/images/BO64E73I.png'}" alt="${data.name}">
        <img class="card_cover--logo"  src="${data.icon}" alt="${data.name}">
      </div>
      <div class="card_content">
        <h3 class="card_title"> ${ data.bootcamp == true ? "🌱" : "" } ${data.name}</h3>
        <div class="card_progress">
          <p>Progreso</p>
          <span class="quizzes">${data.quizzesDone}</span>
          <span>${data.totalQuizzes}</span>
        </div>
        <span>👨‍💻  ${data.users}</span>
      </div> 
    </div>
    `;
  });
}

main()