// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

const primeFactors = n => {
  while (n % 2 === 0) {
    console.log('2');
    n = n / 2;
  }
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      console.log(i);
      n = n / i;
    }
  }
  if (n > 2) {
    console.log(n);
  }
  return n;
};

primeFactors(600851475143);
