console.log("hello");
// Write a function called writeToDom that takes two inputs - domString and domId. This function should use the domId to grab the output div and write the domString to it for example:
// writeToDom("I go in div#2", "challenge-2");

// writeToDom(domString, domId){
//   <DO STUFF HERE to put "I go in div#2" in the div is id="challenge-2">
// }

function writeToDom(domString, domId){
  var myDiv = document.getElementById(domId);
  myDiv.innerHTML += domString;
}

function domStringMaker(stringToPrint){
    var string =  "<h5>" + stringToPrint[i] + "</h5>";
    writeToDom(stringToPrint);
}

writeToDom("world", "challenge-1");