// 2520 is the smallest number that can be divided
// by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by
// all of the numbers from 1 to 20?

const smallestMultiple = () => {
  let start = 2520;
  for (let i = 1; i <= 10; i++) {
    if (start % i == 0) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }
  return;
};

smallestMultiple();
