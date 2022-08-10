// Este es un archivo de datos con formato Json

path = "./2-js/"
pathimg = "./src/img/"

let data = [
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
