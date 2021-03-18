const prompt = require('prompt-sync')({sigint: true}); 

let num  = prompt('ENTER THE DAY OF NUMBER : ');
num=Number(num);

if(num==1)
{
    console.log("MONDAY");
}

else if(num==2)
{
    console.log("TUESDAY");
}

else if(num==3)
{
    console.log("WEDNESDAY");
}

else if(num==4)
{
    console.log("THRUSDAY");
}

else if(num==5)
{
    console.log("FRIDAY");
}

else if(num==6)
{
    console.log("SATURDAY");
}

else if(num==7)
{
    console.log("SUNDAY");
}

else
{
    console.log("invalid week number");
}