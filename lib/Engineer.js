const Employee = require("./Employee");

// when new Engineer(...) is called, a new Engineer object will be generated from the existing Employee constructor, but an Engineer will additionally
// have the properties and methods below
class Engineer extends Employee {
    constructor(name = "", id = 0, email = "", role, github) {
        super(name, id, email, role);
        this.github = github;
    }    

    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer;