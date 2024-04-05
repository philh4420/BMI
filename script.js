document.addEventListener('DOMContentLoaded', function () {
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const calculateBtn = document.getElementById('calculateBtn');
  const resultDiv = document.getElementById('result');

  function calculateBMI() {
    const heightValue = parseFloat(heightInput.value);
    const weightValue = parseFloat(weightInput.value);
    const heightUnit = document.querySelector('#height + select').value;
    const weightUnit = document.querySelector('#weight + select').value;

    // Convert height to meters
    let heightInMeters;
    switch (heightUnit) {
      case 'cm':
        heightInMeters = heightValue / 100;
        break;
      case 'm':
        heightInMeters = heightValue;
        break;
      case 'ft':
        heightInMeters = heightValue * 0.3048;
        break;
      case 'in':
        heightInMeters = heightValue * 0.0254;
        break;
      default:
        heightInMeters = heightValue;
    }

    // Convert weight to kilograms
    let weightInKg;
    switch (weightUnit) {
      case 'kg':
        weightInKg = weightValue;
        break;
      case 'lb':
        weightInKg = weightValue * 0.453592;
        break;
      case 'stone':
        weightInKg = weightValue * 6.35029;
        break;
      default:
        weightInKg = weightValue;
    }

    if (isNaN(heightInMeters) || isNaN(weightInKg)) {
      resultDiv.textContent = 'Please enter valid height and weight.';
      return;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    let bmiCategory = '';

    if (bmi < 16) {
      bmiCategory = 'Severely underweight';
    } else if (bmi >= 16 && bmi <= 16.9) {
      bmiCategory = 'Moderately underweight';
    } else if (bmi >= 17 && bmi <= 18.4) {
      bmiCategory = 'Mildly underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiCategory = 'Overweight';
    } else if (bmi >= 30 && bmi <= 34.9) {
      bmiCategory = 'Obesity Class I (Moderate)';
    } else if (bmi >= 35 && bmi <= 39.9) {
      bmiCategory = 'Obesity Class II (Severe)';
    } else {
      bmiCategory = 'Obesity Class III (Very severe or morbidly obese)';
    }

    resultDiv.innerHTML = `
        <p>Your BMI is: <strong>${bmi.toFixed(2)}</strong></p>
        <p>You are categorized as: <strong>${bmiCategory}</strong></p>
    `;
  }

  calculateBtn.addEventListener('click', calculateBMI);
});
