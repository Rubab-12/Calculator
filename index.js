#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: chalk.bold.blue("Enter first number"), type: "number", name: "firstNumber" },
    { message: chalk.bold.blue("Enter second number"), type: "number", name: "secondNumber" },
    { message: chalk.bold.green("Select one of the operator to perform action"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponent"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Exponent") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else {
    console.log(chalk.red("please select valid operator"));
}
