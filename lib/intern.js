// Requires parent class of Employee

const Employee = require('./employee');

// Creates subclass of Intern
class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email)

        this.school = school; 
    }

    getSchool() {
        console.log("School: " + this.school);
    }

    getRole() {
        console.log("Role: Intern");
    }
}