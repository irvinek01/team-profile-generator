const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

        if ((!github || github == "" || github == " ")) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }

        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    };

    getGithub() {
        return this.github;
    };
};
module.exports = Engineer;