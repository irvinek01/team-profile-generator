const Employee = require('./lib/Employee');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");
const inquirer = require("inquirer");
const filePath = "./dist/myTeam.html";

console.log('Please build your team');

function addManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's ID?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
            },
            {
                type: "input",
                name: "officeNum",
                message: "What is the team manager's office number?",
            },
        ])
        .then(answers => {
            const objMan = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNum);
            fs.appendFileSync(filePath, insideCard(objMan));
            askAgain();
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's ID?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is your engineer's GitHub username?",
            },
        ])
        .then(answers => {
            const objEng = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
            fs.appendFileSync(filePath, insideCard(objEng));
            askAgain();
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?",
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's ID?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?",
            },
            {
                type: "input",
                name: "school",
                message: "What school your intern attends to?",
            },
        ])
        .then(answers => {
            const objInt = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
            fs.appendFileSync(filePath, insideCard(objInt));
            askAgain();
        })
}

function insideCard(data) {

    if (data.getRole() === "Manager") {
        var cardManager = `<div class='card d-flex flex-wrap m-1 align-items-center justify-content-center'>
<header>
<h3>${data.getName()}</h3>
<p>☕${data.getRole()}</p>
</header>
<content class='card-content'>
<p>ID: 1</p>
<p>Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></p>
<p>Office Number: ${data.getOfficeNum()}</p>
</content>
</div>\n`;
        return cardManager;
    } else if (data.getRole() === "Engineer") {
        var cardEngineer = `<div class='card d-flex flex-wrap m-1 align-items-center justify-content-center'>
<header>
<h3>${data.getName()}</h3>
<p>🕶${data.getRole()}</p>
</header>
<content class='card-content'>
<p>ID: 1</p>
<p>Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></p>
<p>Github: <a href="https://github.com/${data.getGithub()}">${data.getGithub()}</a></p>
</content>
</div>\n`;
        return cardEngineer;
    } else if (data.getRole() === "Intern") {
        var cardIntern = `<div class='card d-flex flex-wrap m-1 align-items-center justify-content-center'>
<header>
<h3>${data.getName()}</h3>
<p>🎓${data.getRole()}</p>
</header>
<content class='card-content'>
<p>ID: 1</p>
<p>Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></p>
<p>School: ${data.getSchool()}</p>
</content>
</div>\n`;
        return ;
    }

}

function askAgain() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "nextStep",
                message: "Which of type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            },
        ])
        .then(answers => {
            const htmlPart2 = `</div>
</div>
</body>
</html>`;
            if (answers.nextStep === "I don't want to add any more team members") {
                fs.appendFileSync(filePath, htmlPart2);
                console.log("HTML file succesfully generated, can be find in 'dist' directory filenamed as myTeam.html")
            } else if (answers.nextStep === "Engineer") {
                addEngineer();
            } else if (answers.nextStep === "Intern") {
                addIntern();
            }
        })
}

function generateHTMLfile() {
    const htmlPart1 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="./CSS/style.css" />
<title>Team Profile Generator</title>
</head>
<body>
<h1 class="p-3 mb-2 bg-secondary text-white ">My Team</h1>
<div class="col-12 p-1 customBG ">
<div class="row p-1 m-1 align-items-center justify-content-center customBG2 ">\n`;
    fs.writeFileSync(filePath, htmlPart1);
    addManager();
}

generateHTMLfile();