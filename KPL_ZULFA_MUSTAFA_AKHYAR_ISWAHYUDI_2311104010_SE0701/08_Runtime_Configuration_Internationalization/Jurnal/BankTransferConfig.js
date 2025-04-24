import fs from "fs";
const path = "bank_transfer_config.json";

class BankTransferConfig {
  constructor() {
    if (fs.existsSync(path)) {
      const data = fs.readFileSync(path);
      const json = JSON.parse(data);
      this.lang = json.lang;
      this.transfer = json.transfer;
      this.methods = json.methods;
      this.confirmation = json.confirmation;
    } else {
      this.lang = "en";
      this.transfer = {
        threshold: 25000000,
        low_fee: 6500,
        high_fee: 15000,
      };
      this.methods = ["RTO (real-time)", "SKN", "RTGS", "BI FAST"];
      this.confirmation = {
        en: "yes",
        id: "ya",
      };
      this.save();
    }
  }

  save() {
    const data = {
      lang: this.lang,
      transfer: this.transfer,
      methods: this.methods,
      confirmation: this.confirmation,
    };
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  }
}

export default BankTransferConfig;
