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

function getSecmax(randomArray)
{
  var temp;
   var i;
   var j;
   for(i=0 ; i<randomArray.length;i++ )
   {
       for(j<i+1 ; j<randomArray.length;j++)
       if(randomArray[i]>randomArray[j])
       {
        temp=randomArray[i];
        randomArray[i]=randomArray[j];
        randomArray[j]=temp;    
       }
   }
   console.log("the 2nd max value is " +randomArray[randomArray.length-2]+ " and minimum value is "+randomArray[randomArray.length+2]);
}

function getSecmin(randomArray)
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
let maxelement = getSecmax(randomArray);

console.log(getSecmax);

