const readline = require("readline");

function Namaewa() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Masukkin nama kami: ", (nama) => {
    console.log(`welkom, ${nama}!`);
    rl.close();
  });
}

Namaewa();
