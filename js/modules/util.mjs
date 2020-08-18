
/**
 * Checks if any of the arguments are an empty string
 * @param args Strings
 */
function isEmpty(...args) {
    return [...args].some(entry => entry === "");
}

/**
 * Checks if any of the arguments are undefined
 * @param args anything
 */
function isUndefined(...args) {
    return [...args].some(entry => entry === undefined);
}

export {isEmpty, isUndefined}