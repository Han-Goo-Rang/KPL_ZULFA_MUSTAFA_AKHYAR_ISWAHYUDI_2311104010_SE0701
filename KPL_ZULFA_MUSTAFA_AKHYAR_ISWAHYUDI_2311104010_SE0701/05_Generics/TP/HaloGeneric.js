class HaloGeneric {
  SapaUser(user) {
    console.log(`Hola~ ${user}`);
  }
}

function main() {
  const halo = new HaloGeneric();
  const namaPanggilan = "Bangjoule";
  halo.SapaUser(namaPanggilan);
}

main();
