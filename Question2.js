let scores = [85, 92, 67, 78, 45];

for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    let grade;
    
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    console.log(`Student ${i + 1}: Score ${score} - Grade ${grade}`);
}