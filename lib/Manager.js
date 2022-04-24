const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = "", id = 0, email = "", role, office) {
        super(name, id, email, role);
        this.office = office;
    }

    getOffice() {
        return this.office;
    }
}

// console.log(new Manager("Matilda", 123, "puptheband@gmail.com", "Manager", "APT707"))

module.exports = Manager;