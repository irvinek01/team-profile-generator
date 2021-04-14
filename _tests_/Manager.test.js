const Manager = require("../lib/Manager");

const name = "John Doe";
const id = 1;
const email = "email@email.com";
const officeNum = 555;

describe("Manager", () => {
    describe("Initialization", () => {

        it("object Manager should have the following properties: name, id, email, and office number.", () => {
            const objMan = new Manager(name, id, email, officeNum);
            expect(objMan.role).toEqual("Manager");
            expect(objMan.officeNum).toEqual(officeNum);
        });

    });

    describe("getOfficeNum", () => {
        it("object Manager office number should be returned.", () => {
            const objMan = new Manager(name, id, email, officeNum);
            const objOfficeNum = objMan.getOfficeNum();
            expect(objOfficeNum).toEqual(officeNum);
        });
    });

});