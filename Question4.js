let word1 = "amina", word2 = "sin", word3 = "terrorist", word4 = "band";

for (let i = 1; i <= 4; i++) {
    let word;
    if (i === 1) word = word1;
    else if (i === 2) word = word2;
    else if (i === 3) word = word3;
    else word = word4;
    
    if (word.length > 4) {
        console.log(word.toUpperCase());
    } else if (word.length < 4) {
        console.log(word.toLowerCase());
    } else {  // exactly 4 letters
        // Title case: first letter uppercase, rest lowercase
        let titleCase = word[0].toUpperCase() + word.slice(1).toLowerCase();
        console.log(titleCase);
    }
}