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

    });

    describe("getSchool", () => {
        it("object Intern school should be returned.", () => {
            const objInt = new Intern(name, id, email, school);
            const objIntSchool = objInt.getSchool();
            expect(objIntSchool).toEqual(school);
        });
    });

});