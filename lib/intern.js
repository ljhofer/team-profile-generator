// Requires parent class of Employee

const Employee = require('./employee');

// Creates subclass of Intern
class Intern extends Employee {
    constructor(name, id, email, schoolName) {

        super(name, id, email)

        this.school = schoolName; 
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