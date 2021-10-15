// Requires Inquirer, Jest, and fs
const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//Variable for card div area
let mainDiv = document.getElementById("#main-div");


// TODO: An array of manager questions
const managerQuestions = [ 
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the team manager's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "email"
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
        name: "name"
    },
    {
        type: "input",
        message: "What is the engineer's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the engineer's office number?",
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
        name: "name"
    },
    {
        type: "input",
        message: "What is the intern's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the interns's email?",
        name: "email"
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


// Prompts user with the initial question set for the manager and starts the app
function askManagerQuestions() {
    inquirer
        .prompt(managerQuestions)

        .then(response => {
            const manager = new Manager (response);
            generateManagerHMTL(manager);

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
            const engineer = new Engineer (response);
            generateEngineerHTML(engineer);
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
            const intern = new Intern (response);
            generateInternHTML(intern);
            if (response.role === "Engineer"){
                askEngineerQuestions();
            }
            else if (response.role === "Intern"){
                askInternQuestions();
            }
            else return
        })
}


// Generates template literal sting for the manager
function generateManagerHMTL(manager) {
    
    const managerName = manager.getName();
    const managerRole = manager.getRole();
    const managerId = manager.getID();
    const managerEmail = manager.getEmail();
    const managerOfficeNumber = manager.getOfficeNumber();

    let managerHTML = ` 
<div class="card text-white bg-dark mb-3 manager" style="max-width: 18rem;">
    <h2 class="card-header">${managerName}</h2>
        <h3 class="card-header">${managerRole}</h3>
    <div class="card-body">
    <h4 class="card-title">ID: ${managerId}</h4>
    <h4 class="card-title"> <a href="mailto: ${managerEmail}">Email: ${managerEmail}</a></h4>
    <h4 class="card-title">Office Number: ${managerOfficeNumber}</h4>
    </div>
</div>
`
   

}

// Generates template literal sting for any engineers
function generateEngineerHTML(engineer) {
    
    const engineerName = engineer.getName();
    const engineerRole = engineer.getRole();
    const engineerId = engineer.getID();
    const engineerEmail = engineer.getEmail();
    const engineerGitHub = engineer.getGitHub();

    let engineerHTML = `
`
}

// Generates template literal sting for any engineers
function generateInternHTML(intern) {
    
    const internName = intern.getName();
    const internRole = intern.getRole();
    const internId = intern.getID();
    const internEmail = intern.getEmail();
    const internSchool = intern.getSchool();

    let internHTML = `
`
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

