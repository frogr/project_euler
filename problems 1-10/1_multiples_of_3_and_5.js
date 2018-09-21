// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

const sum = (acc, cur) => {
  return acc + cur;
};

const multiplesOf3and5 = () => {
  const multiples = [];
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  const answer = multiples.reduce(sum);
  console.log(`ANSWER: ${answer}`);
  return answer;
};

multiplesOf3and5();
