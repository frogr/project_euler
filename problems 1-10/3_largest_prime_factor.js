// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

const primeFactors = n => {
  origNumber = n;
  const factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }
  if (n > 2) {
    factors.push(n);
  }
  console.log(`ALL PRIME FACTORS OF ${origNumber}: ${factors}`);
  answer = factors[factors.length - 1];
  console.log('LARGEST PRIME FACTOR:', answer);
  return answer;
};

primeFactors(600851475143);
