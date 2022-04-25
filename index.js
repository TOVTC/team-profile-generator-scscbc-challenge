// write a node generator function that uses inquirer to ask the user for required information
// then, output the collected information to generate employee objects
// transfer the employee objects to an array to make an HTML file
// do a mockup of the final HTML
// add a style.css file and/or implement boostrap for final page styling
// add validation (time permitting)

const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern")

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
    },
    {
        type: "input",
        name: "office",
        message: "Please enter team manager's office number:"
    }
];

const questions = [
    {
        type: "list",
        name: "role",
        message: "What role does this team member fulfill?",
        choices: ["Engineer", "Intern"],
    },
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
    },
    {
        type: "input",
        name: "school",
        message: "Enter this intern's school name:",
        when: ({role}) => {
            if (role === "Intern") {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "add",
        message: "Would you like to add another team member?",
        default: true
    }
];

// inquirer.prompt(questions).then(answers => if ({nextType !== Exit}) function to sort and re-run inquirer.prompt()} else { return } {employeeProfiles.push(answers); const newQuestions = questions.push({},{}); inquirer.prompt(newQuestions)})
// push to a different array depending on type - or use .filter()
// if employeeList array is empty, then new Manager, otherwise, match type

inquirer.prompt(managerQuestions)
    .then(res => {
        const {name, id, email, office} = res;
        employeeList.push(JSON.stringify(new Manager(name, id, email, "Manager", office)));//probably remove stringify from here later - access variables using methods instead
        console.log("Answer the following prompts to build out the team's profiles.");
        buildTeam();
    });

function buildTeam() {
    inquirer.prompt(questions)
        .then(res => {
            const {name, id, email, role, github, school, add} = res;
            if (role === "Engineer") {
                employeeList.push(JSON.stringify(new Engineer(name, id, email, role, github)));//remove stringify?
            } else if (role === "Intern") {
                employeeList.push(JSON.stringify(new Intern(name, id, email, role, school)));//remove stringify?
            } else {
                console.log("placeholder")//remove if no time to generate custom
            }
            if (add) {
                buildTeam();
            }
        });
}