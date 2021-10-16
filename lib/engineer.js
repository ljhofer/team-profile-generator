
// Requires parent class of Employee
const Employee = require('./employee');

// Creates subclass of Engineer
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {

        super(name, id, email);

        this.gitHub = gitHub;
    }

     // The function that is unique to the Engineer
    getGitHub() {
        return this.gitHub;
    }

    // Overrides the parent function to return Engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;