const pickerWheel = document.getElementById('pickerWheel');
const spinBtn = document.getElementById('spinBtn');
const resultDisplay = document.getElementById('result');
const option1Input = document.getElementById('option1Input');
const option2Input = document.getElementById('option2Input');

// Function to generate a random angle for spinning
function getRandomRotation() {
    return Math.floor(Math.random() * 360) + 3600; 
}

// Function to spin the wheel
function spinWheel() {
    spinBtn.disabled = true;
    const spinAngle = getRandomRotation();
    pickerWheel.style.transition = 'transform 3s ease-out';
    pickerWheel.style.transform = `rotate(${spinAngle}deg)`;

    resultDisplay.textContent = '';

    setTimeout(() => {
        spinBtn.disabled = false;
        const winner = calculateWinner(spinAngle);

        resultDisplay.textContent = `The winner is ${winner === 1 ? option1Input.value : option2Input.value}`;
    }, 3000);
}
function calculateWinner(angle) {
    const normalizedAngle = (angle % 360 + 360) % 360;

    const segmentAngles = [0, 180]; 

    for (let i = 0; i < segmentAngles.length; i++) {
        if (normalizedAngle < segmentAngles[i]) {
            return i + 1; 
        }
    }
    return 1; 
}
spinBtn.addEventListener('click', spinWheel);
