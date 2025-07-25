# Encryption Tool 🔐

A web-based encryption and decryption tool that uses XOR cipher algorithm to secure text data. This tool provides a clean, cyberpunk-themed interface for encrypting and decrypting messages with custom keys.

## 🚀 Live Demo

Check out the live version: [https://enncryption-tool.netlify.app/](https://enncryption-tool.netlify.app/)

## ✨ Features

- **Dual Interface**: Side-by-side encryption and decryption panels
- **XOR Cipher**: Secure XOR-based encryption algorithm
- **Custom Keys**: Use any text string as encryption/decryption key
- **Hex Output**: Encrypted text is displayed in hexadecimal format
- **Responsive Design**: Modern cyberpunk-themed UI with hover effects
- **Real-time Processing**: Instant encryption/decryption with button clicks

## 🛠️ Technology Stack

- **HTML5**: Structure and layout
- **CSS3**: Styling with cyberpunk theme and animations
- **Vanilla JavaScript**: XOR encryption/decryption logic
- **Google Fonts**: Source Code Pro font for monospace styling

## 📋 How to Use

### Encryption Process:

1. Enter your text in the "Enter any text to be Encrypted" field
2. Provide an encryption key in the "Enter Key" field
3. Click the "Encrypt" button
4. The encrypted text will appear in hexadecimal format in the output area

### Decryption Process:

1. Enter the hexadecimal encrypted text in the "Enter the text to Decrypt" field
2. Provide the same key used for encryption in the "Enter Key" field
3. Click the "Decrypt" button
4. The original text will appear in the output area

## 🔧 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NeetignaN/encryption.git
   cd encryption
   ```

2. **Open in browser:**

   - Simply open `index.html` in any modern web browser
   - No additional dependencies or build process required

3. **For development:**
   - Use any local server (e.g., Live Server extension in VS Code)
   - Or open directly in browser for basic functionality

## 📁 Project Structure

```
encryption/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and themes
├── script.js           # JavaScript encryption logic
├── enc.png            # Background image
└── README.md          # Project documentation
```

## 🔍 Code Overview

### Encryption Algorithm

The tool uses XOR cipher encryption, which is implemented in `script.js`:

- **XOR Encryption**: Each character is XORed with corresponding key characters
- **Hex Conversion**: Results are converted to hexadecimal for display
- **Key Cycling**: The key repeats if the text is longer than the key

### Key Functions:

- `encrypt()`: Handles the encryption process
- `decrypt()`: Handles the decryption process
- `xorEncrypt(text, key)`: Core encryption algorithm
- `xorDecrypt(hexString, key)`: Core decryption algorithm

## 🎨 Design Features

- **Cyberpunk Theme**: Green-on-black color scheme with glowing effects
- **Hover Animations**: Interactive elements with scaling and shadow effects
- **Monospace Font**: Source Code Pro for a technical, coding aesthetic
- **Responsive Layout**: Flexbox-based layout for proper alignment

## 🔒 Security Notes

⚠️ **Important**: This tool uses XOR cipher, which is suitable for educational purposes and basic obfuscation but should not be used for securing sensitive data in production environments.

**Security Considerations:**

- XOR cipher is vulnerable to frequency analysis
- Key reuse can compromise security
- Not suitable for cryptographically secure applications
- Use strong, random keys for better security
