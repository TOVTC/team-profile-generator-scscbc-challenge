const Employee = require("./Employee");

class Custom extends Employee {
    constructor(name = "", id = 0, email = "", role, task, link) {
        super(name, id, email, role);
        this.task = task;
        this.link = link;
    }    

    getTask() {
        return this.task;
    }

    getLink() {
        return this.link;
    }
}

// console.log(new Custom("Aries", 123, "ariesofwunderworld@gmail.com", "Custom", "Collaborator", "https://wunder.world/"))

module.exports = Custom;