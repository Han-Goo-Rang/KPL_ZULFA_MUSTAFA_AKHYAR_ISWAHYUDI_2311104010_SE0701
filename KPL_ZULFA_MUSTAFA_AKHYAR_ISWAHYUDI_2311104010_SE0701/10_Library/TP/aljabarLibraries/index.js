
module.exports = {
  AkarPersamaanKuadrat: function(persamaan) {
    const [a, b, c] = persamaan;
    const diskriminan = b * b - 4 * a * c;

    if (diskriminan < 0) {
      return []; // Tidak ada akar real
    }

    const akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
    const akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a);

    return [akar1, akar2];
  },

  HasilKuadrat: function(persamaan) {
    const [a, b] = persamaan;
    return [a * a, 2 * a * b, b * b];
  }
};
