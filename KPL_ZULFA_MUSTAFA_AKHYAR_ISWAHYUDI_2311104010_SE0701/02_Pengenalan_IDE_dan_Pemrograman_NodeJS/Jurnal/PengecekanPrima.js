const readline = require("readline");

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function bagianC() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Masukkan angka (1-10000): ", (nString) => {
    const nInt = parseInt(nString);
    if (isNaN(nInt) || nInt < 1 || nInt > 10000) {
      console.log("Inputan mesti angka 1-1000. Lain dari itu tidak bisa");
    } else {
      if (isPrime(nInt)) {
        console.log(` ${nInt} itu bilangan prima`);
      } else {
        console.log(` ${nInt} bukan bilangan prima`);
      }
    }
    rl.close();
  });
}

bagianC();
