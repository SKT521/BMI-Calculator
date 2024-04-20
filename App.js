import React, { useState } from 'react';
import './App.css';

function BmiCalculator() {
    const [heightValue, setHeightValue] = useState('');
    const [weightValue, setWeightValue] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');

    const calculateBmi = () => {
        if(heightValue && weightValue)
        {
            const heightInMeters = heightValue / 100;
            const bmi = (weightValue / (heightInMeters * heightInMeters));
            setBmiValue(bmi);

            let message = '';
            if (bmi < 18.5) {
                message = 'You are Underweight';
            }
            else if (bmi >= 18.5 && bmi <25)
            {
                message = ' You are Normal weight';
            }
            else if (bmi >= 25 && bmi < 30 )
            {
                message = 'You are Obese';
            }
            setBmiMessage(message);
        }
        else
        {
            setBmiValue('');
            setBmiMessage('');
        }
    }
};

return (
    <div className = "container">
        <h1> SKT's BMI Calculator </h1>
        <div className = "input-container">
            <label htmlFor = "height"> Enter YOur Height (cm):</label>
            <input 
                type = "number"
                id = "height"
                value = {heightValue}
                onChange ={(e) => setHeightValue(e.target.value)}
            />
        </div>
        <div className = "input-container">
            <label htmlFor="weight"> Enter Your Weight (kg):</label>
            <input  
                type = "number"
                id = "weight"
                value = {weightValue}
                onChange = {(e) => setWeightValue(e.target.value)}
            />
        </div>
        <button className = "calculate-btn" onCLick={calculateBmi}>
            Click to Calculate
        </button>
    </div>
)