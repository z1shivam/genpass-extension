# GenPass Chrome Extension 🚀

The magic of GenPass is now available as a Chrome Extension! Generate strong and secure passphrases right from your browser with ease.

## Features

- 📚 **Extensive Word Selection**: Randomly selects words from an array of 25,000 most common English words.
- 🤔 **Customizable Word Length**: Choose between 3, 4, or 5 words for your passphrase.
- 🔢 **Include Numbers**: Option to include numbers in your passphrase.
- 🔠 **Uppercase Letters**: Option to include uppercase letters in your passphrase.
- 🌟 **Special Characters**: Option to include special characters for added security.
- ➡️ **Hyphenation**: Convert blank spaces into hyphens for sites that don't support spaces.

## Usage

1. **Build The Extension**:
   - Since this extension is under development and not on the Chrome Web Store, you need to build it yourself.
   - Ensure you have `nodejs` and `git` installed on your system.
   - Clone the repository with `git clone https://github.com/z1shivam/genpass-extension.git` and navigate to the project directory: `cd genpass-extension`.
   - Install the necessary dependencies using either `npm install` or `pnpm install`.
   - Run `pnpm build` to generate a `genpass-extension` folder in the project's root directory.
   - This folder can be loaded directly into Chrome, independent of the project files. You may delete the project files after copying the `genpass-extension` folder.
   - Open Chrome and go to the Extensions page. Enable Developer mode via the sidebar.
   - Click "Load unpacked" and select the `genpass-extension` folder. The extension will now appear in the list.
   - Enable the extension and pin it to the top bar for easy access. You can use it anytime by clicking the icon in the top bar.

2. **Generate Passphrases**:
   - Click on the GenPass extension icon.
   - Choose the number of words for your passphrase (3, 4, or 5).
   - Select options for numbers, uppercase letters, and special characters.
   - If needed, choose the hyphen option for space conversion.
   - Click the "Generate Passphrase" button to get a secure passphrase.

3. **Developement Information**:
   - This project is written in `TypeScript` and `HTML5`.
   - Uses `vite` as build tool.
   - `tailwindCSS` for styling.
   - uses public directory for all the static stuffs including `manifest.json`.
     
## Contribution

- 🤝 Contributions are welcome! Feel free to open issues and pull requests.
- 🌈 Help make GenPass even better by contributing to its development.

## License

This project is licensed under the MIT License.

Happy Passphrase Generating! 🎉
