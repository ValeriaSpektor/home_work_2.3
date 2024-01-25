let scores = [85, 72, 94, 68, 57, 89, 78, 63, 91, 75, 82, 96, 70, 88, 60, 79, 67, 93, 74, 86, 55, 97, 81, 69];

for (let i = 0; i < scores.length - 1; i++) {
  console.log("_____new iteration");
  for (let j = 0; j < scores.length - 1 - i; j++) {
    console.log(`comparing pair ${scores[j]} and ${scores[j + 1]}`);
    console.log(`comparing indices ${j} and ${j + 1}`);
    console.log(`working with array ${scores}`);
    
    if (scores[j] < scores[j + 1]) {
      
      let temp = scores[j];
      scores[j] = scores[j + 1];
      scores[j + 1] = temp;
    }

    console.log(`intermediate array ${scores}`);
  }
}


console.log("Sorted array:", scores);