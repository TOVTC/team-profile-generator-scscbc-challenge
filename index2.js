// write file and copy file
// add validations
// add comments and semicolons

const inquirer = require("inquirer");
const generatePage = require("./file-template.js");
const {writeFile, copyFile} = require("./generate-site.js");
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
                message: "Select an employee role to add a new team member or select 'Finish' to exit.",
                choices: ["Engineer", "Intern", "Custom", "Finish"],
            },
            {
                type: "input",
                name: "name",
                message: "Enter this employee's full name:",
                when: ({role}) => {
                    if (role !== "Finish") {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter this employee's staff id number:",
                when: ({role}) => {
                    if (role !== "Finish") {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter this employee's full email address:",
                when: ({role}) => {
                    if (role !== "Finish") {
                        return true;
                    } else {
                        return false;
                    }
                }
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
                const {name, id, email, role, github, school, task} = res;
                if (role === "Engineer") {
                    this.employeeList.push(new Engineer(name, id, email, role, github));
                    this.buildTeam();
                    return;
                } else if (role === "Intern") {
                    this.employeeList.push(new Intern(name, id, email, role, school));
                    this.buildTeam();
                    return;
                } else if (role === "Custom"){
                    this.employeeList.push(new Custom(name, id, email, role, task));
                    this.buildTeam();
                    return;
                } else {
                    return this.employeeList;
                }
            })
            .then(res => {
                if (!res) {
                    return;
                } else {
                    return generatePage(res)
                }
            })
            .then(pageHTML => {
                if (!pageHTML) {
                    return
                } else {
                    return writeFile(pageHTML);
                }
            })
            .then(writeFileResponse => {
                if (!writeFileResponse){
                    return;
                } else {
                    console.log(writeFileResponse);
                    return copyFile();
                }
            })
            .then(copyFileResponse => {
                if (!copyFileResponse) {
                    return;
                } else {
                    console.log(copyFileResponse);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = new Team().addManager();