import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {
        message: "Enter The First Number:",
        type: "number",
        name: "firstDigit"
    },
    {
        message: "Enter The Second Number:",
        type: "number",
        name: "secondDigit"
    },
    {
        message: "Select One Of The Operators To Perform Operation!",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);

if(answer.operators === "Addition") {
    console.log(`Your Value Is "${answer.firstDigit + answer.secondDigit}"`);
}
else if(answer.operators === "Subtraction") {
    console.log(`Your Value Is "${answer.firstDigit - answer.secondDigit}"`);
}
else if(answer.operators === "Multiplication") {
    console.log(`Your Value Is "${answer.firstDigit * answer.secondDigit}"`);
}
else if(answer.operators === "Division"){
    console.log(`Your Value Is "${answer.firstDigit / answer.secondDigit}"`);
};
