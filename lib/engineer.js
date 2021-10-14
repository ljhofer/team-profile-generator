// Requires parent class of Employee

const Employee = require('./employee');

// Creates subclass of Engineer
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {

        super(name, id, email,);

        this.gitHub = gitHub;
    }

    getRole() {
        console.log("Role: Engineer");
    }
}