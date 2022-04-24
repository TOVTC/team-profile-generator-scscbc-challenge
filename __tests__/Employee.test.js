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
    expect(employee.getName()).toEqual(expect.any(String));
});

test("retrieves the employee's id number", () => {
    const employee = new Employee("Zack", 123, "puptheband@gmail.com");
    expect(employee.getID()).toEqual(expect.any(Number));
});

test("retrieves the employee's email", () => {
    const employee = new Employee("Nestor", 123, "puptheband@gmail.com");
    expect(employee.getEmail()).toEqual(expect.stringContaining("@"));
});

test("retrieves the employee's role", () => {
    const employee = new Employee("Jeremy", 123, "puptheband@gmail.com");
    expect(employee.getRole()).toEqual(expect.any(String));
    employee.role = "Manager";
    expect(employee.getRole()).toEqual(expect.any(String));
});