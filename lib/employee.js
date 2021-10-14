
// Creates an employee class

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName = function(){
        console.log("Name: " + this.name);
    }

    getID = function(){
        console.log("ID: " + this.id);
    } 

    getEmail = function(){
        console.log("Email: " + this.email);
    }

    getRole = function(){
        console.log("Role: Employee");
    }
}

module.exports = Employee;