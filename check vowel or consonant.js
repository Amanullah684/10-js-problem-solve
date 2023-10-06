let letter = "c"
if (typeof letter === "string") {
    let input = letter.toLocaleLowerCase()
    if (input == "a" || input == "e" || input == "i" || input == "o" || input == "u") {
        console.log(letter, "is a vowel");
    }
    else {
        console.log(letter, "is a consonant")
    }
}
