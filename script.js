const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

function calculateBMI() {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.textContent = 'Please enter valid height and weight.';
    return;
  }

  const bmi = weight / ((height / 100) * (height / 100));
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
