import DataMahasiswa from "./src/DataMahasiswa.js";
import AnggotaTim from "./src/AnggotaTim.js";
import GlossaryItem from "./src/GlossaryItem.js";

async function main() {
  //await DataMahasiswa.ReadJSON();
  //await AnggotaTim.ReadJSON();
  await GlossaryItem.ReadJSON();
}

main();
