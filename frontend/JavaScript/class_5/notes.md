for loop :
Syntax : for(initialization ; condition ; increment/decrement){

    //code to be ....

}

ex1 : print the numbers b/w 1 to 5
Ans :
     let i;
     for( i =0;i<5;i++){
        console.log(i);
     }


//print 5 to 1
let i;
for( i =5;i>0;i--){  
   console.log(i);
}

Nested Loop:(a loop inside a loop)
for(let i=0;i<=5;i++){
     for(let j=1;j<=2;j++){
        console.log(j);
    }
     console.log(i);
 }

 
 partern printing :
for(let i=1;i<=5;i++){
    let pattern =" ";
   for(let j = 1;j<=i;j++){
     pattern+= "*";
   }
   console.log(pattern);
}

