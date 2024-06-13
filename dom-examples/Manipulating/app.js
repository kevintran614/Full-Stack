// ------- 1) getElementById -------
/* 
            1) returns a document javascript object of 
            the html element that can be modified 
            using javascript
            2) obtained using id of html element 
*/
const image = document.getElementById("unicorn");
const heading = document.getElementById("mainheading");

// ------- 2) getElementsByTagName -------
/*
            1) returns an html collection 
            2) the collection stores a list of html elements, each with their own index
            3) this collection is NOT an array, but it is iterable 
*/
const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
  console.log(img.src);

  /* this line of code would change all img elements to be the Silky image */
  //   img.src =
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

// ------- 3) getElementsByClassName -------
/*
            1) gets an element by html class name
            2) returns an html collection that is NOT an array
*/

const squareImages = document.getElementsByClassName("square");

for (let img of squareImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

// ------- 4) querySelector-------
/* will return the FIRST instance of an element/id/class/tag */

// ------- 5) querySelectorAll -------
/* returns an object of ALL instances of an element/id/class/tag */
const links = document.querySelectorAll("p a");

for (let link of links) {
  console.log(link.href);
}

/* how to select a html element with a specific attribute */
const checkbox = document.querySelector('input[type="checkbox"]');

/* how to select html elements with a specific css class name */
const doneTodos = document.querySelectorAll(".done");

// ------- 1) innerText -------
/* 
      1) returns the actual value nested between an html element 
      2) tldr; returns only the text of an elements
*/

const p = document.querySelector("p").innerText;
console.log(p);

/*
      The Silkie (sometimes spelled Silky) is a breed of chicken named for \
      its atypically fluffy plumage, which is said to feel like silk and satin. 
*/

// ------- 2) innerHTML -------
/* 
      1) returns the actual value nested between an html element, similar to innerText,
      BUT also includes all of the nested html elements/tags as well
      2) can also be used to ADD additional html elements/tags
      3) tldr; returns THE ENTIRE HTML CODE
*/

const innerHtml = document.querySelector("p").innerHTML;
console.log(innerHtml);

/*
      'The <b>Silkie</b> (sometimes spelled <b>Silky</b>) is a <a href="/wiki/List_of_chicken_breeds" 
      title="List of chicken breeds">breed</a> of <a href="/wiki/Chicken" title="Chicken">chicken</a> named for\n        
*/

document.querySelector("h1").innerHTML = "<i>asdada<i>";

// ------- Attributes -------
const firstLink = document.querySelector("a");
/* we can use getAttribute to access the attribute of an element if it exists */
console.log(firstLink.getAttribute("href"));

/* we can use setAttribute to modify the value of an attribute of an element */
firstLink.setAttribute("href", "http://www.google.com");

// ------- Changing Styles -------
const h1 = document.querySelector("h1");

/* you can use "style" to edit the css of an element; this creates inline css styles within the html code */
h1.style.color = "blue";
h1.style.fontSize = "3em";

// ------- Class List -------
const h2 = document.querySelector("h2");

/* you can you classList to add/remove defined css classes */
h2.classList.add("purple");
h2.classList.add("border");
h2.classList.remove("purple");

/* you can also toggle css styles */
h2.classList.toggle("purple");

// ------- Traversing parent/child/sibling elements -------
const firstBold = document.querySelector("b");
console.log(firstBold.parentElement);

// ------- Append and Append Child -------
/* 1) Append */
const newImg = document.createElement("img"); // creates an img element

newImg.src = // update new element with values
  "data:image/jpeg;base64,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";

document.body.appendChild(newImg); // append new element

newImg.classList.add("square"); // apply css to the new element

/* 2) Append Child */
const paragrpah = document.querySelector("p");
paragrpah.append(
  "Hi future me, this is a message from past me. I hope your summer has been treating you well! :)"
);
