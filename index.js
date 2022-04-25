// write a node generator function that uses inquirer to ask the user for required information
// then, output the collected information to generate employee objects
// transfer the employee objects to an array to make an HTML file
// do a mockup of the final HTML
// add a style.css file and/or implement boostrap for final page styling
// add validation (time permitting)

const inquirer = require("inquirer");

// for the first round, answers.role = "manager"

const employeeList = [];

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter team manager's full name:"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter team manager's staff id number:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter team manager's full email address:"
    }
];

const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter this employee's full name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter this employee's staff id number:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter this employee's full email address:"
    }
];



// inquirer.prompt(questions).then(answers => if ({nextType !== Exit}) function to sort and re-run inquirer.prompt()} else { return } {employeeProfiles.push(answers); const newQuestions = questions.push({},{}); inquirer.prompt(newQuestions)})

inquirer.prompt(managerQuestions)
    .then(answers => {
        answers.role = "Manager";
        employeeList.push(JSON.stringify(answers));
        console.log("manager " + employeeList);
        followUp();
    });

function followUp() {
    inquirer.prompt([{
        type: "list",
        name: "nextRole",
        message: "To add a team member, select the role of the member to be added. Select 'Exit' to finish.",
        choices: ["Engineer", "Intern", "Exit"],
        default: "Exit"
    }])
    .then(response => {
        if (response.nextRole !== "Exit") {//try destructuring here 
            inquirer.prompt(questions)
            .then(answers => {
                employeeList.push(JSON.stringify(answers));
                console.log("if " + employeeList);
                followUp();
            })
        } else {
            console.log("else " + employeeList);
            return;
        }
    });
}