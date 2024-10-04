function checkPalindrome() {
    const inputString = document.getElementById('input-string').value;
    const result = document.getElementById('result');
    
    const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
 
    const isPalindrome = cleanedString === cleanedString.split('').reverse().join('');
    
    if (isPalindrome) {
        result.innerText = `"${inputString}" is a palindrome!`;
        result.style.color = 'green';
    } else {
        result.innerText = `"${inputString}" is not a palindrome.`;
        result.style.color = 'red';
    }
}
