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
    writeToDom(string, domId);
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
 howOldWillIBe(2000, 2010);

// Challenge #2: Simple Maths Test___________________________________________________
// Create a function which checks a number for three different properties.

// Is the number prime? 2, Is the number even?
// Is the number a multiple of 10? Each should return either true or false, which should be given as an array.
// Examples:

var challenge2=7;  // ==> [true,  false, false] 
var challenge2=(10); // ==> [false, true,  true]

var challenge2Answer = [];

function simpleMath (value){
  primeNumber(value);
  evenNumber(value);
  multipleOfTen(value);
  writeToDom(challenge2Answer, "challenge-2");
}

// check if number is prime
function primeNumber (num){
  // for(var i=2; i<num; i++){
    if(num%2 && num%3){
      answer3 = true;
      challenge2Answer.push(answer3);
      console.log(answer3);
    } else{
      challenge2Answer.push(false);
    }
  }

//check if number is even
function evenNumber (even){
    if(even%2===0){
      var answer1 = true;
      challenge2Answer.push(answer1);
    }else {
      challenge2Answer.push(false);
    }
  }

//check if number a multiple of 10
function multipleOfTen(nums){
  if(nums%10===0){
    var answer2 = true;
    challenge2Answer.push(answer2);
  }else {
      challenge2Answer.push(false);
    }
}

simpleMath (challenge2);

// Prime numbers are numbers that are bigger than one and cannot be divided evenly by any other number except 1 and itself.


// Challenge #3: Unique Sum_____________________________________________________
// // Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// // For example:

// var challenge3=[ 1, 2, 3]; //6
var challenge3=[ 1, 3, 8, 1, 8]; //12
// var challenge3=[ -1, -1, 5, 2, -7];//-1

// to remove duplicate numbers
function uniqueArray(array){
  var answer= array.filter(function(elem, index, array) {
    return array.indexOf(elem) === index;
  });
  sumArray(answer);
}

// to sum numbers in array
function sumArray(arrayToBeSummed) {
  var summed = arrayToBeSummed.reduce(function(total, elem){
   return total+elem;
  });
  writeToDom(summed,"challenge-3");
}

uniqueArray(challenge3);