var head=0;
var tail=1;

var toss = Math.floor(Math.random()*2);

console.log(toss);

if(toss==head)
{
    console.log("it's your head");
}

else
{
    console.log("it's your tail");
}