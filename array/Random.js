
var randomArray=[];
let length = randomArray.length;
console.log(length);
let ub=999;
let lb=100;

while(length<3)
{
    let random = lb + Math.floor(Math.random() * ((ub-lb) +1));
    console.log(random);
    randomArray.push(random);
    length++;
    
}

console.log(randomArray);

function getmax(randomArray)
{
   let max  = randomArray[0];
   var i;
   for(i=0 ; i<randomArray.length;i++ )
   {
       if(randomArray[i]>max)
       {
           max=randomArray[i];
       }
   }
   return max;
}

function getmin(randomArray)
{
    let min = randomArray[0];
    var i;
    for(i=0 ; i<randomArray.length;i++ )
    {
        if(randomArray[i]<min)
        {
            max=randomArray[i];
        }
    }
    return min; 
}
let maxelement = getmax(randomArray);

console.log(maxelement);

let minelemnet = getmin(randomArray);
console.log(minelemnet);