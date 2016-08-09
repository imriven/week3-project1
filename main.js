
/*
=======================================================
** Week 3 - Project 1 **
*** Function Exercises ***
Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.
In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.
For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.

function divideByTwo(number) {
   return number / 2;
}

console.log(divideByTwo(6));


// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.

var name1 = "Josh";
var name2 = "Jane";
function greeting(name1, name2) {
	console.log("hello " + name1);
  console.log("hello " + name2);
}
greeting(name1, name2);


// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.

function cashews(price) {
  return "$" + (price * 6);
}

console.log(cashews(4));

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

var team one =
var team two =
function twoTeams( teammates.length / [2] ); {
return twoTeams(team one, team two)

}


// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.


function quarter(number) {
 return number * .25

}

console.log(quarter(125));

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function area(l,w) {
	return l * w;
  }

console.log(area(2, 4));

function perimeter(l,w) {
	return 2 * (l+w);
}

console.log(perimeter(2, 5));

// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings (hours) {

  if (hours > 8){
    console.log("You're getting plenty of rest!");
  } else {
      console.log("You need more sleep!!!!");
  }

}

sleepings(7);
sleepings(9);

// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
//    Note: Strings can be treated as arrays too.

var threeDigits = prompt("Please enter a three digit number.")
function addNums(num){
	var total = 0;
	for (i = 0; i < threeDigits.length; i++)	{
		total += parseInt(threeDigits[i]);
	}
	return total;
}

console.log(addNums(threeDigits));


// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.

function moneyCounter (quarters, dimes, nickels, pennies) {
	var total = 0;
	total += quarters * .25;
	total += dimes * .1;
	total += nickels * .05;
	total += pennies *.01;
	return total
}
console.log("$" + moneyCounter(4, 4, 5, 54).toFixed(2));


// 10. Develop a function that determines a person's age by prompting them for their birth year.



function yearBorn  (){
	var age_prompt = parseInt(prompt("What year were you born?"));
	var d = new Date();
	var n = d.getFullYear();
	var age = n - age_prompt;
	console.log("You are " + age);
}

yearBorn();

// ADVANCED TRACK
// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.

// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.
