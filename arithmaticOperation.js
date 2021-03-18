const prompt = require('prompt-sync')({sigint: true}); 
let num  = prompt('ENTER THE NUMBERS : ');

let a =Number(num);
let num1  = prompt('ENTER THE NUMBERS : ');
let b= Number(num1);
let num2  = prompt('ENTER THE NUMBERS : ');
let c =Number(num2);

let op1 = a+b*c;
console.log(`${op1}`);
let op2 = c+a/b;
console.log(`${op2}`);
let op3 = a%b+c;
console.log(`${op3}`);
let op4 = a*b+c;
console.log(`${op4}`);

if(op1>op2 && op1>op3 && op1>op4)
{
    console.log("the greatest among is " +op1);
}
else if(op2>op1 && op2>op3 && op2>op4)
{
 console.log("the greatest among all is "+op2);
}

else if(op4>op1 && op4>op2 && op4>op3)
{
    console.log("the greatest among all is "+op3);
}

else
{
    console.log("the greatest among all is "+op4);
}




if(op1,op2 && op1<op3 && op1<op4)
{
    console.log("the smallest among is " +op1);
}
else if(op2<op1 && op2<op3 && op2<op4)
{
 console.log("the smallest among all is "+op2);
}

else if(op4<op1 && op4<op2 && op4<op3)
{
    console.log("the smallest among all is "+op3);
}

else
{
    console.log("the smallest among all is "+op4);
}