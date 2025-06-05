class PusatDataSingleton {
  static instance = null;

  constructor() {
    this.data = [];
  }

  static getInstance() {
    if (PusatDataSingleton.instance === null) {
      PusatDataSingleton.instance = new PusatDataSingleton();
    }
    return PusatDataSingleton.instance;
  }

  addData(input) {
    this.data.push(input);
  }

  printAllData() {
    this.data.forEach((data, index) => {
      console.log(`Item ${index}: ${data}`);
    });
  }

  removeData(index) {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    }
  }

  getData() {
    return this.data;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const txtInput = document.getElementById('txtInput');
  const btnAdd = document.getElementById('btnAdd');
  const lblResult = document.getElementById('lblResult');

  const dataManager = PusatDataSingleton.getInstance();

  btnAdd.addEventListener('click', () => {
    const name = txtInput.value;
    dataManager.addData(name);
    lblResult.value = dataManager.getData().join(', ');
    txtInput.value = '';
  });
});