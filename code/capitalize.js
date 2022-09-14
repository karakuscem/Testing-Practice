function capitalize(string) {
    if (string[0] >= 'a' && string[0] <= 'z') {
        let stringCode = string.charCodeAt(0);
        let capitalized = String.fromCharCode(stringCode - 32)
        let stringArray = string.split("");
        stringArray[0] = capitalized;
        return stringArray.join("");
    } else if (string[0] >= 'A' && string[0] <= 'Z') {
        return string;
    } else {
        return "You must provide valid string."
    }
}

export default capitalize