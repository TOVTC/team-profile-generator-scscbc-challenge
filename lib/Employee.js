class Employee {
    constructor(name = "", id = 0, email = "") {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole(role) {
        if (role) {
            return role;
        } else {
            return "Employee";
        }
    }
}

// console.log(new Employee("Stefan", 123, "puptheband@gmail.com"));

module.exports = Employee;