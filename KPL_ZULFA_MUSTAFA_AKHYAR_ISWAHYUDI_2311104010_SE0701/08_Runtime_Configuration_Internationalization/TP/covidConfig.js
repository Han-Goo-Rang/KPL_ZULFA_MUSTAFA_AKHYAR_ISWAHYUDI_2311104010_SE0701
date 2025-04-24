import fs from "fs";
const path = "covid_config.json";

class CovidConfig {
  constructor() {
    if (fs.existsSync(path)) {
      const data = fs.readFileSync(path);
      const json = JSON.parse(data);
      this.satuan_suhu = json.satuan_suhu;
      this.batas_hari_deman = json.batas_hari_deman;
      this.pesan_ditolak = json.pesan_ditolak;
      this.pesan_diterima = json.pesan_diterima;
    } else {
      this.satuan_suhu = "celcius";
      this.batas_hari_deman = 14;
      this.pesan_ditolak = "Anda tidak diperbolehkan masuk ke dalam gedung ini";
      this.pesan_diterima =
        "Anda dipersilahkan untuk masuk ke dalam gedung ini";
      this.save();
    }
  }

  save() {
    fs.writeFileSync(
      path,
      JSON.stringify(
        {
          satuan_suhu: this.satuan_suhu,
          batas_hari_deman: this.batas_hari_deman,
          pesan_ditolak: this.pesan_ditolak,
          pesan_diterima: this.pesan_diterima,
        },
        null,
        2
      )
    );
  }

  ubahSatuan() {
    this.satuan_suhu =
      this.satuan_suhu === "celcius" ? "fahrenheit" : "celcius";
    this.save();
  }
}

export default CovidConfig;
