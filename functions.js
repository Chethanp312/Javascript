function addNumbers(n1,n2){
    return n1+n2;
}
let res = addNumbers(2,3);
//console.log("Result:",res);

function loginUserMessage(username)
{
    if(!username){
        return `Please enter the username`;
    }
    else return `${username} is just logged in!`;    
}
let message = loginUserMessage("chethan");
//console.log(message);

function calculateCartPrice(...num1){
    return num1;
}
//console.log(calculateCartPrice(111,244,566));

const user={
    username: "chethan",
    price: 299
}

function handleObject(anyobject){
    return `username is ${anyobject.username} and price is ${anyobject.price}`;
}
// console.log(handleObject({
//     username: "chethan",
//     price: 299
// }));

const myNewArray = [200,400,500,700];

function returnSecondValue(newArray){
   return `The second value is ${newArray[1]}`; 
}
//console.log(returnSecondValue(myNewArray));

