let text = "Hello Rad five Hub"
let vowels = ""
let consonant = "";

console.log("original text:" + text);

for (let i =0; i < text.length; i++) {
  let char = text.charAt(i).toLowerCase();

  if (char >= 'a' && char <= 'z') {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      vowels = vowels + char;
    } else {
      consonant = consonant + char;
    }
  }
}

console.log("vowels:" + vowels)
console.log("consonant:" + consonant);