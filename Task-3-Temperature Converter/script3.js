function convertTemperature() {
  var temperatureInput = document.getElementById("temperature-input");
  var temperature = parseFloat(temperatureInput.value);
  if (isNaN(temperature)) {
    alert("Please enter a valid number");
    return;
  }
  var unitSelect = document.getElementById("unit-select");
  var selectedUnit = unitSelect.value;
  var fahrenheit, celsius, kelvin;
  if (selectedUnit === "celsius") {
    celsius = temperature;
    fahrenheit = (celsius * 9/5) + 32;
    kelvin = celsius + 273.15;
  } else if (selectedUnit === "fahrenheit") {
    fahrenheit = temperature;
    celsius = (fahrenheit - 32) * 5/9;
    kelvin = (fahrenheit - 32) * 5/9 + 273.15;
  }
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Celsius: " + celsius.toFixed(2) + "°C<br>" +
                             "Fahrenheit: " + fahrenheit.toFixed(2) + "°F<br>" +
                             "Kelvin: " + kelvin.toFixed(2) + "K";
}