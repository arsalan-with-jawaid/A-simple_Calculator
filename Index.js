#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// conditional statement
if (answer.operator === "addition") {
    console.log("Addition result:", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log("Subtraction result:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log("Multiplication result:", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    if (answer.secondNumber === 0) {
        console.log("Error: Division by zero");
    }
    else {
        console.log("Division result:", answer.firstNumber / answer.secondNumber);
    }
}
else {
    console.log("Invalid operator selected");
}
