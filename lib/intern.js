// Requires parent class of Employee

const Employee = require('./employee');

// Creates subclass of Intern
class Intern extends Employee {
    constructor(response) {

        super(response.name, response.id, response.email)

        this.school = response.internSchool; 
    }

    // The function that is unique to the Intern
    getSchool() {
       return this.school;
    }

    // Overrides the parent function to return Intern
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;