import { wordsArray } from "./wordsArray";

type Settings = {
  numOfWords: number;
  includeNumbers: boolean;
  includeSpecialChars: boolean;
  capitalize: boolean;
  changeSeparator: boolean;
};

const settings: Settings = {
  numOfWords: 3,
  includeNumbers: false,
  includeSpecialChars: false,
  capitalize: true,
  changeSeparator: false,
};

const gid = (id: string) => document.getElementById(id);

const handleWordButtonClick = (numWords: number, buttonId: string) => {
  settings.numOfWords = numWords;
  ["threeWords", "fourWords", "fiveWords"].forEach((id) => {
    gid(id)?.classList.remove("bg-purple-200", "rounded-l-sm", "rounded-r-sm");
    gid(id)?.classList.add("border-l");
  });
  gid(buttonId)?.classList.add(
    "bg-purple-200",
    buttonId.includes("three") ? "rounded-l-sm" : "rounded-r-sm"
  );
  generatePassphrase();
};

const toggleBooleanSetting = (setting: keyof Omit<Settings, "numOfWords">) => {
  settings[setting] = !settings[setting];
  generatePassphrase();
};

gid("threeWords")?.addEventListener("click", () => handleWordButtonClick(3, "threeWords"));
gid("fourWords")?.addEventListener("click", () => handleWordButtonClick(4, "fourWords"));
gid("fiveWords")?.addEventListener("click", () => handleWordButtonClick(5, "fiveWords"));
gid("inclNum")?.addEventListener("change", () => toggleBooleanSetting("includeNumbers"));
gid("inclUpper")?.addEventListener("change", () => toggleBooleanSetting("capitalize"));
gid("inclChar")?.addEventListener("change", () => toggleBooleanSetting("includeSpecialChars"));
gid("chngSep")?.addEventListener("change", () => toggleBooleanSetting("changeSeparator"));

gid("copyPassphrase")?.addEventListener("click", () => {
  navigator.clipboard
    .writeText(gid("passphraseContainer")?.innerText || "")
    .then(copyToastPopup)
    .catch(() => alert("Failed to copy passphrase"));
});

const copyToastPopup = () => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = "Copied!";
  const copyButton = gid("copyPassphrase");
  const prevContent = copyButton?.innerHTML;
  if (copyButton) copyButton.innerHTML = "Copied!";
  setTimeout(() => {
    if (copyButton) copyButton.innerHTML = prevContent || "";
  }, 1500);
};

const secureRandom = (count: number) => {
  const rand = new Uint32Array(1);
  let num;
  do {
    num = crypto.getRandomValues(rand)[0];
  } while (num >= 2 ** 32 - (2 ** 32 % count));
  return num % count;
};

const generatePassphrase = () => {
  const { numOfWords, includeNumbers, includeSpecialChars, capitalize, changeSeparator } = settings;
  const words = wordsArray;
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const separator = changeSeparator ? "-" : " ";

  let passphrase = "";

  const numPlace = includeNumbers ? secureRandom(numOfWords) : -1;
  const charPlace = includeSpecialChars ? secureRandom(numOfWords) : -1;
  const capitalizeIndex = capitalize ? secureRandom(numOfWords) : -1;

  for (let i = 1; i <= numOfWords; i++) {
    let word = words[secureRandom(words.length)];
    if (i === capitalizeIndex) word = word.charAt(0).toUpperCase() + word.slice(1);
    if (i === numPlace) word += numbers[secureRandom(numbers.length)];
    if (i === charPlace) word = specialChars[secureRandom(specialChars.length)] + word;
    i === numOfWords ? (passphrase += word) : (passphrase += word + separator);
  }

  gid("passphraseContainer")!.innerText = passphrase.trim();
};

gid("generatePassphrase")?.addEventListener("click", generatePassphrase);
generatePassphrase();
