let words = ["amina", "sun", "band", "terrorist", "anunoby", "sin"];

for (let word of words) {
    if (word.length > 4) {
        console.log(word.toUpperCase());
    } else if (word.length < 4) {
        console.log(word.toLowerCase());
    } else {
        console.log(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
}