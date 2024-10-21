// //print 0 to 5
// let i;
// for( i =0;i<6;i++){  //i<=5 / i<6
//    console.log(i);
// }

// //print 1 to 5
// let i;
// for( i =1;i<6;i++){  //i<=5 / i<6
//    console.log(i);
// }

// //print 5 to 1
// let i;
// for( i =5;i>0;i--){  
//    console.log(i);
// }

// //task : generate random number and add them up to 5 times
// let sum =0;
// for(let i=0;i<=5;i++){
//     let a = Math.floor(Math.random()*10);
//     let ans = sum+a;
//     console.log(`The sum of random number is:${ans}`);
// }

// //Nested loop
// for(let i=0;i<=5;i++){
//     for(let j=1;j<=2;j++){
//         console.log(j);
//     }
//     console.log(i);
// }

// partern printing
for(let i=1;i<=5;i++){
    let pattern =" ";
   for(let j = 1;j<=i;j++){
     pattern+= "*";
   }
   console.log(pattern);
}