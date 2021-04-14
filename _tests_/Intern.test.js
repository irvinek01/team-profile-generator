const Engineer = require("../lib/Intern");

const name = "John Doe";
const id = 1;
const email = "email@email.com";
const school = "Hogwarts";

describe("Intern", () => {
    describe("Initialization", () => { 

        it("object Intern should have the following properties: name, id, email, and school.", () => {
            const objInt = new Intern(name,id,email,school);
            
            expect(objInt.role).toEqual("Intern");
            expect(objInt.school).toEqual(school);
        });

    });

    describe("getGithub", () => {
		it("object Engineer github should be returned.", () => {
			const objEng = new Employee(name,id,email,github);
			const objEngGithub = objEng.getGithub();
			expect(objEngGithub).toEqual(github);
		});
	});

});