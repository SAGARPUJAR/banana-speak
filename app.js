// step 1

// var username = prompt("your name ? ");
// alert("Your name is "+username)

//step 2

var btntranslate = document.querySelector("#clickme");
var userInput = document.querySelector("#userinput"); // get Element Id which user will click

var iserOutput = document.querySelector("#output");

btntranslate.addEventListener("click", function clickEventHandler() {
  iserOutput.innerText = userInput.value;
});

// step 3
