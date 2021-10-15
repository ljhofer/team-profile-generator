// Requires parent class of Employee

const Employee = require('./employee');

// Creates subclass of Engineer
class Engineer extends Employee {
    constructor(response) {

        super(response.name, response.id, response.email);

        this.gitHub = response.gitHub;
    }

    getRole() {
        console.log("Role: Engineer");
    }
}

module.exports = Engineer;