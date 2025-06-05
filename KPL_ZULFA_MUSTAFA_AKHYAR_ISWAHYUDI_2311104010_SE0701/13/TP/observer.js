// Subject
class WeatherStation {
    constructor() {
        this.observers = [];
        this.temperature = 0;
    }

    attach(observer) {
        this.observers.push(observer);
    }

    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update(this.temperature));
    }

    setTemperature(temp) {
        console.log(`Suhu berubah menjadi ${temp}°C`);
        this.temperature = temp;
        this.notify();
    }
}

// Observer
class TemperatureDisplay {
    update(temp) {
        console.log(`[Display] Suhu saat ini: ${temp}°C`);
    }
}

class TemperatureLogger {
    update(temp) {
        console.log(`[Logger] Mencatat suhu: ${temp}°C`);
    }
}

// Main method simulasi
const station = new WeatherStation();
const display = new TemperatureDisplay();
const logger = new TemperatureLogger();

// Menambahkan observer
station.attach(display);
station.attach(logger);

// Mengubah suhu
station.setTemperature(25);
station.setTemperature(30);
