let sentence = "Thank God tomorrow is Friday, and so fast it's weekend already!!";

let word = "";

sentence = sentence + " ";

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] !== " ") {
    word += sentence[i]
  } else {
    let hasE = false;
    for (let t= 0; t < word.length; t++) {
      if (word[t].toLowerCase() === 'e') {
        hasE = true;
        break;
      }
    }

    if (!hasE && word.length > 0) {
      console.log(word)
    }
    word = "";
  }
}