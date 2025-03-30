const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cekHuruf() {
  rl.question("Coba input 1 huruf aja: ", (huruf) => {
    huruf = huruf.toUpperCase();
    const vokal = ["A", "I", "U", "E", "O"];

    if (vokal.includes(huruf)) {
      console.log(` ${huruf} itu huruf vokal`);
    } else {
      console.log(` ${huruf} itu huruf konsonan`);
    }
    rl.close();
  });
}

if (require.main === module) {
  cekHuruf();
}

module.exports = cekHuruf;
