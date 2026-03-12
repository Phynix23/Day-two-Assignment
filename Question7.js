let name1 = "able", name2 = "temple", name3 = "simple", name4 = "playful", name5 = "olivia", name6 = "amina";

for (let i = 1; i <= 6; i++) {
  let name; 
  if (i === 1) name = name1;
  else if (i === 2) name = name2;
  else if (i === 3) name = name3;
  else if (i === 4) name = name4;
  else if (i === 5) name = name5;
  else name = name6;

  let firstLetter = name[0].toLowerCase();
  if (name.length > 3 && 
      (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u')) {
        console.log(name)
      }
}