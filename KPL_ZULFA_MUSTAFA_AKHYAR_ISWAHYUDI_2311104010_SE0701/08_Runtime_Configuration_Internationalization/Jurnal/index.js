import readline from "readline";
import BankTransferConfig from "./BankTransferConfig.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const config = new BankTransferConfig();
const isLangEN = config.lang === "en";

const tanyaJumlah = isLangEN
  ? "Please insert the amount of money to transfer: "
  : "Masukkan jumlah uang yang akan di-transfer: ";

rl.question(tanyaJumlah, (jumlahInput) => {
  const jumlah = parseFloat(jumlahInput);
  const fee =
    jumlah <= config.transfer.threshold
      ? config.transfer.low_fee
      : config.transfer.high_fee;
  const total = jumlah + fee;

  if (isLangEN) {
    console.log(`Transfer fee = ${fee}`);
    console.log(`Total amount = ${total}`);
    console.log("Select transfer method:");
  } else {
    console.log(`Biaya transfer = ${fee}`);
    console.log(`Total biaya = ${total}`);
    console.log("Pilih metode transfer:");
  }

  config.methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });

  const tanyaMetode = isLangEN
    ? "Choose transfer method (1-4): "
    : "Pilih metode transfer (1-4): ";

  rl.question(tanyaMetode, (methodChoice) => {
    const selectedIndex = parseInt(methodChoice) - 1;
    const selectedMethod = config.methods[selectedIndex];

    if (!selectedMethod) {
      console.log(
        isLangEN ? "Invalid method selected!" : "Metode tidak valid!"
      );
      rl.close();
      return;
    }

    console.log(
      isLangEN
        ? `You chose: ${selectedMethod}`
        : `Anda memilih: ${selectedMethod}`
    );

    const confirmText = isLangEN
      ? `Please type "${config.confirmation.en}" to confirm the transaction: `
      : `Ketik "${config.confirmation.id}" untuk mengkonfirmasi transaksi: `;

    rl.question(confirmText, (confirmationInput) => {
      const isConfirmed = isLangEN
        ? confirmationInput === config.confirmation.en
        : confirmationInput === config.confirmation.id;

      if (isConfirmed) {
        console.log(
          isLangEN ? "The transfer is completed" : "Proses transfer berhasil"
        );
      } else {
        console.log(isLangEN ? "Transfer is cancelled" : "Transfer dibatalkan");
      }

      rl.close();
    });
  });
});
