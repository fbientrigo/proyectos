dataArray = [
  {
    "name": "batch 1",
    "alias": "Batch 1",
    "startDate": "13 de Junio",
    "endData": "13 de Octubre",
    "people": [
      {
        "name": "José Ramirez",
        "image": "asset/user.png",
        "alias": "josseed",
        "rol": "Profesor",
        "hobbies": "Me gusta jugar con mis perros ...",
        "skills": "JS, Python, Java, Dart"
      }
    ]
  },
  {
    "name": "batch 1",
    "alias": "Batch 1",
    "startDate": "13 de Junio",
    "endData": "13 de Octubre",
    "people": [
      {
        "name": "José",
        "image": "asset/user.png",
        "alias": "josseed",
        "rol": "Profesor",
        "hobbies": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas quisquam debitis corrupti eius labore soluta sit et earum suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas quisquam debitis corrupti eius labore soluta sit et earum suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas quisquam debitis corrupti eius labore soluta sit et earum suscipit.",
        "skills": "JS, Python, Java, Dart"
      }
    ]
  },
  {
    "name": "batch 1",
    "alias": "Batch 1",
    "startDate": "13 de Junio",
    "endData": "13 de Octubre",
    "people": [
      {
        "name": "luis",
        "image": "asset/user.png",
        "alias": "luisrov",
        "rol": "Estudiante",
        "hobbies": "Me gusta jugar con mis gatos ...",
        "skills": "Ride, Scala, Java, Dart"
      }
    ]
  },
  {
    "name": "batch 1",
    "alias": "Batch 1",
    "startDate": "13 de Junio",
    "endData": "13 de Octubre",
    "people": [
      {
        "name": "luis",
        "image": "asset/user.png",
        "alias": "luisrov",
        "rol": "Estudiante",
        "hobbies": "Me gusta jugar con mis gatos ...",
        "skills": "Ride, Scala, Java, Dart"
      }
    ]
  },
  {
    "name": "batch 1",
    "alias": "Batch 1",
    "startDate": "13 de Junio",
    "endData": "13 de Octubre",
    "people": [
      {
        "name": "luis",
        "image": "asset/user.png",
        "alias": "luisrov",
        "rol": "Estudiante",
        "hobbies": "Me gusta jugar con mis gatos ...",
        "skills": "Ride, Scala, Java, Dart"
      }
    ]
  },
  {
    "name": "batch 1",
    "alias": "Batch 1",
    "startDate": "13 de Junio",
    "endData": "13 de Octubre",
    "people": [
      {
        "name": "luis",
        "image": "asset/user.png",
        "alias": "luisrov",
        "rol": "Estudiante",
        "hobbies": "Me gusta jugar con mis gatos ...",
        "skills": "Ride, Scala, Java, Dart"
      }
    ]
  }
];


window.onload = function () {
  let container = document.getElementById("mainContainer");

  for (let i = 0; i < dataArray.length; i++) {
    container = card(dataArray, i);
  }

  let cardn = document.querySelectorAll(".card");

  cardn.forEach(cards=>{
    cards.addEventListener("click",function(e){
        console.log(cards.innerText);
      });
  });
}


function card(dataArray, i) {
  let container = document.getElementById("mainContainer");

  //card part 1
  let card = document.createElement("div");
  let carUserdata = document.createElement("div");
  let img = document.createElement("img");
  let data = document.createElement("div");
  let nametag = document.createElement("h2");
  let roltag = document.createElement("span");

  let name = document.createTextNode(dataArray[i].people[0].name);
  let rol = document.createTextNode(dataArray[i].people[0].rol);
  let imgurl = document.createTextNode(dataArray[i].people[0].image);
  
  roltag.appendChild(rol);
  nametag.appendChild(name);
  data.append(nametag, roltag);
  img.appendChild(imgurl);
  carUserdata.append(img, data);

  carUserdata.classList.toggle("card__userdata"); 
  data.classList.toggle("data"); 
  card.classList.toggle("card"); 
  img.classList.add("card__userdata");

  //other settings
  img.src = dataArray[i].people[0].image;

  //card part 2
  let cardHobbie = document.createElement("div");
  let hobbieTitletag = document.createElement("h3");
  let hobbieDetailtag = document.createElement("p");

  let hobbieTitle = document.createTextNode("Hobbies");
  let hobbieDetail = document.createTextNode(dataArray[i].people[0].hobbies);

  hobbieTitletag.appendChild(hobbieTitle);
  hobbieDetailtag.appendChild(hobbieDetail);
  cardHobbie.append(hobbieTitletag, hobbieDetailtag);

  cardHobbie.classList.toggle("card__hobbie"); 
  hobbieDetailtag.classList.toggle("ellipsis");

  //card part3
  let cardSkills = document.createElement("div");
  let skillTitletag = document.createElement("span");
  let skillDetailtag = document.createElement("p");

  let skillTitle = document.createTextNode("Skills:");
  let skillDetail = document.createTextNode(dataArray[i].people[0].skills);
  
  skillTitletag.appendChild(skillTitle);
  skillDetailtag.appendChild(skillDetail);
  cardSkills.append(skillTitletag, skillDetailtag);

  cardSkills.classList.toggle("card__skills"); 
  skillDetailtag.classList.toggle("ellipsis");
  
  card.append(carUserdata,cardHobbie, cardSkills);
  container.append(card);

  return container;
}