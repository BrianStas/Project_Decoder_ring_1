// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", ()=>{
    it("should return '42' for the letters 'i' and 'j'",()=>{
        const actual = polybius("ijij");
        const expected = "42424242"
        expect(actual).to.equal(expected)
    })
    it("should return '(i/j)' when decoding the number '42'", ()=>{
        const actual = polybius("4242", false);
        const expected = "(i/j)(i/j)";
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters and return lowercase",()=>{
        const actualA = polybius("MESSAGE");
        const actualB = polybius("message");
        const expected = "23513434112251"
        expect(actualA&&actualB).to.equal(expected)
    })
    it("should maintain spacing from the input in the output when encoding",()=>{
        const actual = polybius("I like to eat");
        const expected = "42 13425251 4443 511144";
        expect(actual).to.equal(expected)
    })
    it("should maintian spacing from the input in the output when decoding",()=>{
        const actual = polybius("42 13425251 4443 511144", false);
        const expected = "(i/j) l(i/j)ke to eat";
        expect(actual).to.equal(expected)
    })
})