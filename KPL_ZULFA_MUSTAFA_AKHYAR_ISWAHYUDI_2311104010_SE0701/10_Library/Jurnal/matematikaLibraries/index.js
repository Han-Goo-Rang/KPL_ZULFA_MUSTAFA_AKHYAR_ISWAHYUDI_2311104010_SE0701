
module.exports = {
  FPB: function (a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  },

  KPK: function (a, b) {
    return Math.abs(a * b) / this.FPB(a, b);
  },

  Turunan: function (persamaan) {
    const turunan = [];
    for (let i = 0; i < persamaan.length - 1; i++) {
      turunan.push(persamaan[i] * (persamaan.length - i - 1));
    }
    return turunan
      .map((coef, idx) => `${coef}x${persamaan.length - idx - 2}`)
      .join(' + ')
      .replace(/x0/g, '');
  },

  Integral: function (persamaan) {
    const integral = [];
    for (let i = 0; i < persamaan.length; i++) {
      integral.push(persamaan[i] / (persamaan.length - i));
    }
    return integral
      .map((coef, idx) => `${coef}x${persamaan.length - idx}`)
      .join(' + ') + ' + C';
  }
};
