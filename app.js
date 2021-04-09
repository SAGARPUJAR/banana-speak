// step 1

// var username = prompt("your name ? ");
// alert("Your name is "+username)

//step 2

var btntranslate = document.querySelector("#clickme");
var userInput = document.querySelector("#userinput"); // get Element Id which user will click
btntranslate.addEventListener("click", function clickEventHandler() {
  // function to execute when user clicked4
  console.log("Clicked");
  console.log("User input is : ", userInput.value);
});

// step 3
