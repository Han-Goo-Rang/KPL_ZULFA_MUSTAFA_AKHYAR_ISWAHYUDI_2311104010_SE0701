class DataGeneric {
  constructor(data) {
    this.data = data;
  }

  PrintData() {
    console.log(`Data tersimpan: ${this.data}`);
  }
}

function main() {
  const nim = "2311104010";
  const data = new DataGeneric(nim);
  data.PrintData();
}

main();
