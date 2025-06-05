// Subject class: WeatherStation
class WeatherStation {
  constructor() {
    this.observers = [];      // Menyimpan daftar observer
    this.temperature = 0;     // Menyimpan suhu saat ini
  }

  // Menambahkan observer
  attach(observer) {
    this.observers.push(observer);
  }

  // Menghapus observer
  detach(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Memberi tahu semua observer
  notify() {
    this.observers.forEach((observer) => {
      observer.update(this.temperature);
    });
  }

  // Mengubah suhu dan memicu notifikasi
  setTemperature(temp) {
    console.log(`📡 Suhu berubah menjadi ${temp}°C`);
    this.temperature = temp;
    this.notify();
  }
}

// Observer class: TemperatureDisplay
class TemperatureDisplay {
  // Method yang dipanggil saat subject berubah
  update(temp) {
    console.log(`🌡️ [Display] Suhu saat ini: ${temp}°C`);
  }
}

// Observer class: TemperatureLogger
class TemperatureLogger {
  update(temp) {
    console.log(`📝 [Logger] Mencatat suhu: ${temp}°C`);
  }
}

// Simulasi penggunaan di main method
const weatherStation = new WeatherStation();
const display = new TemperatureDisplay();
const logger = new TemperatureLogger();

// Mendaftarkan observer ke subject
weatherStation.attach(display);
weatherStation.attach(logger);

// Mengubah suhu
weatherStation.setTemperature(26);
weatherStation.setTemperature(31);
