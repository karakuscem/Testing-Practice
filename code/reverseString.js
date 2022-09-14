function reverseString(string) {
    if (typeof string != "string") {
        return "You must provide valid string."
    } else {
        let reversed = "";
        for (let i = 1; i <= string.length; i++) {
            reversed += string.charAt(string.length - [i]);
        }
        return reversed;
    }
}

export default reverseString;