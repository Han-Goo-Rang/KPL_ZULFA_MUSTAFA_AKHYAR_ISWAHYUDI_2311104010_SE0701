import fs from "fs";

class GlossaryItem2311104010 {
  static ReadJSON() {
    const rawData = fs.readFileSync(
      "./JSON_Collection/jurnal7_3_2311104010.json"
    );
    const data = JSON.parse(rawData);
    const entry = data.glossary.GlossDiv.GlossList.GlossEntry;

    console.log("Glossary Entry:");
    console.log(`ID         : ${entry.ID}`);
    console.log(`SortAs     : ${entry.SortAs}`);
    console.log(`GlossTerm  : ${entry.GlossTerm}`);
    console.log(`Acronym    : ${entry.Acronym}`);
    console.log(`Abbrev     : ${entry.Abbrev}`);
    console.log(`Definition : ${entry.GlossDef.para}`);
    console.log(`GlossSeeAlso: ${entry.GlossDef.GlossSeeAlso.join(", ")}`);
    console.log(`GlossSee   : ${entry.GlossSee}`);
  }
}

export default GlossaryItem2311104010;
