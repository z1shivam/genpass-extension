# GenPass Chrome Extension 🚀

The magic of GenPass is now available as a Chrome Extension! Generate strong and secure passphrases right from your browser with ease.

## Features

- 📚 **Extensive Word Selection**: Randomly selects words from an array of 25,000 most common English words.
- 🤔 **Customizable Word Length**: Choose between 3, 4, or 5 words for your passphrase.
- 🔢 **Include Numbers**: Option to include numbers in your passphrase.
- 🔠 **Uppercase Letters**: Option to include uppercase letters in your passphrase.
- 🌟 **Special Characters**: Option to include special characters for added security.
- ➡️ **Hyphenation**: Convert blank spaces into hyphens for sites that don't support spaces.

## How to Download and Use This Extension

### Step-by-Step Guide

1. **Download the Extension:**
   - Go to the [Releases](https://github.com/z1shivam/genpass-extension/releases) page of this repository.
   - Download the latest ZIP file from the release section.

2. **Unpack the ZIP File:**
   - Extract the contents of the ZIP file to a location on your computer.

3. **Install the Extension in Your Browser:**
   - Open your favorite Chromium-based browser (e.g., Google Chrome, Microsoft Edge).
   - Navigate to the Extensions page by typing `chrome://extensions/` in the address bar.
   - Enable **Developer Mode** by toggling the switch in the top-right corner of the Extensions page.
   - Click on the "Load unpacked" button.
   - Select the folder where you unpacked the ZIP file.

4. **Enjoy Your New Extension!**
   - The extension is now installed and ready to use.
   - Click the GenPass icon in your browser to start generating secure passphrases.

## How to Build the Extension

1. **Build The Extension:**
   - Ensure you have `nodejs` and `git` installed on your system.
   - Clone the repository with:
     ```
     git clone https://github.com/z1shivam/genpass-extension.git
     ```
   - Navigate to the project directory:
     ```
     cd genpass-extension
     ```
   - Install the necessary dependencies using either:
     ```
     npm install
     ```
     or
     ```
     pnpm install
     ```
   - Build the extension:
     ```
     pnpm build
     ```
   - A `genpass-extension` folder will be generated in the project's root directory.
   - Open Chrome and go to the Extensions page. Enable Developer mode via the sidebar.
   - Click "Load unpacked" and select the `genpass-extension` folder. The extension will now appear in the list.
   - Enable the extension and pin it to the top bar for easy access.

## How to Generate Passphrases

1. **Generate Passphrases:**
   - Click on the GenPass extension icon in your browser.
   - Choose the number of words for your passphrase (3, 4, or 5).
   - Select options for numbers, uppercase letters, and special characters.
   - If needed, choose the hyphen option for space conversion.
   - Click the "Generate Passphrase" button to get a secure passphrase.

## Development Information

- This project is written in `TypeScript` and `HTML5`.
- Uses `vite` as the build tool.
- `tailwindCSS` for styling.
- Uses the public directory for all static assets, including `manifest.json`.

## Contribution

- 🤝 Contributions are welcome! Feel free to open issues and pull requests.
- 🌈 Help make GenPass even better by contributing to its development.

## License

This project is licensed under the MIT License.

Happy Passphrase Generating! 🎉
