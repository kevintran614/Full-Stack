const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  /* 
        1) preventDefault can be used to prevent the form action attribute from
           re-directing to it's endpoint
        2) prevents the default behavior of an event from triggering 
        3) is NOT just limited to html form elements 
    */
  e.preventDefault();

  // const usernameInput = document.querySelectorAll('input')[0];
  // const tweetInput = document.querySelectorAll('input')[1];
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
};
