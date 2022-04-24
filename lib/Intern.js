const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name = "", id = 0, email = "", role, school) {
        super(name, id, email, role);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

// console.log(new Intern("Moose", 123, "puptheband@gmail.com", "Intern", "Pine Point Secondary"))

module.exports = Intern;