const { cariTandaBilangan } = require('./script');

test('test bilangan negatif', () => {
    expect(cariTandaBilangan(-5)).toBe("Negatif");
});

test('test bilangan positif', () => {
    expect(cariTandaBilangan(5)).toBe("Positif");
});

test('test bilangan nol', () => {
    expect(cariTandaBilangan(0)).toBe("Nol");
});