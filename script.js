// Initialize Flatpickr
flatpickr("#dobDate", {
    dateFormat: "Y-m-d", // Format: YYYY-MM-DD
    maxDate: "today",    // Disable future dates
    defaultDate: null,   // No default date
});

// Existing functionality
let disBlock = document.getElementById('disBlock');
let age = document.getElementById('age');
let dobDate = document.getElementById('dobDate');
let calcBtn = document.getElementById('calcBtn');
let resetBtn = document.getElementById('resetBtn');

disBlock.style.display = 'none';

function calculate() {
    disBlock.style.display = 'block';
    let dobVal = dobDate.value;
    if (!dobVal) {
        age.innerHTML = "Please enter a valid date!";
        return;
    }

    let dob = new Date(dobVal);
    let now = new Date();

    let diffInSeconds = Math.floor((now - dob) / 1000);
    let years = Math.floor(diffInSeconds / (365 * 24 * 60 * 60));
    let months = Math.floor((diffInSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
    let days = Math.floor((diffInSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    let seconds = diffInSeconds % 60;

    age.innerHTML = `You are <br> ${years} years, ${months} months, ${days} days, and <span>${seconds} seconds</span> old.`;
}

function reset() {
    dobDate.value = '';
    disBlock.style.display = 'none';
    age.innerHTML = '';
}

calcBtn.onclick = calculate;
resetBtn.onclick = reset;
