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
