const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name = "", id = 0, email = "", role, github) {
        super(name, id, email, role);
        this.github = github;
    }    

    getGitHub() {
        return `https://github.com/${this.github}`
    }
}

// console.log(new Engineer("Mabu", 123, "puptheband@gmail.com", "Engineer", "MABU"))

module.exports = Engineer;