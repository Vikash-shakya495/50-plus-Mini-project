const steps = document.querySelectorAll('.step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const form = document.getElementById('multiStepForm');
const confirmationDetails = document.getElementById('confirmationDetails');
const progress = document.getElementById('progress');

let currentStep = 0;

// Show the first step
showStep(currentStep);

// Function to show the current step
function showStep(step) {
    steps.forEach((s, index) => {
        s.classList.toggle('active', index === step);
    });
    updateProgress(step);
    updateConfirmationDetails();
}

// Function to update progress bar
function updateProgress(step) {
    const totalSteps = steps.length;
    const progressPercentage = ((step + 1) / totalSteps) * 100;
    progress.style.width = `${progressPercentage}%`;
}

// Function to update confirmation details
function updateConfirmationDetails() {
    if (currentStep === 3) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const expiry = document.getElementById('expiry').value;

        confirmationDetails.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Card Number:</strong> ${cardNumber}</p>
            <p><strong>Expiry Date:</strong> ${expiry}</p>
        `;
    }
}

// Next button event listener
nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentStep++;
        showStep(currentStep);
    });
});

// Previous button event listener
prevBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentStep--;
        showStep(currentStep);
    });
});
