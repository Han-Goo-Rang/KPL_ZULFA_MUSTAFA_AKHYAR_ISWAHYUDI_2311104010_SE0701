class DoorMachine {
  constructor() {
    this.state = "Terkunci";
    console.log("Pintu terkunci");
  }

  bukaPintu() {
    if (this.state === "Terkunci") {
      console.log("Pintu masih terkunci! Tidak bisa dibuka.");
    } else {
      this.state = "Terbuka";
      console.log("Pintu tidak terkunci");
    }
  }

  kunciPintu() {
    if (this.state === "Terbuka") {
      this.state = "Terkunci";
      console.log("Pintu terkunci");
    } else {
      console.log("Pintu sudah terkunci!");
    }
  }

  toggleKunci() {
    if (this.state === "Terkunci") {
      this.state = "Terbuka";
      console.log("Pintu tidak terkunci");
    } else {
      this.state = "Terkunci";
      console.log("Pintu terkunci");
    }
  }
}

// Simulasi perubahan state
const door = new DoorMachine();
door.toggleKunci();
door.bukaPintu();
door.kunciPintu();
door.bukaPintu();
