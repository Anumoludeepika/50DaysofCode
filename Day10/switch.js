//days
let day=3;
switch(day)
{
case 1:
 console.log("monday");
    break;
case 2:
console.log("tuesday");
break;
default:
    console.log("other day");
}
//voting
let username=(prompt("enter your name"));
let Age=(prompt("enter your age"));
switch(true)
{
   case (Age<18):
        console.log("not elgibel to vote");
        break;
    case (Age=>18):
            console.log(" eligible to vote");
            
    case (Age>=65):
        console.log("they are senior citizen");
       break;
    default:
                console.log("none");
                break;
}
