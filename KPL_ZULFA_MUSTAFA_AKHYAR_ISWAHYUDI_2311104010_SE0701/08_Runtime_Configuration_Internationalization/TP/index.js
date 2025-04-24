import readline from "readline";
import CovidConfig from "./covidConfig.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const config = new CovidConfig();

console.log(`Satuan suhu saat ini: ${config.satuan_suhu}`);
rl.question(
  `Berapa suhu badan anda saat ini? Dalam ${config.satuan_suhu}: `,
  (suhuInput) => {
    rl.question(
      "Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ",
      (hariInput) => {
        const suhu = parseFloat(suhuInput);
        const hari = parseInt(hariInput);
        let suhuNormal = false;

        if (config.satuan_suhu === "celcius") {
          suhuNormal = suhu >= 36.5 && suhu <= 37.5;
        } else if (config.satuan_suhu === "fahrenheit") {
          suhuNormal = suhu >= 97.7 && suhu <= 99.5;
        }

        const hariValid = hari < config.batas_hari_deman;

        if (suhuNormal && hariValid) {
          console.log(config.pesan_diterima);
        } else {
          console.log(config.pesan_ditolak);
        }

        config.ubahSatuan();
        console.log(`Satuan suhu telah diubah ke: ${config.satuan_suhu}`);
        rl.close();
      }
    );
  }
);
