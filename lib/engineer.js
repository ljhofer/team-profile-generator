
// Requires parent class of Employee
const Employee = require('./employee');

// Creates subclass of Engineer
class Engineer extends Employee {
    constructor(response) {

        super(response.name, response.id, response.email);

        this.gitHub = response.engineerGitHub;
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