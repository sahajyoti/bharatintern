document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertButton = document.getElementById("convertButton");
    const resetButton = document.getElementById("resetButton");

    convertButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            fahrenheitInput.value = fahrenheit.toFixed(2);
        }
    });

    resetButton.addEventListener("click", function () {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
    });
});
