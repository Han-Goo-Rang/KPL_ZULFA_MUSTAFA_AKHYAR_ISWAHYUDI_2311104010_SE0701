// Uji function dari file script.js
const { cariNilaiPangkat } = require('./script.js');

test('test bilangan b negatif', () => {
    expect(cariNilaiPangkat(5, -3)).toBe(-1);
});

test('test bilangan b nol', () => {
    expect(cariNilaiPangkat(0, 0)).toBe(1);
});

test('test batas maksimal', () => {
    expect(cariNilaiPangkat(101, 5)).toBe(-2);
});

test('test overflow', () => {
    expect(cariNilaiPangkat(2, 31)).toBe(-3);
});

test('test pangkat normal', () => {
    expect(cariNilaiPangkat(2, 3)).toBe(8);
});

// Menguji kode DOM
test('test DOM', () => {
    const txtInputA = document.getElementById('txtInputA');
    const txtInputB = document.getElementById('txtInputB');
    const btnCalculate = document.getElementById('btnCalculate');
    const lblResult = document.getElementById('lblResult');

    txtInputA.value = '2';
    txtInputB.value = '3';
    btnCalculate.click();

    expect(lblResult.value).toBe('8');
});