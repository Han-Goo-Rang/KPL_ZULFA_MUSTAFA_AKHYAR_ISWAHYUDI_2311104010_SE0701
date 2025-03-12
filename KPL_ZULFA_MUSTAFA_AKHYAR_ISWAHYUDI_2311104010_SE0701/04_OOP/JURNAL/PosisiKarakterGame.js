const readline = require("readline");

class PosisiKarakterGame {
  constructor() {
    this.currentState = "Berdiri";
    console.log("State awal:", this.currentState);
  }

  ubahState(newState) {
    if (this.currentState !== newState) {
      console.log(`Transisi dari ${this.currentState} ke ${newState}`);
      this.currentState = newState;

      if (newState === "Berdiri") {
        console.log("posisi standby");
      } else if (newState === "Tengkurap") {
        console.log("posisi istirahat");
      }
    }
  }

  run() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log("\n=== Simulasi PosisiKarakterGame ===");
    rl.question("Masukkan state baru (Berdiri/Tengkurap): ", (state1) => {
      this.ubahState(state1);
      rl.question(
        "Masukkan state baru berikutnya (Berdiri/Tengkurap): ",
        (state2) => {
          this.ubahState(state2);
          rl.close();
        }
      );
    });
  }
}

module.exports = PosisiKarakterGame;

if (require.main === module) {
  const pg = new PosisiKarakterGame();
  pg.run();
}
