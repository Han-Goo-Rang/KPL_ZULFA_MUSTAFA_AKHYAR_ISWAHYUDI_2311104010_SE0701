const readline = require("readline");

class KodeBuah {
  constructor() {
    // Tabel data buah -> kode buah
    this.dataKodeBuah = {
      Apel: "A00",
      Aprikot: "B00",
      Alpukat: "C00",
      Pisang: "D00",
      Paprika: "E00",
      Kurma: "K00",
      Durian: "L00",
      Anggur: "M00",
      Melon: "N00",
      Semangka: "O00",
    };
  }

  getKodeBuah(namaBuah) {
    return this.dataKodeBuah[namaBuah] || "Kode buah tidak ditemukan";
  }

  // Method untuk menangani input-output secara mandiri
  run() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Masukkan nama buah: ", (namaBuah) => {
      console.log("Kode Buah:", this.getKodeBuah(namaBuah));
      rl.close();
    });
  }
}

module.exports = KodeBuah;

// Jika file ini dieksekusi langsung (misal: `node KodeBuah.js`)
if (require.main === module) {
  const kb = new KodeBuah();
  kb.run();
}
