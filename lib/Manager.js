const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {

        if (typeof officeNum !== 'number' || isNaN(officeNum) || officeNum < 0) {
            throw new Error("Expected parameter 'officeNum' to be a non-negative number");
        }

        super(name, id, email);
        this.officeNum = officeNum;
        this.role = 'Manager';
    };

    getOfficeNum() {
        return this.officeNum;
    };
};
module.exports = Manager;