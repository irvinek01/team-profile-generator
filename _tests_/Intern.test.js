const Intern = require("../lib/Intern");

const name = "John Doe";
const id = 1;
const email = "email@email.com";
const school = "Hogwarts";

describe("Intern", () => {
    describe("Initialization", () => {

        it("object Intern should have the following properties: name, id, email, and school.", () => {
            const objInt = new Intern(name, id, email, school);

            expect(objInt.role).toEqual("Intern");
            expect(objInt.school).toEqual(school);
        });
        it("should throw an error when no input in school is returned.", () => {
            const cb = () => new Intern(name, id, email, '');
            const err = new Error("Expected parameter 'school' to be a non-empty string");
            expect(cb).toThrowError(err);
        });

    });

    describe("getSchool", () => {
        it("object Intern school should be returned.", () => {
            const objInt = new Intern(name, id, email, school);
            const objIntSchool = objInt.getSchool();
            expect(objIntSchool).toEqual(school);
        });
    });

});