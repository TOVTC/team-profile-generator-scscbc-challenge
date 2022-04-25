const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
    const intern = new Intern("Moose", 123, "puptheband@gmail.com", "Intern", "Pine Point Secondary")
    expect(intern.name).toBe("Moose");
    expect(intern.id).toBe(123);
    expect(intern.email).toBe("puptheband@gmail.com");
    expect(intern.role).toBe("Intern");
    expect(intern.school).toEqual(expect.any(String));
});

test("retrieves the Intern's school name", () => {
    const intern = new Intern("Moose", 123, "puptheband@gmail.com", "Intern", "Pine Point Secondary")
    expect(intern.getSchool()).toBe("Pine Point Secondary");
});