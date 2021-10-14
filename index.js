// Requires Inquirer, Jest, and fs
const inquirer = require('inquirer');
const fs = require("fs");


// TODO: An array of Employee questions
const employeeQuestions = [ 
    {
        type: "input",
        message: "What is your name?",
        name: ""
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: ""
    },
    {
        type: "input",
        message: "",
        name: ""
    },







]

// TODO: A way to check which employee type is being entered


// TODO: Additional question for manager

// TODO: Additional question for engineer

// TODO: Additional question for intern




// TODO: Function for generating template literal
function generateHMTL(responses) {


}


// TODO: Function for writing responses to HTML
function writeToHTML(finalHTML) {



}


// TODO: Function to initialize app, calls questions, and gets responses
function startApp() {
    inquirer
        .prompt(questions)
        .then ((responses) => {
            // Sends the responses to the generate HTML function and sets the return to finalHTML
            const finalHTML = generateHTML(responses);
           
            // Calls the function to write the final file using the template string
            writeToHTML(finalHTML);
        })

}

startApp();

