const Employee = require("./Employee");

// when new Custom(...) is called, a new Custom object will be generated from the existing Employee constructor, but an Custom will additionally
// have the properties and methods below
class Custom extends Employee {
    constructor(name = "", id = 0, email = "", role, task) {
        super(name, id, email, role);
        this.task = task;
    }    

    getTask() {
        return this.task;
    }
}

module.exports = Custom;