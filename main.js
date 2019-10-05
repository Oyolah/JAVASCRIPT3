//Q1
function foo() {
    console.log( "Hello, I am bar!" );
 }
 function bar() {
    foo();
 }
 
 bar(foo);
 
 
 //Q2
 function divisibleByThree() {
    console.log("sayThree");
 }
 function divisibleByFive() {
    console.log("sayFive");
 }
 function myFunction(startIndex, endIndex, divisibleByThree, divisibleByFive) {
    const myArray = [];
    
    for(let i = startIndex; i <= endIndex; i++) {
        myArray.push(i);
    }
    myArray.forEach((divisible) => {
        if (divisible % 3 === 0) {
          divisibleByThree();
        }
        else if (divisible % 5 === 0) {
          divisibleByFive();
        }
    });
 }
 
 myFunction( 10, 16, divisibleByThree, divisibleByFive );
 
 
 //Q3.1 For loop.
 function myLoop( string ){
    var myString = "";
    for( var i=0 ;i<10 ; i++ ){
       myString[i] += string;
 };
    return myString;
 }
 console.log(myLoop( "Hello World ", 10 ));
 
 // 3.2 While loop.
 function myLoop2( string, number ){
    var myString2="";
    while (number > 0){
       myString2 += string;
    number++
 };
    return myString2;
 }
 console.log(myLoop2( "Hello World ", 3 ));
 
 
 // 3.3  Do loop.
 function myLoop3( string, number ){
    var myString3 = "";
    do {
       myString3 += string;
    number++
 }
 while (number > 0);
    return myString3;
 }
 console.log(myLoop3( "Hello World ", 10 ));
 
 
 //Q7
 let x = 10; 
 
 function f1( value ) { 
     value = value + 1; 
     return value;
 }
 f1(x);
 console.log( x );
 
 let y = { x: 10 };
 function f2(value) {
     value.x = value.x + 1;
     return value;
 }
 f2(y);
 console.log( y );