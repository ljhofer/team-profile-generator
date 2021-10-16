const { it, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');


describe("Intern", () => {
    // This section test the additional property in Intern
    describe("Properties", () => {
        it("Should match the school name inputted by user", () => {
            const intern = new Intern("Will", 1, "will@mail.com", "Wisconsin");
            let schoolNameMatch = true;

            if(intern.school !== "Wisconsin") {
                schoolNameMatch = false;
            }

            expect(schoolNameMatch).toBe(true); 
        })
    })

    // This section tests the functions in Intern
    describe("functions", () => {
        it("Should return this intern's school name", () => {
            const intern = new Intern("Will", 1, "will@mail.com", "Wisconsin");
            expect(intern.getSchool()).toBe("Wisconsin");
        });

        it("Should return role as Intern", () => {
            const intern = new Intern("Will", 1, "will@mail.com", "Wisconsin");
            expect(intern.getRole()).toBe("Intern");
        })
    })
})

