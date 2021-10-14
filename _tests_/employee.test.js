// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`


const { it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

describe("Name", () => {
    it('Is a string of letters', () => {
        const employee = new Employee("Will", 1, "will@mail.com");
        let hasNumber = false; 
        
        employee.name.forEach((letter, i) => {
            const charCode = employee.name.charCodeAt(i);
            if(charCode < 65 || charCode > 122) {
                hasNumber = true;
            }
        })

        expect(hasNumber).toBe(false);
  });

    it('Should contain no spaces in the string', () => {
        const employee = new Employee("Will", 1, "will@mail.com");
        let hasSpaces = false;
        
        if(employee.name.indexOf(" ") === -1) {
            hasSpaces = true
        }

        expect(hasSpaces).toBe(false);
  });


    it("Should match the name that was inputted", () => {
        const employee = new Employee("Will", 1, "will@mail.com");
        let nameMatch = true;
        
        if (employee.name !== "Will") {
            nameMatch = false;
        }
        
        expect(nameMatch).toBe(true);
    })
});

describe("ID", () => {

    it("Should contain numbers")







}) 