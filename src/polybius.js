// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let lookup = {
    "a": 11,
    "b": 21,
    "c": 31
  }

  function polybius(input, encode = true) {
    // your solution code here
  }

  // polybius("thinkful"); //> "4432423352125413"
  // polybius("Hello world"); //> '3251131343 2543241341'
  
  // polybius("3251131343 2543241341", false); //> "hello world"
  // polybius("4432423352125413", false); //> "th(i/j)nkful
  // polybius("44324233521254134", false); //> false

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
