// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution",()=>{
    it("should return false if the given alphabet isn't exactly 26 characters long",()=>{
        const actualA = substitution("hello", "zyxwvutsrqponmghilkj")
        const actualB = substitution("hello", "zyxwvutsrqponmlkjhigfedcba$")
        const expected = false;
        expect(actualA&&actualB).to.equal(expected);
    })
    it("should correctly translate the phrase based on the given alphabet",()=>{
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw"
        expect(actual).to.equal(expected);
    })
    it("should return false if there are any duplicate characters in the given alphabet",()=>{
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        const expected = false;
        expect(actual).to.equal(expected);
    })
    it("should maintian spacing from the input in the output when encoding",()=>{
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal(expected);
    })
    it("should maintian spacing from the input in the output when decoding",()=>{
        const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = "you are an excellent spy";
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters and return lowercase",()=>{
        const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw'
        expect(actual).to.equal(expected);
    })
})