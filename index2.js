// write a node generator function that uses inquirer to ask the user for required information
// then, output the collected information to generate employee objects
// transfer the employee objects to an array to make an HTML file
// do a mockup of the final HTML
// add a style.css file and/or implement boostrap for final page styling
// add validation (time permitting)

const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Custom = require("./lib/Custom");

class Team {
    constructor() {
        this.employeeList = [];
        this.managerQuestions = [
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
        this.questions = [
            {
                type: "list",
                name: "role",
                message: "What role does this team member fulfill?",
                choices: ["Engineer", "Intern", "Custom"],
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
                name: "github",
                message: "Enter this engineer's github username:",
                when: ({role}) => {
                    if (role === "Engineer") {
                        return true;
                    } else {
                        return false;
                    }
                }
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
                type: "input",
                name: "task",
                message: "Enter this employee's role:",
                when: ({role}) => {
                    if (role === "Custom") {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "link",
                message: "Enter a link for this employee:",
                when: ({role}) => {
                    if (role === "Custom") {
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
        
    }

    addManager() {
        console.log("\nThis application will generate a webpage for your team.\nPlease begin by inputting your team manager's information.\n");
        inquirer.prompt(this.managerQuestions)
        .then(res => {
            const {name, id, email, office} = res;
            this.employeeList.push(new Manager(name, id, email, "Manager", office));
            console.log("\nAnswer the following prompts to build out your team's profiles.\n");
            this.buildTeam();
        })
    }

    buildTeam() {
        inquirer.prompt(this.questions)
            .then(res => {
                const {name, id, email, role, github, school, task, link, add} = res;
                if (role === "Engineer") {
                    this.employeeList.push(new Engineer(name, id, email, role, github));
                } else if (role === "Intern") {
                    this.employeeList.push(new Intern(name, id, email, role, school));
                } else {
                    this.employeeList.push(new Custom(name, id, email, role, task, link));
                }
                if (add) {
                    this.buildTeam();
                    return;
                } else {
                    console.log(this.employeeList);
                    // return this.employeeList;
                }
            })
            // .then(res => {
            //     if (!res) {
            //         return;
            //     } else {
            //         console.log(res);
            //     }
            // })
    }
}

module.exports = new Team().addManager();

// push to a different array depending on type - or use .filter()
// if employeeList array is empty, then new Manager, otherwise, match type
// self-refer to constructor class?
// conditional manager inquirier?
// custom employee class