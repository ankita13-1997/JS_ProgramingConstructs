const prompt = require('prompt-sync')({sigint: true}); 

let num  = prompt('ENTER THE NUMBER (1,10,100,1000) : ');
num=Number(num);

if(num==1)
{
    console.log("1 is present in unit place if number "+num);
}

else if(num==10)
{
    console.log("1 is present in tens place and 0 is present is unit place value of number "+num);
}

else if(num==100)
{
    console.log(`1 is present in hundreds place value ,0 is present in both tenth and unit place value of number ${num}`);
}

else if(num==1000)
{
    console.log("1 is present in thousendth place and 0 is present in all the hundreth tentha and unit place of "+num);
}

else 
{
    console.log("number is not among the number");
}