const div = document.querySelector('.card_container');
const url = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';

function getResources() {
  return new Promise(function (resolve, reject) {
    axios.get(url)
      .then(function (response) {
        resolve(response.data.communityCategories)
      })
      .catch(function (error) {
        reject(error)
      });
  });
}

async function challenge() {

  const categories = await getResources()
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

challenge()