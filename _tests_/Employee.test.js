const Employee = require("../lib/Employee");

const name = "John Doe";
const id = 1;
const email = "email@email.com";

describe("Employee", () => {
    describe("Initialization", () => {

        it("object Employee should have the following properties: name, id, email, and role.", () => {
            const objEmp = new Employee(name,id,email);
            
            expect(objEmp.name).toEqual(name);
            expect(objEmp.id).toEqual(id);
            expect(objEmp.email).toEqual(email);
            expect(objEmp.role).toEqual("Employee");
        });
        
    });

    describe("getName", () => {
		it("object Employee name should be returned.", () => {
			const objEmp = new Employee(name,id,email);
			const objEmpName = objEmp.getName();
			expect(objEmpName).toBe(name);
		});
	});

    describe("getId", () => {
		it("object Employee id should be returned.", () => {
			const objEmp = new Employee(name,id,email);
			const objEmpId = objEmp.getId();
			expect(objEmpId).toBe(id);
		});
	});

    describe("getEmail", () => {
		it("object Employee email should be returned.", () => {
			const objEmp = new Employee(name,id,email);
			const objEmpEmail = objEmp.getEmail();
			expect(objEmpEmail).toBe(email);
		});
	});

    describe("getRole", () => {
		it("object Employee role should be returned.", () => {
			const objEmp = new Employee(name,id,email);
			const objEmpRole = objEmp.getRole();
			expect(objEmpRole).toEqual("Employee");
		});
	});

});