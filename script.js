//function expression
// function greet(name){
//     return "Hello " + name + "!";
//  }

//  console.log(greet("Sam"));

//function declaration /anonymous
let greet = function(name)
{   
    return "Hello " + name + "!";
}

console.log(greet("Eric"));  

function displayName(studentName){
    document.write(`
    <h2>Student List</h2>
    ${greet(studentName)}
    <p>Student name: ${studentName} </p> 
    <hr>
    `);
    
    return `<h2>Student List</h2>
    ${greet(studentName)}
    <p>Student name: ${studentName} </p> 
    <hr>`;
}

//Define a function called multiplyThreewhich accepts a number and returns that number multiplied by 3.


