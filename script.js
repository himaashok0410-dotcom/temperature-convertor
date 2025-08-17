function convertTemp() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unit").value;
    let result = "";

    if (isNaN(temp)) {
        result = "❌ Please enter a valid number!";
    } else {
        switch (unit) {
            case "c-f":
                result = `${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F`;
                break;
            case "f-c":
                result = `${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C`;
                break;
            case "c-k":
                result = `${temp}°C = ${(temp + 273.15).toFixed(2)}K`;
                break;
            case "k-c":
                result = `${temp}K = ${(temp - 273.15).toFixed(2)}°C`;
                break;
            case "f-k":
                result = `${temp}°F = ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
                break;
            case "k-f":
                result = `${temp}K = ${(((temp - 273.15) * 9/5) + 32).toFixed(2)}°F`;
                break;
            default:
                result = "❌ Please select a valid conversion!";
        }
    }

    document.getElementById("result").innerText = result;
}

