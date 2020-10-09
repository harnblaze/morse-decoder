const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  expr = expr.split("**********");
  let string = "";
  expr.forEach((element, i) => {
    let word = "";
    let char = "";
    element = element.split("");
    while (element.length > 0) {
      let charCode = element.splice(0, 10);
      while (charCode.length > 0) {
        let symbol = charCode.splice(0, 2);
        symbol = symbol.join("");
        switch (symbol) {
          case "11":
            symbol = "-";
            break;
          case "10":
            symbol = ".";
            break;
          default:
            symbol = "";
            break;
        }
        char += symbol;
      }
      char = MORSE_TABLE[char];
      word += char;
      char = "";
    }
    string += word;
    if (i < expr.length - 1) {
      string += " ";
    }
  });
  return string;
}

module.exports = {
  decode,
};
