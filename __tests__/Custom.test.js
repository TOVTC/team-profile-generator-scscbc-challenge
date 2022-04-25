const Custom = require("../lib/Custom");

test("creates a custom Employee object", () => {
    const custom = new Custom("Aries", 123, "ariesofwunderworld@gmail.com", "Custom", "Collaborator", "https://wunder.world/");
    expect(custom.name).toBe("Aries");
    expect(custom.id).toBe(123);
    expect(custom.email).toBe("ariesofwunderworld@gmail.com");
    expect(custom.role).toBe("Custom");
    expect(custom.task).toEqual(expect.any(String));
    expect(custom.link).toEqual(expect.any(String));
});

test("retrieves the Custom Employee's task role", () => {
    const custom = new Custom("Aries", 123, "ariesofwunderworld@gmail.com", "Custom", "Collaborator", "https://wunder.world/");
    expect(custom.getTask()).toBe("Collaborator");
});

test("retrieves the Custom Employee's external link", () => {
    const custom = new Custom("Aries", 123, "ariesofwunderworld@gmail.com", "Custom", "Collaborator", "https://wunder.world/");
    expect(custom.getLink()).toBe("https://wunder.world/");
});