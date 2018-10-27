const fivaa = (amount) => {
  const leftNumbers = amount - 1;
  const rightNumbers = amount + 1;
  let str = leftNumbers.toString() + leftNumbers.toString();

  if (amount > 0) {
    for (let i = 0; i < amount; i++) {
      str += rightNumbers.toString()
    }
    return fivaa(amount - 1);
  }
}

console.log(fivaa(5));
