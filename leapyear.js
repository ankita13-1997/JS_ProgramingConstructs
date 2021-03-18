const prompt = require('prompt-sync')({sigint: true}); 

let num  = prompt('enter the year : ');
num=Number(num);

if((num%4 ==0) && (num%100 !=0)  || (num%400 == 0))

{
    console.log(`${num} is a leap year`);
}

else
{
    console.log(`${num} is not a leap year`);
}
