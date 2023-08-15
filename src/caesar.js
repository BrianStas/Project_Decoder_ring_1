// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want withinq this function scope
  const lookup = "abcdefghijklmnopqrstuvwxyz"
  function caesar(input, shift=0, encode = true) {
    if(shift>25 || shift<-25 || shift===0){
      return false
    }

    //if the shift is not within 25 or 0, return false
    //create a result holder
    //look at each character in the string one by one for each character(should be all lowercase)
      //if the current character is in the alphabet, find the index of the current character in the lookup
      //add the shift to the index
      //find the character at the shifted index and add to result
      // if encode is false, you're shifting the opposite of what's input for the shift
  }

//caesar("thinkful", 3);//>'wklqnixo'
//caesar("thinkful", -3)//>'qefkhcri'
//caesar("a b!", 3)//> "d e!"
console.log(caesar("happy", 26))
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
