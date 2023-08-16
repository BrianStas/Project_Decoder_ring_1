// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want withinq this function scope

  const lookup = "abcdefghijklmnopqrstuvwxyz"

  function letterSwapper(letter, shift=0){
    //if the current character is in the alphabet, find the index of the current character in the lookup
    let letterIndex = lookup.indexOf(letter);
    if (letterIndex < 0){
      return letter
    }
      //add the shift to the index
    const newIndex = letterIndex + shift;
      //find the character at the shifted index and add to result
    const result = lookup.charAt(newIndex);
    console.log(result);
    return result;
  }
//letterSwapper("c",5)
  function caesar(input, shift=0, encode = true) {
    let result = "";
    //if the shift is not within 25 or 0, return false
    if(shift>25 || shift<-25 || shift===0){
      return false
    }
      // if encode is false, you're shifting the opposite of what's input for the shift
    if(encode === false) shift = shift-(shift*2);
    const trueInput = input.toLowerCase();
    //look at each character in the string one by one for each character(should be all lowercase)
    for(let letter of trueInput){
      result += letterSwapper(letter, shift)
    }
    console.log(result);
    return result;
  }

//caesar("thinkful", 3);//>'wklqnixo'
//caesar("thinkful", -3)//>'qefkhcri'
caesar("a b!", 3)//> "d e!"
console.log(caesar("happy", 26))
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
