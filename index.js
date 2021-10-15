// Requires Inquirer, Jest, and fs
const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Template literal for writing the final HTML
let finalHTML="";


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
        message: "What is the engineer's GitHub username?",
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
        name: "internSchool"
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
            else writeToHTML();
        })
}

function askInternQuestions() {
    inquirer
        .prompt(internQuestions)

        .then(response => {
            const intern = new Intern (response);
            generateInternHTML(intern);
            if (response.role === "Engineer"){
                askEngineerQuestions();
            }
            else if (response.role === "Intern"){
                askInternQuestions();
            }
            else writeToHTML();
        })
}


// Generates template literal sting for the manager
function generateManagerHMTL(manager) {
    
    const managerName = manager.getName();
    const managerRole = manager.getRole();
    const managerId = manager.getID();
    const managerEmail = manager.getEmail();
    const managerOfficeNumber = manager.getOfficeNumber();

    let managerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
        <h1>My team</h1>
    </header>
    
    <main id="main-div">
        <div class="card text-white bg-dark mb-3 manager" style="max-width: 18rem;">
            <h2 class="card-header">${managerName}</h2>
                <h3 class="card-header">${managerRole}</h3>
            <div class="card-body">
            <h4 class="card-title">ID: ${managerId}</h4>
            <h4 class="card-title">Email: <a href="mailto:${managerEmail}">${managerEmail}</a></h4>
            <h4 class="card-title">Office Number: ${managerOfficeNumber}</h4>
            </div>
        </div>
`
        // Pushes managerHTML to final HTML
        finalHTML += managerHTML;
}

// Generates template literal sting for any engineers
function generateEngineerHTML(engineer) {
    
    const engineerName = engineer.getName();
    const engineerRole = engineer.getRole();
    const engineerId = engineer.getID();
    const engineerEmail = engineer.getEmail();
    const engineerGitHub = engineer.getGitHub();

    let engineerHTML = `
        <div class="card text-white bg-dark mb-3 engineer" style="max-width: 18rem;">
            <h2 class="card-header">${engineerName}</h2>
                <h3 class="card-header">${engineerRole}</h3>
            <div class="card-body">
            <h4 class="card-title">ID: ${engineerId}</h4>
            <h4 class="card-title">Email: <a href="mailto:${engineerEmail}">${engineerEmail}</a></h4>
            <h4 class="card-title">GitHub: <a href="http://github.com/${engineerGitHub}" target="_blank">${engineerGitHub}</a></h4>
            </div>
        </div>
`
    finalHTML += engineerHTML; 
}

// Generates template literal sting for any engineers
function generateInternHTML(intern) {
    
    const internName = intern.getName();
    const internRole = intern.getRole();
    const internId = intern.getID();
    const internEmail = intern.getEmail();
    const internSchool = intern.getSchool();

    let internHTML = `
        <div class="card text-white bg-dark mb-3 intern" style="max-width: 18rem;">
            <h2 class="card-header">${internName}</h2>
                <h3 class="card-header">${internRole}</h3>
            <div class="card-body">
            <h4 class="card-title">ID: ${internId}</h4>
            <h4 class="card-title">Email: <a href="mailto:${internEmail}">${internEmail}</a></h4>
            <h4 class="card-title">School: ${internSchool}</h4>
            </div>
        </div>
`
    finalHTML += internHTML;
}

// TODO: Function for writing responses to HTML
function writeToHTML() {

    let closingTags = `
    </main>
 
</body>
</html>    
    `
    finalHTML += closingTags;

    fs.writeFile("./dist/index.html", finalHTML, err =>
        err ? console.error(err) : console.log("Success!"))
}


// TODO: Function to initialize app, calls questions, and gets responses
askManagerQuestions();

