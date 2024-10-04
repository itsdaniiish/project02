document.getElementById('mobile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mobileNumber = document.getElementById('mobile-number').value;
    const validationMessage = document.getElementById('validation-message');
    
    if (validateMobileNumber(mobileNumber)) {
        validationMessage.textContent = 'Valid mobile number!';
        validationMessage.style.color = 'green';
    } else {
        validationMessage.textContent = 'Invalid mobile number. Please enter a valid number.';
        validationMessage.style.color = 'red';
    }
});

function validateMobileNumber(number) {
    const pattern = /^[1-9][0-9]{9}$/;
    return pattern.test(number);
}
