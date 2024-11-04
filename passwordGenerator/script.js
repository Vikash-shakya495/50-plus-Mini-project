document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyPassword);

document.getElementById('length').addEventListener('input', function() {
    document.getElementById('length-display').textContent = this.value;
});

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?+-';

    let characterSet = '';

    if (includeUppercase) characterSet += uppercaseChars;
    if (includeLowercase) characterSet += lowercaseChars;
    if (includeNumbers) characterSet += numberChars;
    if (includeSpecial) characterSet += specialChars;

    if (characterSet.length === 0) {
        alert('Please select at least one character type!');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    document.getElementById('password').textContent = password;
}

function copyPassword() {
    const passwordText = document.getElementById('password').textContent;
    if (passwordText) {
        navigator.clipboard.writeText(passwordText).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            alert('Failed to copy password: ', err);
        });
    } else {
        alert('Please generate a password first!');
    }
}
