const Engineer = require("../lib/Engineer");

const name = "John Doe";
const id = 1;
const email = "email@email.com";
const github = "irvinek01";

describe("Engineer", () => {
    describe("Initialization", () => {

        it("object Engineer should have the following properties: name, id, email, and github.", () => {
            const objEng = new Engineer(name, id, email, github);

            expect(objEng.role).toEqual("Engineer");
            expect(objEng.github).toEqual(github);
        });
        it("should throw an error when no input in github is returned.", () => {
            const cb = () => new Engineer(name, id, email, '');
            const err = new Error("Expected parameter 'github' to be a non-empty string");
            expect(cb).toThrowError(err);
        });

    });

    describe("getGithub", () => {
        it("object Engineer github should be returned.", () => {
            const objEng = new Engineer(name, id, email, github);
            const objEngGithub = objEng.getGithub();
            expect(objEngGithub).toEqual(github);
        });
    });

});