import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Siapa namamu, Bang? ", (nama) => {
    input.question("Jurusanmu apa Bang? ", (jurusan) => {
        input.question("Kuliah di kampus mana Bang? ", (kampus) => {
            input.question("Umur berapa bang? ", (umur) => {
                console.info(`\nHalo Bang ${nama}`,);
                console.info(`Kamu dari jurusan ${jurusan}, berkuliah di ${kampus}, dan berusia ${umur} tahun.`);

                input.close();
            });
        });
    });
});