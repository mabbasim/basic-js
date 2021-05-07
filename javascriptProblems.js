/// swap
//process-1
var a = 5;
var b = 8;
console.log("before swap: a=", a, " b=", b);
var temp = a;
a = b;
b = temp;
console.log("after swap: a=", a, " b=", b);

//process-2
var x = 3;
var y = 4;
console.log("before swap: x=", x, " y=", y);
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x=", x, " y=", y);

//process-3
var p = 10;
var q = 20;
console.log("before swap: p=", p, " q=", q);

[p,q] = [q,p];
console.log("after swap: p=", p, " q=", q);

///random number round

for(var i = 1 ; i<= 10 ; i++){
    var randomNumber = Math.random() * 5;
    var roundedRandomNumber = Math.round(randomNumber);
    console.log(randomNumber, " = ", roundedRandomNumber);
}

//Write a code to generate a random number between 100 to 200:
var randomNo = 100 + Math.random() * 100;
var output = Math.round(randomNo);
console.log(output);

/// find maximum number
//process-1
var business = 430;
var minister = 600;
var sochib = 330;
if(business > minister){
    if(business > sochib){
        console.log("Business is bigger");
    }
    else{
        console.log("Sochib is bigger");

    }
}
else{
    if(minister > sochib){
        console.log("Minister is bigger");
    }
    else{
        console.log("Sochib is bigger");

    }
}

// process-2

var max = Math.max(sochib, minister, business);
console.log(max);

//max number from an array
var marks = [45, 81, 61, 98, 23];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Highest value is : ", max);

//sum of all numbers in array
var values = [45, 81, 61, 98, 23];
var sum = 0;
for(var i = 0; i < values.length; i++){
    var sum = sum + values[i]; 
}
console.log("Sum of all numbers in array is: ", sum);

//sum of all numbers in array using function
function numbers(num){
    var sum = 0;
for(var i = 0; i < values.length; i++){
    var sum = sum + values[i]; 
   
}
 return sum;
}
var rollNumbers = [45, 81, 61, 98, 23];
var total = numbers(rollNumbers);
console.log("Sum of all numbers in array is: ", total);

//loop using ary
/**Create an array named friends. Inside the array, put the names of your friends. Each name will be inside two single quotes or two double quotes. Also separate each element by a comma. After that, run a for loop and declare a variable before the loop named allNames and put the initial value as an empty string. Inside the for loop, get each element from the array and add that element to allNames variable by using a plus sign: */

var friends = ["Safa", "Anjum", "Lima", "Foysol"];
var allNames = "";
for(var i = 0; i < friends.length; i++){
    allNames = allNames + friends[i];
}

console.log("New names: ", allNames);

//remove duplicate items from an array
var myNumbers = [1, 4, 2, 7, 99, 2, 7, 8, 4, 3, 6];
var uniqueMyNumbers = [];
for(var i = 0; i < myNumbers.length; i++){
    var element = myNumbers[i];
    var index = uniqueMyNumbers.indexOf(element);
    if(index == -1){
        uniqueMyNumbers.push(element);
    }

}
console.log(uniqueMyNumbers);


//// word count

var speech = "My       name is Marwa Abbasi. I am a now learning javascript.";
var count = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " " ){
        count++;
    }
}
count++;
console.log(count);

//extra problem solving...
//Count how many times you have the letter a in a string.

var sentence = "I am hardworking. I am serious. I am sure I will do it";
var aCount = 0;
for(var i = 0; i <sentence.length; i++){
    var letter = sentence[i];
    if(letter == "a"){
        aCount++;
    }
}
console.log("Total number of a: ", aCount);

///reverse a string....
//process-1
var newSentence = "I am hardworking. I am serious. I am sure I will do it.";
var newString = "";
for(var i = newSentence.length - 1; i >= 0;  i--){
    var char = newSentence[i];
    newString = newString + char;
}
console.log(newString);
//process-2
function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
    var char = str[i].
    reverse = char + reverse;
    }
    return reverse;
   
}
var statement = "Hello Alien. I want to talk to you.";

var forAlien = reverseString(statement);
console.log(forAlien);
//proces-3
var myStatement = "Annyeong Park. How are you?";
var splitString = myStatement.split("");
var splitStringReverse = splitString.reverse();
var joinSplitStringReverse = splitStringReverse.join("");
// console.log(myStatement.split("").reverse().join(""));
console.log(joinSplitStringReverse);



//// Animal count....

function animalCalculator(depth){
    var animal = 0;
    if(depth <= 10){
        animal = depth * 50;
    }
    else if(depth <= 20){
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        animal = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}

var countAnimal = animalCalculator(22);
console.log(countAnimal);