const Employee = require("../lib/Employee");

const name = "John Doe";
const id = 1;
const email = "email@email.com";

describe("Employee", () => {
	describe("Initialization", () => {

		it("object Employee should have the following properties: name, id, email, and role.", () => {
			const objEmp = new Employee(name, id, email);

			expect(objEmp.name).toEqual(name);
			expect(objEmp.id).toEqual(id);
			expect(objEmp.email).toEqual(email);
			expect(objEmp.role).toEqual("Employee");
		});

		it("should throw an error when no string is returned.", () => {
			const cb = () => new Employee('', id, email);
			const err = new Error("Expected parameter 'name' to be a non-empty string");
			expect(cb).toThrowError(err);
		});
		it("should throw an error when id is not a number.", () => {
			const cb = () => new Employee(name, '1', email);
			const err = new Error("Expected parameter 'id' to be a non-negative number");
			expect(cb).toThrowError(err);
		});
		it("should throw an error when email is not valid.", () => {
			const cb = () => new Employee(name, id, 'emailemail.com');
			const err = new Error("Expected parameter 'email' should be valid");
			expect(cb).toThrowError(err);
		});

	});

	describe("getName", () => {
		it("object Employee name should be returned.", () => {
			const objEmp = new Employee(name, id, email);
			const objEmpName = objEmp.getName();
			expect(objEmpName).toBe(name);
		});
	});

	describe("getId", () => {
		it("object Employee id should be returned.", () => {
			const objEmp = new Employee(name, id, email);
			const objEmpId = objEmp.getId();
			expect(objEmpId).toBe(id);
		});
	});

	describe("getEmail", () => {
		it("object Employee email should be returned.", () => {
			const objEmp = new Employee(name, id, email);
			const objEmpEmail = objEmp.getEmail();
			expect(objEmpEmail).toBe(email);
		});
	});

	describe("getRole", () => {
		it("object Employee role should be returned.", () => {
			const objEmp = new Employee(name, id, email);
			const objEmpRole = objEmp.getRole();
			expect(objEmpRole).toEqual("Employee");
		});
	});

});