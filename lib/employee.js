
// Creates an employee class

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // These are the functions that are attached to this class
    getName() {
        return this.name;  
    }

    getID() {
        return this.id;
    } 

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;