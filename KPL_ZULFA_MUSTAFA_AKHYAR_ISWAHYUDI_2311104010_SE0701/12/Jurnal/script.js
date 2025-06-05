// Fungsi function cariNilaiPangkat di file script.js
function cariNilaiPangkat(a, b) {
    if (b === 0) return 1;
    if (b < 0) return -1;
    if (b > 10 || a > 100) return -2;

    let result = 1;
    for (let i = 1; i <= b; i++) {
        result *= a;
        if (result < 0) return -3;
    }
    return result;
}

// Kode DOM dan event listener lainnya
document.addEventListener('DOMContentLoaded', () => {
    const txtInputA = document.getElementById('txtInputA');
    const txtInputB = document.getElementById('txtInputB');
    const btnCalculate = document.getElementById('btnCalculate');
    const lblResult = document.getElementById('lblResult');

    btnCalculate.addEventListener('click', () => {
        const a = parseInt(txtInputA.value);
        const b = parseInt(txtInputB.value);
        lblResult.value = cariNilaiPangkat(a, b);
    });
});