// Write your tests here!
const caesar = require("../src/caesar")
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
})