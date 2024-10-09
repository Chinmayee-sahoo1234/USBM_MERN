//mathematical opperation
let num1 = 10;
let num2 = 5;
let res = num1+num2;
console.log(res);//addition
let sub  = num1-num2;
console.log(sub); // subtraction
let mul = num1+num2;
console.log(mul); // multiplication
let div = num1/num2;
console.log(div);//division
let modulo = num1%num2;
console.log(modulo);//modulous


let num = 29;
let even = (num%2);
console.log(even);

//exponensial operator
let square = 2**2;
console.log(square);

let cube = 2**3;
console.log(cube);

//comarision operator
console.log(10>3);//trrue
console.log(7>9);//false
console.log(3>=3);//true

console.log(!5);// false

//quality operator
console.log(5>=5);//true
console.log(5==7);//false
console.log(5>="5");//true
console.log(5==="5");//false
console.log(5!="5");//false
console.log(5!=="5");//true

//falsy value
//false , 0 , -0, "" , '' , null  ,NaN , undefiend
if(true){
    console.log("it is true");//true
}
if(false){
    console.log("it is true");// no o/p
}
if(" "){
    console.log("it is true"); // true for using space
}
if(-100){
    console.log("it is true"); // tue bcz its not a falsy value
}
if(null){
    console.log("it is true"); // no o/p
}

//conditional statement
//task 1
let age = 65;
if(age>60){
    console.log("sinior");
}else if(age>=18){
    console.log("adult");
}
else{
    console.log("minor");
}
//task 2
// given total bill , discount-start price if you satisfy the condition print discount available otherwise no discount

let total_bill = 1033;
if(total_bill>=1000){
    console.log("Doscount");
}
else {
    console.log("no Discount");
}

//task 3
// check if(male) and then check(22+) thwn can be able to marry
let Age = 25;
let gender = "male";
if(gender==="male"){
    if(Age>22){
        console.log("marry");
    }else{
        console.log("he is not able to marry");
    }
}else{
    console.log("he is not able to marry");
}

//Logical Operator
// & ->and (both condition true)
// || ->or (only one condition true)
// ! -> not

if(gender==="male" && age>=22){
    console.log("marry");
}
else{
    console.log("not marry");
}

// print all the vowels
let alphbet = 'z';
if((alphbet == 'a') || (alphbet =='e') || (alphbet=='i')  || (alphbet == 'o') || (alphbet == 'u') ){
    console.log("vowels");
}else{
    console.log("consonamt");
}

// switch case
let Alphabet = 'e';
switch(Alphabet){
    case 'a': console.log("vowel")
    break;
    case 'e': console.log("vowel")
    break;
    case 'i': console.log("vowel")
    break;
    case 'o': console.log("vowel")
    break;
    case 'u': console.log("vowel")
    break;
    default:
    console.log("consonant");

}

//task
let week = 0;
switch(week){
    case 0: console.log("Monday");
    break;
    case 1: console.log("Tuseday");
    break;
    case 2: console.log("Wednusday");
    break;
    case 3: console.log("Thursday");
    break;
    case 4: console.log("Friday");
    break;
    case 5: console.log("Satarday");
    break;
    case 6: console.log("Sunday");
    break;
    default:
    console.log("not a week");
}

//task
let Month = 7;
switch(Month){
    case 0: console.log("Jan");
    break;
    case 1: console.log("feb");
    break;
    case 2: console.log("march");
    break;
    case 3: console.log("apr");
    break;
    case 4: console.log("may");
    break;
    case 5: console.log("june");
    break;
    case 6: console.log("july");
    break;
    case 7: console.log("aug");
    break;
    case 8: console.log("sep");
    break;
    case 9: console.log("oct");
    break;
    case 10: console.log("nov");
    break;
    case 11: console.log("dec");
    break;
    default:
        console.log("not a month");
}
