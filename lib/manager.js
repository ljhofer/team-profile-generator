// Requires parent class of Employee

const Employee = require('./employee');

// Creates subclass of Manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // The function that is unique to the Manager
    getOfficeNumber(){
        return this.officeNumber;
    }

    // Overrides the parent function to return Manager
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;