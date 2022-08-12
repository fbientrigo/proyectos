// Este es un archivo de datos con formato Json

path = "./2-js/"
pathimg = "./src/img/"

/*

  {
    "link": `

    `,
    "img": "",
    "titulo": "",
    "texto": ""
  }

*/

let data = [
  {
    "link": ` 07-19-api_profiles/index.html `,
    "img": "",
    "titulo": "API Perfiles de LarnU",
    "texto": ""
  }
  , {
    "link": ` 07-18-api_weather_js/index.html `,
    "img": "",
    "titulo": "Web con API de Clima",
    "texto": ""
  }
  , {
    "link": ` 07-15-api_js/index.html `,
    "img": "",
    "titulo": "",
    "texto": ""
  }
  , {
    "link": ` 06-challenge_game_js/index.html `,
    "img": "",
    "titulo": "",
    "texto": ""
  }
  , {
    "link": ` 05-challengeweb/inspirate/inspirate.html `,
    "img": "",
    "titulo": "",
    "texto": ""
  }
  , {
    "link": ` 04-dom/index.html `,
    "img": "",
    "titulo": "",
    "texto": ""
  }
  ,
  {
    "link": ` 03-ciclosjs/index.html `,
    "img": "",
    "titulo": "",
    "texto": ""
  }
  ,
  {
    "link": "02-algoritmosjs/index.html",
    "img": "pry-2",
    "titulo": "Algoritmos de JS",
    "texto": "Uso de Algoritmos dentro de Javascript para hacer check de numeros primos"
  },
  {
    "link": "01-introjs/index.html",
    "img": "pry-1",
    "titulo": "DOM y JS",
    "texto": "Proyecto de Modificaciones Basicas al DOM con JS"
  }


];

console.log("Listing the elements");
for (let index in data) {
  let element = data[index];

  element.link = path + element.link;
  element.img = pathimg + element.img + ".png";
  console.log(element.link);
}
