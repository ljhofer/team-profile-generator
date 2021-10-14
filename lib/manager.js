// Requires parent class of Employee

const Employee = require('./employee');

// Creates subclass of Manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber ) {
        
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getID() {
        console.log("Role: Manager");
    }
}