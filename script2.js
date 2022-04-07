
function sum(num1,num2){
    return num1+num2;
}
//  let sum2 = function(){
//     console.log(3+3);
//  }
//  sum2();

let result=sum(10,10);
console.log(result);
sum(3,3);
sum(6,2);
//NaN = Not a Number ---> using string :(
//global scope
let subtotal = 0;

function addCart(price){  
    
    return subtotal += price;
}

function taxesCalculation(subtotal){
    return 1.11*subtotal;
}

subtotal = addCart(200);// 200
subtotal = addCart(400);//600
subtotal = addCart(600);//1200

console.log(`The subtotal is: ${subtotal}`); // 1200

const total = taxesCalculation(subtotal);
console.log(`The total is: ${total}`);