const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [],
        exprStr = expr,
        decodeStr;

    for (let i = 0; i < exprStr.length; i = i + 10) {
        arr.push(exprStr.substring(i, i + 10));
    }
    for (let k = 0; k < arr.length; k++) {
        arr[k] = arr[k].replace(/00/g, '');
        arr[k] = arr[k].replace(/10/g, '.');
        arr[k] = arr[k].replace(/11/g, '-');
        arr[k] = arr[k].replace(/\*/, ' ');
        arr[k] = arr[k].replace(/\*/g, '')
        if (arr[k] != ' ') {
            arr[k] = MORSE_TABLE[arr[k]];
            decodeStr = arr.join('');
        }
    }
    return decodeStr;
}

module.exports = {
    decode
}