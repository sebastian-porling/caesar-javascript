/**
 * Class that can encrypt or decrypt Caesar chifer
 */
export default class Caesar {
    constructor(text = "", steps = 0) {
        this.text = text;
        this.steps = steps;
    }

    /**
     * Encrypts string by adding steps to the char code
     */
    encrypt() {
        return crypt(this.text, this.steps);
    }

    /**
     * Decrypts string by subtracting steps to the char code
     */
    decrypt() {
        return crypt(this.text, -this.steps);
    }
}

/**
 * Crypts the text with the steps
 * @param text String
 * @param steps Number
 */
function crypt(text = "", steps = 0) {
    const MAX = 123;
    const MIN = 97;
    const ifLessThanMinAddDiff = (charCode) =>
        charCode < MIN ? charCode + (MAX - MIN) : charCode;
    const ifModMaxLessThanMinAddMin = (charCode) =>
        charCode % MAX < MIN ? (charCode % MAX) + MIN : charCode;
    return [...text]
        .map((char) => char.charCodeAt(0) + steps)
        .map(ifLessThanMinAddDiff)
        .map(ifModMaxLessThanMinAddMin)
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
}
