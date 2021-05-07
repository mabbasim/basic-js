function factorial(n){
    var fact = 1;
    for(var i = 1; i <= n; i++){
         fact = fact * i;
 
    }
       return fact;
}

var myFact= factorial(3);
console.log(myFact);

 //factorial in a recursive way........

 function factorialRecursive(num){
     if(num == 1){
         return 1;
     }
     else{
         return num * factorialRecursive(num - 1);
     }
 }
 var result = factorialRecursive(5);
 console.log("result : ", result);