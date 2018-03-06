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
    var string =  "<h5>" + stringToPrint + "</h5>";
    writeToDom(stringToPrint);
}

writeToDom("world", "challenge-1");

// Challenge #1: How old will I be in 2099?___________________________________________
// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// Examples:

// challenge1(2000, 2010); // You are 10 years old.
// challenge1(2000, 1995); // You will be born in 5 years.
// challenge1(2000, 2000); // You were born this very year!

function howOldWillIBe(yearofBirth, yearInFutureOrPast){
  var birth = parseInt(yearofBirth);
  var year = parseInt(yearInFutureOrPast);
  var answer=0;
  if(year>birth){
    answer=year-birth;
    writeToDom("You are " +answer+ " year(s) old.", "challenge-1");
  } else if (year<birth){
    answer=birth-year;
    writeToDom("You will be born in " +answer+ " year(s).", "challenge-1");
  } else if(year-birth===0){
    writeToDom("You were born this very year!", "challenge-1");
  }                        
}
 howOldWillIBe(2000, 2000);