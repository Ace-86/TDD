// import capitalize from '../src/capitalize'

const { capitalize } = require("../src/capitalize");

describe("Capitalize", () => {
    test("Name", () => {
        expect(capitalize("foo")).toBe("FOO");
    });
    test("Is Undefined", () => {
        epect(capitalize()).toBe("");
    });
    test("Is Null", () => {
        expect(capitalize(null)).toBe("");
    });
});