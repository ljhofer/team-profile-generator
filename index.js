// Requires Inquirer, Jest, and fs
const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// TODO: An array of manager questions
const managerQuestions = [ 
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the team manager's ID number?",
        name: "managerID"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerOfficeNumber"
    },
    {
        type: "list",
        message: "What type of team member would you like to add next?",
        name: "role",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."]
    }
]

const engineerQuestions = [ 
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's ID number?",
        name: "engineerID"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "engineerGitHub"
    },
    {
        type: "list",
        message: "What type of team member would you like to add next?",
        name: "role",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."]
    }
]

const internQuestions = [ 
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the intern's ID number?",
        name: "internID"
    },
    {
        type: "input",
        message: "What is the interns's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the intern's school name?",
        name: "internSchoolName"
    },
    {
        type: "list",
        message: "What type of team member would you like to add next?",
        name: "role",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."]
    }

]


function askManagerQuestions() {
    inquirer
        .prompt(managerQuestions)

        .then(response => {
            console.log(response);
            const mangager = new Manager (response);
            if (response.role === "Engineer"){
                askEngineerQuestions();
            }
            else if (response.role === "Intern"){
                askInternQuestions();
            }
            else return
        })
}

function askEngineerQuestions() {
    inquirer
        .prompt(engineerQuestions)

        .then(response => {
            console.log(response);
            const engineer = new Engineer (response);
            if (response.role === "Engineer"){
                askEngineerQuestions();
            }
            else if (response.role === "Intern"){
                askInternQuestions();
            }
            else return
        })
}

function askInternQuestions() {
    inquirer
        .prompt(engineerQuestions)

        .then(response => {
            console.log(response);
            const intern = new Intern (response);
            if (response.role === "Engineer"){
                askEngineerQuestions();
            }
            else if (response.role === "Intern"){
                askInternQuestions();
            }
            else return
        })
}




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

askManagerQuestions();

