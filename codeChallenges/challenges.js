//Mild challenge
var number = 42;
if (number % 2 == 0) {
    console.log("even")
}
else {
    console.log("odd")
}

//Medium challenge
var goodDrivingRecord = true;
var age = 24;

if (goodDrivingRecord === true && age > 25) {
    console.log("You get a discount!");
}
else if (goodDrivingRecord === true || age > 25) {
    console.log("You pay full price!");
}
else if (age < 25 && goodDrivingRecord === false) {
    console.log("You need to have someone else sign for the rental.");
}

//Spicy challenge 
var number = 2

if ((number % 5 !== 0 && number % 3 !== 0) || number === 0) {
    console.log(number);
}
else if (number % 5 == 0 && number % 3 == 0) {
    console.log("FizzBuzz");
}
else if (number % 5 == 0) {
    console.log("Buzz");
}
else if (number % 3 == 0) {
    console.log("Fizz");
}
