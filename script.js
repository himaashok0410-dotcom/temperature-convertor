document.getElementById("convertBtn").addEventListener("click", function () {
    let inputTemp = parseFloat(document.getElementById("inputTemp").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let result = 0;

    if (isNaN(inputTemp)) {
        document.getElementById("result").innerText = "⚠️ Please enter a valid number!";
        return;
    }

    // Step 1: Convert input to Celsius
    if (fromUnit === "Celsius") {
        result = inputTemp;
    } else if (fromUnit === "Fahrenheit") {
        result = (inputTemp - 32) * 5 / 9;
    } else if (fromUnit === "Kelvin") {
        result = inputTemp - 273.15;
    }

    // Step 2: Convert Celsius to target unit
    if (toUnit === "Celsius") {
        result = result;
    } else if (toUnit === "Fahrenheit") {
        result = (result * 9 / 5) + 32;
    } else if (toUnit === "Kelvin") {
        result = result + 273.15;
    }

    document.getElementById("result").innerText = 
        `✅ Converted Value: ${result.toFixed(2)} ${toUnit}`;
});
