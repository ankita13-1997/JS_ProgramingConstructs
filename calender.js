const prompt = require('prompt-sync')({sigint: true}); 
//console.log("enter the number");
let num = prompt('enter the number');

num=new Date(num);
console.log(num);

let start = new Date(2020,02,20);
let end = new Date(2020,06,20);
console.log(start);
console.log(end);
if(num>start && num< end)
{
    console.log("true");
}

else
{
   console.log("false");
}