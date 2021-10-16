const { it, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');


describe("Engineer", () => {
    // This section tests the property added in Engineer 
    describe("Properties", () => {
        it("Should match the GitHub account inputted by the user", () => {
            const engineer = new Engineer ("Will", 1, "will@mail.com", "coderwill");
            let gitHubMatch = true;
            
            if(engineer.gitHub !== "coderwill") {
                gitHubMatch = false;
            }

            expect(gitHubMatch).toBe(true);
        })
    })

    // This section tests the functions in Engineer
    describe("Functions", () => {
        it("Should return this engineer's GitHub username", () => { 
            const engineer = new Engineer ("Will", 1, "will@mail.com", "coderwill");
            expect(engineer.getGitHub()).toBe("coderwill");
        })
        
        it("Should return role as Engineer", () => {
            const engineer = new Engineer ("Will", 1, "will@mail.com", "coderwill");
            expect(engineer.getRole()).toBe("Engineer");
        })
    })
})