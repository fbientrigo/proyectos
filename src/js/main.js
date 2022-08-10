// data es un arreglo del archivo data.js el cual es incorporado en el codigo html previo a este
console.log(data);

// Tarjetas para Links Externos
// permite crear html
class LinkTarjeta {
  constructor(link, img, titulo, texto) {
    this.link = link;
    this.img = img;
    this.titulo = titulo;
    this.texto = texto;
  };

  generarHtml() {
    // Genera codigo HTML dentro de un div con clase tarjeta y un id llamado como this.titulo
    return `<a href="${this.link}">
      <div class="carta">
      <img class="imagen_carta" src="${this.img}">
      <div class="texto_carta">
        <h3>${this.titulo}</h3>
        <p>${this.texto}</p>
      </div>
      </div>
      </a>`;
  };

};

// camtodad de datos
largo_data = data.length;

// Loop para crear letias tarjetas a partir de Data
let div_padre = document.getElementById("div_padre");
for (i = 0; i <= largo_data; i++) {
  let child = document.createElement("div");
  //toma un dato del arreglo data y extrae la informacion para crear el html de una carta
  let dato = data[i];
  let tarjeta = new LinkTarjeta(dato.link, dato.img, dato.titulo, dato.texto);
  child.innerHTML = tarjeta.generarHtml();

  div_padre.appendChild(child);
};