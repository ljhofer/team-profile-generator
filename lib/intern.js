// Requires parent class of Employee

const Employee = require('./employee');

// Creates subclass of Intern
class Intern extends Employee {
    constructor(response) {

        super(response.name, response.id, response.email)

        this.school = response.school; 
    }

    getSchool() {
        console.log("School: " + this.school);
    }

    getRole() {
        console.log("Role: Intern");
    }
}

module.exports = Intern;