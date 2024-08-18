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
    '**********': ' '
};

function decode(expr) {
    let result = '';
    const exprString = expr.toString();

    for (let i = 0; i < exprString.length; i += 10) {
        let dots = '';
        const symbol = exprString.slice(i, i + 10);

        if (symbol === '**********') {
            result += ' ';
            continue;
        }

        for (let j = 8; j >= 0; j -= 2) {
            const pair = symbol.slice(j, j + 2);
            switch (pair) {
                case '10':
                    dots = '.' + dots;
                    break;
                case '11':
                    dots = '-' + dots;
                    break;
                case '00':
                    break;
            }
        }

        for (let key in MORSE_TABLE) {
            if (dots === key) {
                result += MORSE_TABLE[key];
                break;
            }
        }
    }

    return result;
}
module.exports = {
    decode
}