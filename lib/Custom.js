const Employee = require("./Employee");

class Custom extends Employee {
    constructor(name = "", id = 0, email = "", role, task) {
        super(name, id, email, role);
        this.task = task;
    }    

    getTask() {
        return this.task;
    }
}

// console.log(new Custom("Aries", 123, "ariesofwunderworld@gmail.com", "Custom", "Collaborator", "https://wunder.world/"))

module.exports = Custom;