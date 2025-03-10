class KodePos {
  static kodePosDict = {
    batununggal: 40266,
    kujangsari: 40287,
    mengger: 40267,
    wates: 40256,
    cijaura: 40287,
    jatisari: 40286,
    margasari: 40286,
    sekejati: 40286,
    kebonwaru: 40272,
    maleer: 40274,
    samoja: 40273,
  };

  static getKodePos(kelurahan) {
    return (
      this.kodePosDict[kelurahan.toLowerCase()] || "Kode pos tidak ditemukan"
    );
  }

  static getListKelurahan() {
    return Object.keys(this.kodePosDict).map(
      (kelurahan) => kelurahan.charAt(0).toUpperCase() + kelurahan.slice(1)
    );
  }
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Daftar Kelurahan:");
console.log(KodePos.getListKelurahan().join(", "));

readline.question("Masukkan nama kelurahan: ", (kelurahan) => {
  console.log(`Kode Pos ${kelurahan}: ${KodePos.getKodePos(kelurahan)}`);
  readline.close();
});
