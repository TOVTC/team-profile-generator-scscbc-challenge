const Employee = require("./Employee");

// when new Intern(...) is called, a new Intern object will be generated from the existing Employee constructor, but an Intern will additionally
// have the properties and methods below
class Intern extends Employee {
    constructor(name = "", id = 0, email = "", role, school) {
        super(name, id, email, role);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;