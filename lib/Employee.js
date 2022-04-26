// when new Employee(...)/super(...) is called, a new employee object will be generated with the properties and methods listed below
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

module.exports = Employee;