let userName=(prompt("enter your name"));
let age=(prompt(userName+"enter your age"));
age=Number(age);
switch(true){
    case age<0|| Number.isNaN(age):
        console.log("invalid age");
        break;
        case age<18 && age>=13:
        console.log("you are a teenager-not eligible to vote");
        break;
        case age>=18:
        console.log("eligible to vote");
        case age=>65:
            console.log("senior citizen");
            break;
   default:
    console.log("no special category");
    break;
}
