// 12inch = 1feet
// var inch = 60;
// var feet = inch/12;
// console.log(feet);


// function inchToFeet(inch){
//     var feet = inch/12;
//     return feet;
// }
// var FeetResult = inchToFeet(60);
// console.log(FeetResult);
// var FeetResult2 = inchToFeet(72);
// console.log(FeetResult2);


//Leap Year
// var year = 2300;
// if(year%4 == 0){
//     if(year%100 == 0){
//         if(year%400 == 0){
//             console.log("Leap Year");
//         }
//         else{
//             console.log("Not Leap Year");
//         }
//     }
//     else{
//         console.log("Leap Year");
//     }
// }
// else{
//     console.log("Not Leap Year");
// }

//Factorial
// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5

// var fact = 1;
// for(var i=1; i<=5; i++){
//     fact = fact*i;
//     console.log(i, fact);
// }

// function factorial(num){
//     var fact = 1;
//     for(var i=1; i<=num; i++){
//         fact = fact*i;
//     }
//     return fact;
// }
// var factorialResult = factorial(5);
// console.log(factorialResult);

//while

// var i = 1;
// var fact = 1;
// while(i<=5){
//     fact = fact*i;
//     console.log(i, fact);   
//     i++;
    
// }

//Recursive Function
// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

