class Employee {
    constructor(name = "", id = 0, email = "", role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role || "Employee";
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

    getRole() {
        return this.role;
    }
}

// console.log(new Employee("Norman", 123, "puptheband@gmail.com", "Manager"));

module.exports = Employee;