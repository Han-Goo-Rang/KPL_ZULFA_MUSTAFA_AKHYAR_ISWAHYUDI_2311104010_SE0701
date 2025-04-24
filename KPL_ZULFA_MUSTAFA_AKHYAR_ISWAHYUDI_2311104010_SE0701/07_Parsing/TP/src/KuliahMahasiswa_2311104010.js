import fs from "fs";

class KuliahMahasiswa_2311104010 {
  static ReadJSON() {
    const rawData = fs.readFileSync("./src/tp7_2_2311104010.json");
    const data = JSON.parse(rawData);

    console.log("Daftar mata kuliah yang diambil:");
    data.courses.forEach((mk, index) => {
      console.log(`MK ${index + 1} ${mk.code} - ${mk.name}`);
    });
  }
}

export default KuliahMahasiswa_2311104010;
