
const { it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

describe("Employee", () => {
    describe("Properties", () => {
        it("Should match the name that was inputted", () => {
            const employee = new Employee("Will", 1, "will@mail.com");
            let nameMatch = true;
            
            if (employee.name !== "Will") {
                nameMatch = false;
            }
            
            expect(nameMatch).toBe(true);
        });

        it("Should match the id that was inputted", () => {
            const employee = new Employee("Will", 1, "will@mail.com");
            let idMatch = true;
            
            if (employee.id !== 1) {
                idMatch = false;
            }
            
            expect(idMatch).toBe(true);
        });
        
        it("Should match the email that was inputted", () => {
            const employee = new Employee("Will", 1, "will@mail.com");
            let emailMatch = true;
            
            if (employee.email !== "will@mail.com") {
                emailMatch = false;
            }
            
            expect(emailMatch).toBe(true);
        });
    })    

    describe("functions", () => {
        it("returns this employees name", () => {
            const employee = new Employee("Will", 1, "will@mail.com");
            expect(employee.getName()).toBe("Will");        
        });

        it("returns this employee's ID", () => {
            const employee = new Employee("Will", 1, "will@mail.com");
            expect(employee.getID()).toBe(1);
        })

        it("returns this employee's email", () => {
            const employee = new Employee("Will", 1, "will@mail.com");
            expect(employee.getEmail()).toBe("will@mail.com");
        })

        it("returns this employee's role as role", () => {
            const employee = new Employee("Will", 1, "will@mail.com");
            expect(employee.getRole()).toBe("Employee");
        })

    })
});






    