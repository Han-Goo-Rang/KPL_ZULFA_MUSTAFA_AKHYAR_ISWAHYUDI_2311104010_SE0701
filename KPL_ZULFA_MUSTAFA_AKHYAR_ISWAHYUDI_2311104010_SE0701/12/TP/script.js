document.addEventListener('DOMContentLoaded', () => {
    const txtInput = document.getElementById('txtInput');
    const btnCheck = document.getElementById('btnCheck');
    const lblResult = document.getElementById('lblResult');

    // Method untuk menentukan tanda bilangan
    function cariTandaBilangan(a) {
        if (a < 0) return "Negatif";
        if (a > 0) return "Positif";
        return "Nol";
    }

    // Event handler untuk tombol
    btnCheck.addEventListener('click', () => {
        const input = txtInput.value;
        const parsedInput = parseInt(input);

        if (!isNaN(parsedInput)) {
            lblResult.value = cariTandaBilangan(parsedInput);
        } else {
            lblResult.value = "Input tidak valid";
        }
    });
});