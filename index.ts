#! /usr/bin/env node

 import inquirer from "inquirer";
 const answer = await inquirer.prompt([
   {
     message: "entre firstNumber",
     type: "number",
     name: "firstNumber",
   },
   {
     message: "enter secondNumber",
     type: "number",
     name: "secondNumber",
   },
   {
     message: "select one of the operator to perform operation",
     type: "list",
     name: "operator",
     choices: ["addition", "substraction", "multiplication", "division"],
   },
 ]); 
//    conditional statement
if(answer.operator === "addition"){
   console.log( answer.firstNumber + answer.secondNumber);
}else if(answer.operator === "substraction"){
   console.log(  answer.firstNumber - answer.secondNumber); 
}else if(answer.operator === "multiplication"){
    console.log( answer.firstNumber * answer.secondNumber); 
}else if(answer.operator === "division"){
   console.log(answer.firstNumber / answer.secondNumber); 
}else{
   console.log("please select valid operator")
}

