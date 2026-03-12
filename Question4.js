let words = ["Amina", "Sun", "Band", "Terrorist", "Anunoby", "suns"];

for (let word of words) {
    if (word.length > 4) {
        console.log(word.toUpperCase());
    } else if (word.length < 4) {
        console.log(word.toLowerCase());
    } else { // exactly 4 letters
        console.log(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
}