function encrypt() {
    const text = document.getElementById("enc-input").value;
    const key = document.getElementById("encryption-key").value;
    const encryptedText = xorEncrypt(text, key);
    document.getElementById("enc-output").value = encryptedText;
}

function decrypt() {
    const hexString = document.getElementById("dec-input").value;
    const key = document.getElementById("decryption-key").value;
    const decryptedText = xorDecrypt(hexString, key);
    document.getElementById("dec-output").value = decryptedText;
}

function xorEncrypt(text, key) {
    let encrypted = "";
    for (let i = 0; i < text.length; i++) {
        const textCharCode = text.charCodeAt(i);
        const keyCharCode = key.charCodeAt(i % key.length);
        const encryptedCharCode = textCharCode ^ keyCharCode;
        encrypted += ('0' + encryptedCharCode.toString(16)).slice(-2);
    }
    return encrypted;
}

function xorDecrypt(hexString, key) {
    let decrypted = "";
    for (let i = 0; i < hexString.length; i += 2) {
        const hexCharCode = parseInt(hexString.substr(i, 2), 16);
        const keyCharCode = key.charCodeAt(i / 2 % key.length);
        const decryptedCharCode = hexCharCode ^ keyCharCode;
        decrypted += String.fromCharCode(decryptedCharCode);
    }
    return decrypted;
}

