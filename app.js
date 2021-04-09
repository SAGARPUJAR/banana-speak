// step 1

// var username = prompt("your name ? ");
// alert("Your name is "+username)

//step 2

var btntranslate = document.querySelector("#clickme");
var userInput = document.querySelector("#userinput"); // get Element Id which user will click

var iserOutput = document.querySelector("#output");
var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function getTranslate(text) {
  return serverurl + "/" + "text=" + text;
}

btntranslate.addEventListener("click", function clickEventHandler() {
  //   iserOutput.innerText = userInput.value;
  var txtInput = userInput.value;
  fetch(getTranslate(text))
    .then((Response) => Response.json())
    .then((json) => console.log(json));
});

// step 3
