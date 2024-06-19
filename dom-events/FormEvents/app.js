const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the default behavior of the event

  const catName = input.value; // take user input
  const newLI = document.createElement("LI"); // create a new list element

  newLI.innerText = catName; // set the value of the new list element
  list.appendChild(newLI); // add the new list element to our html ul element

  input.value = ""; // will set the input to be an empty string after submitting
});
