// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const lookup = {
    "a": 11,
    "b": 21,
    "c": 31,
    "d": 41,
    "e": 51,
    "f": 12,
    "g": 22,
    "h": 32,
    "i": 42,
    "j": 42,
    "k": 52,
    "l": 13,
    "m": 23,
    "n": 33,
    "o": 43,
    "p": 53,
    "q": 14,
    "r": 24,
    "s": 34,
    "t": 44,
    "u": 54,
    "v": 15,
    "w": 25,
    "x": 35,
    "y": 45,
    "z": 55
  }

  const reverseLookup = {
    "11":"a",
    "21":"b",
    "31":"c",
    "41":"d",
    "51":"e",
    "12":"f",
    "22":"g",
    "32":"h",
    "42":"(i/j)",
    "52":"k",
    "13":"l",
    "23":"m",
    "33":"n",
    "43":"o",
    "53":"p",
    "14":"q",
    "24":"r",
    "34":"s",
    "44":"t",
    "54":"u",
    "15":"v",
    "25":"w",
    "35":"x",
    "45":"y",
    "55":"z"
  }

  function encoder(input){
    //return spaces as-is
    if (!(input in lookup)){return input};
    //otherwise return number value according to lookup
    return lookup[input];
  }
// encoder("h")

  function decoder(input){
    //return spaces as-is
    if (!(input in reverseLookup)){return input};
    return reverseLookup[input];
  }
  decoder("44")

  function polybius(input, encode = true) {
    //make a result container
    let result ="";
    if(encode){
    const trueInput = input.toLowerCase();
    //run the input through a for loop
    for (let letter of trueInput){
      //send letters to swapper function
      //push to result
      result += encoder(letter);
    }}
    if(!encode){
      //break input into array of "words"
      const numWords = input.split(' ');
      //build array holder for decoded words
      const newWords = [];
      //cycle through the array
      for(let word of numWords){
        if(word.length%2 === 0){
        //make array of number pairs
        let doubles = word.match(/.{1,2}/g)
        let thisWord = "";
        //cycle through letter pairs and return letters
        for(let pair of doubles){
          thisWord += decoder(pair);
        }
        // add full word to decoded word array
        newWords.push(thisWord)
      }
      else{return false}
    }
    // join decoded word array with a space
      result = newWords.join(' ');
    
    }
    //return result as a string
    console.log(result)
    return `${result}`
  }

  // polybius("thinkful"); //> "4432423352125413"
  // polybius("Hello world"); //> '3251131343 2543241341'
  
 polybius("3251131343 2543241341", false); //> "hello world"
  // polybius("4432423352125413", false); //> "th(i/j)nkful
  // polybius("44324233521254134", false); //> false

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
