function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const base = (code >= 65 && code <= 90) ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

function encrypt() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('shift').value);
    const encryptedMessage = caesarCipher(message, shift);
    document.getElementById('result').value = encryptedMessage;
}

function decrypt() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('shift').value);
    const decryptedMessage = caesarCipher(message, -shift);
    document.getElementById('result').value = decryptedMessage;
}