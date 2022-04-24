const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
    const engineer = new Engineer("Mabu", 123, "puptheband@gmail.com", "Engineer", "MABU")
    expect(engineer.name).toBe("Mabu");
    expect(engineer.id).toBe(123);
    expect(engineer.email).toBe("puptheband@gmail.com");
    expect(engineer.role).toBe("Engineer");
    expect(engineer.github).toEqual(expect.any(String));
});

test("creates a GitHub link from the Engineer's GitHub username", () => {
    const engineer = new Engineer("Mabu", 123, "puptheband@gmail.com", "Engineer", "MABU")
    expect(engineer.getGitHub()).toEqual(expect.stringContaining("https://github.com/"));
});