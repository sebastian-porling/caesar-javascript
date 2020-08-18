import Ceaser from "./modules/caeser.mjs";
import {
    outputElement,
    textInputElement,
    stepsInputElement,
} from "./modules/elements.mjs";
import { isEmpty, isUndefined } from "./modules/util.mjs";

/**
 * Writes the encrypted input to the output box
 */
window.encrypt = function () {
    changeOutput(initCaesar().encrypt());
};

/**
 * Writes the decrypted input to the output box
 */
window.decrypt = function () {
    changeOutput(initCaesar().decrypt());
};

/**
 * Initializes a caesar object
 */
function initCaesar() {
    let [text, steps] = readInput();
    if (!isUndefined(text, steps)) {
        return new Ceaser(text, steps);
    }
    return new Ceaser();
}

/**
 * Reads input from the text and steps feilds
 */
function readInput() {
    let [text, steps] = [textInputElement.value, stepsInputElement.value];
    if (!isEmpty(text, steps)) {
        text = onlyAlphabetCharacters(text);
        steps = toCipherRange(steps);
        return [text, steps];
    }
    resetFields();
    return [undefined, undefined];
}

/**
 * Makes the number within the range of 0-25.
 * @param {number} steps
 */
function toCipherRange(steps) {
    return Math.abs(parseInt(steps)) % 26;
}

/**
 * Returns only the alphabetic chars from string
 * @param {String} text
 */
function onlyAlphabetCharacters(text) {
    return text.toLowerCase().replace(/[^a-z]+/gi, "");
}

/**
 * Resets the fields
 */
function resetFields() {
    outputElement.innerText = "";
    textInputElement.value = "";
    stepsInputElement.value = "";
}

/**
 * Changes the inputfield and output field
 * @param text String
 */
function changeOutput(text) {
    outputElement.innerText = text;
    textInputElement.value = text;
}
