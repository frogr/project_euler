// A palindromic number reads the same both ways. The largest palindrome
// made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

// brute force approach to finding the palindromes

const palindromeProduct = n => {
  let left, right;
  left = 999;
  right = 999;
  const palindromes = [];
  while (left > 0) {
    let answer = left * right;
    console.log(answer);
    if (checkPalindrome(answer) === true) {
      palindromes.push(answer);
    }
    right--;
    if (right < 700) {
      right = 999;
      left--;
    }
  }
  console.log(palindromes);
  console.log('Largest palindrome: ', palindromes[0]);
  return palindromes[0];
};

const checkPalindrome = n => {
  n = n + '';
  reverse = n
    .split('')
    .reverse()
    .join('');
  if (n === reverse) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
};

palindromeProduct();
