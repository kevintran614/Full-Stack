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
