const Employee = require("./Employee");

// when new Manager(...) is called, a new Manager object will be generated from the existing Employee constructor, but an Manager will additionally
// have the properties and methods below
class Manager extends Employee {
    constructor(name = "", id = 0, email = "", role, office) {
        super(name, id, email, role);
        this.office = office;
    }

    getOffice() {
        return this.office;
    }
}

module.exports = Manager;