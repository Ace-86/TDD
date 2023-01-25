// import capitalizeLetter from '../src/capitalize'

const { capitalizeLetter } = require("../src/capitalize.js");

describe("Capitalize", () => {
    test("Name", () => {
        expect(capitalizeLetter("foo")).toBe("FOO");
    });
    test("Is Undefined", () => {
        expect(capitalizeLetter()).toBe("");
    });
    test("Is Null", () => {
        expect(capitalizeLetter(null)).toBe("");
    });
});