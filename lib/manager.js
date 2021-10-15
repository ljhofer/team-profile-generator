// Requires parent class of Employee

const Employee = require('./employee');

// Creates subclass of Manager
class Manager extends Employee {
    constructor (response) {
        
        super(response.name, response.id, response.email);

        this.officeNumber = response.managerOfficeNumber;
    }

    getID() {
        return "Manager";
    }
}

module.exports = Manager;