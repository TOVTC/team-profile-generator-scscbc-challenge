const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
    const employee = new Employee("Stefan", 123, "puptheband@gmail.com");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.id).toBeGreaterThan(0);
    expect(employee.email).toEqual(expect.stringContaining("@"));
    expect(employee.role).toEqual(expect.any(String));
});

test("retrieves the employee's name", () => {
    const employee = new Employee("Steve", 123, "puptheband@gmail.com");
    expect(employee.getName()).toBe("Steve");
});

test("retrieves the employee's id number", () => {
    const employee = new Employee("Zack", 123, "puptheband@gmail.com");
    expect(employee.getID()).toBe(123);
});

test("retrieves the employee's email", () => {
    const employee = new Employee("Nestor", 123, "puptheband@gmail.com");
    expect(employee.getEmail()).toBe("puptheband@gmail.com");
});

// if no role is provided, expect "Employee" to be returned, if role is provided, expect specified role to be returned
test("retrieves the employee's role", () => {
    const employee = new Employee("Jeremy", 123, "puptheband@gmail.com");
    expect(employee.getRole()).toBe("Employee");
    employee.role = "Manager";
    expect(employee.getRole()).toBe("Manager");
});