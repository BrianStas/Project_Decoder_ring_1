// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe('caesar',()=>{
    it("should return false if shift > 25, < -25, or 0", ()=>{
        const runs = [26, -26, 0]
        const result= runs.map((run)=>{
            return caesar("happy", run)
        })
        console.log(result);
        const actual = result.some((run)=>run === true) 
        const expected = false;
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters and return lowercase",()=>{
        const actual = caesar("BUSINESS", 5)
        const expected = "gzxnsjxx"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces and other nonalphabetic symbols throughout the input",()=>{
        const actual = caesar("a. b c d e!", 5)
        const expected = "f. g h i j!"
        expect(actual).to.equal(expected)
    })
    it("should wrap letters around the alphabet if the shift pushes them off",()=>{
        const actual = caesar("xyz", 3)
        const expected = "abc"
        expect(actual).to.equal(expected)
    })

})