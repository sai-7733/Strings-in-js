//To check whether the given character is vowel or consonant or non alphabet
function checkCharacter(char) {
    const lowerChar = char.toLowerCase();
    switch (lowerChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(`${char} is a vowel.`);
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            console.log(`${char} is a consonant.`);
            break;
        default:
            console.log(`${char} is a non-alphabet character.`);
            break;
    }
}
checkCharacter('a'); 
