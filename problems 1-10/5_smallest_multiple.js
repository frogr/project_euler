// 2520 is the smallest number that can be divided
// by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by
// all of the numbers from 1 to 20?

const main = () => {
  // let value = 232595000; // i happen to know the answer is 232792560 but we can't actually iterate from 2520 to find that, this is the lowest number we can start from to use this 'brute force' approach
  let value = 232792500;
  let array = [];
  return checkDivisible(value, array);
};

const checkDivisible = (value, array) => {
  console.log(value);
  for (let i = 1; i < 21; i++) {
    if (value % i === 0) {
      array.push(true);
    } else {
      array.push(false);
    }
  }
  console.log(array);
  return search(value, array);
};

const search = (value, array) => {
  if (checkEqual(array) === true) {
    console.log(
      'Smallest positive number evenly divisible by the range:',
      value
    );
    return array;
  } else {
    value += 5; // increase our value by the upper boundary of our search range before the recursive call
    array = []; // empty the array so that we can restart the function with a new array
    return checkDivisible(value, array);
  }
};

const checkEqual = arr => {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
};

main();
