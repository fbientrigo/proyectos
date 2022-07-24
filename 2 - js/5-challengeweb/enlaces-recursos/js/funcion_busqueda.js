
const d = document;
function searchFilter(input, selector){
  d.addEventListener("keyup", e =>{
    if(e.target.matches(input)){

      // add press key ESC is clear the searcher
      if (e.key ==="Escape")e.target.value ="";

      d.querySelectorAll(selector).forEach(elemento => 
        elemento.textContent.toLowerCase().includes(e.target.value)
        ? elemento.classList.remove("filter")
        : elemento.classList.add("filter")
      )
    }
  })
};

searchFilter(".recursos--filter", ".resources_card")

/* function of the counters & selectors*/

// first card de buttons 
const buttonCount1 = document.getElementById("buttonIncrese1");
const count1 = document.getElementById("countPositive1");
const buttonCount2 = document.getElementById("buttonNegative1");
const count2 = document.getElementById("countNegative1");

// second card of buttons
const buttonCount3 = document.getElementById("buttonIncrese2");
const count3 = document.getElementById("countPositive2");
const buttonCount4 = document.getElementById("buttonNegative2");
const count4 = document.getElementById("countNegative2");

// third card of buttons
const buttonCount5 = document.getElementById("buttonIncrese3");
const count5 = document.getElementById("countPositive3");
const buttonCount6 = document.getElementById("buttonNegative3");
const count6 = document.getElementById("countNegative3");

//fuction
function counterincrese (button , counter){
  button.addEventListener("click", () => {
    num = 0;
    num++;
    counter.innerHTML = num;
  })
}

// call function of the buttons
counterincrese (buttonCount1, count1);
counterincrese (buttonCount2, count2);

counterincrese (buttonCount3 , count3);
counterincrese (buttonCount4, count4);

counterincrese (buttonCount5 , count5);
counterincrese (buttonCount6, count6);


