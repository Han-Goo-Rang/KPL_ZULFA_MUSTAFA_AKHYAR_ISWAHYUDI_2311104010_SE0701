import fs from "fs";

class Mahasiswa2311104010 {
  static ReadJSON() {
    const rawData = fs.readFileSync(
      "./JSON_Collection/jurnal7_1_2311104010.json"
    );
    const data = JSON.parse(rawData);

    const fullName = `${data.firstName} ${data.lastName}`;
    const address = `${data.address.streetAddress}, ${data.address.city}, ${data.address.state}`;

    console.log("Data Mahasiswa:");
    console.log(`Nama      : ${fullName}`);
    console.log(`Gender    : ${data.gender}`);
    console.log(`Umur      : ${data.age}`);
    console.log(`Alamat    : ${address}`);
    console.log("Mata Kuliah:");

    data.courses.forEach((course, index) => {
      console.log(`  ${index + 1}. ${course.code} - ${course.name}`);
    });
  }
}

export default Mahasiswa2311104010;
