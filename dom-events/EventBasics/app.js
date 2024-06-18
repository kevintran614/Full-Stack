/* you can use '#' to select an ID from a html attribute */
const btn = document.querySelector("#v2");

/* events accept a function() as a value */
/* this function() will be called during the event */
btn.onclick = () => {
  console.log("YOU CLICKED BUTTON 2!");
};

function scream() {
  console.log("SCREEEEEEEAAAAM");
}

btn.onmouseenter = () => {
  scream();
};

/* addEventListener */
const btn3 = document.querySelector("#v3");

/*
            1) addEventListener accepts 2 arguments 
            2) arg1 = event, in this case "click" event 
            3) a function callback. you can define the func
               or pass in a pre-defined function like scream()
*/

btn3.addEventListener("click", function () {
  alert("YOU CLICKED BUTTON 3!");
});

function twist() {
  console.log("TWIST");
}

function shout() {
  console.log("SHOUT");
}

const twistAndShoutBtn = document.querySelector("#tas");
twistAndShoutBtn.addEventListener("click", twist);
twistAndShoutBtn.addEventListener("click", shout);
