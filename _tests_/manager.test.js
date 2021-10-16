const { it, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');


describe("Manager", () => {
    // This section tests the additional property in Manager
    describe("Properties", () => {
        it("Should match the office number that was inputted for the new Manager", () => {
            const manager = new Manager("Will", 1, "will@mail.com", 111);
            let officeNumberMatch = true;

            if (manager.officeNumber !== 111) {
                officeNumberMatch = false;
            }

            expect(officeNumberMatch).toBe(true);
        })
    })

    // This sections tests the functions inside Manager
    describe("Functions", () => {
        it("Should return this manager's office number", () => {
            const manager = new Manager("Will", 1, "will@mail.com", 111);
            expect(manager.getOfficeNumber()).toBe(111);
        })

        it("Should return role as Mangager", () => {
            const manager = new Manager("Will", 1, "will@mail.com", 111);
            expect(manager.getRole()).toBe("Manager");
        })
    })
})