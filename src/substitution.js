// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
let lookup = "abcdefghijklmnopqrstuvwxyz"

  function encoder(letter,alphabet){
    if(lookup.indexOf(letter) < 0) {
      return letter
    };
    const index = lookup.indexOf(letter);
    return alphabet[index];
  }

  function decoder(letter, alphabet){
    if(alphabet.indexOf(letter) < 0) {
      return letter
    };
    const index = alphabet.indexOf(letter);
    return lookup[index];
  }

  function alphabetValidator(alphabet){
    return new Set(alphabet).size == alphabet.length;
  }

  function substitution(input, alphabet, encode = true) {
    let result = "";
    if(!alphabet) return false;
    if(alphabet.length !== 26) return false;
    if(alphabetValidator(alphabet)){
      let newInput = input.toLowerCase();
        if(encode){
          for(let letter of newInput){
            result += encoder(letter, alphabet);
      }}
      else{
        for(let letter of newInput)
          result += decoder(letter, alphabet)
      }}
    else{return false}
    console.log(result);
    return result;
  }
  //  substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
  substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
  // substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'
  
  // substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
  // substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"
  
  //  substitution("thinkful", "short"); //> false
  //substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
