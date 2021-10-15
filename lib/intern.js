// Requires parent class of Employee

const Employee = require('./employee');

// Creates subclass of Intern
class Intern extends Employee {
    constructor(response) {

        super(response.name, response.id, response.email)

        this.school = response.internSchoolName; 
    }

    getSchool() {
       return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;