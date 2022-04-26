const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
    const manager = new Manager("Matilda", 123, "puptheband@gmail.com", "Manager", "APT707");
    expect(manager.name).toBe("Matilda");
    expect(manager.id).toBe(123);
    expect(manager.email).toBe("puptheband@gmail.com");
    expect(manager.role).toBe("Manager");
    expect(manager.office).toEqual(expect.any(String));
});

test("retrieves the Manager's office number", () => {
    const manager = new Manager("Matilda", 123, "puptheband@gmail.com", "Manager", "APT707");
    expect(manager.getOffice()).toBe("APT707");
});