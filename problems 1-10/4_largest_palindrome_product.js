// A palindromic number reads the same both ways. The largest palindrome
// made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

const palindromeProduct = n => {
  n = n + '';
  reverse = n
    .split('')
    .reverse()
    .join('');
  if (n === reverse) {
    console.log('true');
  } else {
    console.log('false');
  }
};

palindromeProduct(9009); // true
// palindromeProduct(9209); // false
