function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;

    if (isNaN(inputValue)) {
        document.getElementById('result').textContent = "Please enter a valid number";
        return;
    }

    if (inputUnit === outputUnit) {
        result = inputValue;
    } else if (inputUnit === 'Celsius') {
        if (outputUnit === 'Fahrenheit') {
            result = (inputValue * 9/5) + 32;
        } else if (outputUnit === 'Kelvin') {
            result = inputValue + 273.15;
        }
    } else if (inputUnit === 'Fahrenheit') {
        if (outputUnit === 'Celsius') {
            result = (inputValue - 32) * 5/9;
        } else if (outputUnit === 'Kelvin') {
            result = (inputValue - 32) * 5/9 + 273.15;
        }
    } else if (inputUnit === 'Kelvin') {
        if (outputUnit === 'Celsius') {
            result = inputValue - 273.15;
        } else if (outputUnit === 'Fahrenheit') {
            result = (inputValue - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById('result').textContent = `Result: ${result} ${outputUnit}`;
}
