console.log(7);
var price = 90;
console.log(typeof price);
var date = new Date();
console.log(date);
var a = [1,4,5,7,3];
console.log(a);
// arr = arr.unshift(2);
// console.log(arr);
a.push(2);
a.push(5);
a.pop();

console.log(a);
a.unshift(55);
a.shift();

console.log(a);

var num = 10;
while(num < 15){
    console.log(num);
    num++;

}
var number = [1,2,3,4,5];
var n = number.slice(-1,3);
console.log(n);