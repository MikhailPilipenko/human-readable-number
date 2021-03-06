module.exports = function toReadable (number) {
	
let result = [];
let hundreds = 0;
let tens = 0;

if (!number) {
	return 'zero';
	}

let num = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred'
};

if (number >= 100) {
  hundreds = Math.floor(number / 100);
  number %= 100;
}

if (hundreds) {
  result.push(num[hundreds]);
  result.push('hundred');
}

if (number >= 20) {
  tens = Math.floor(number / 10);
  number %= 10;
}

if(tens) {
  result.push(num[tens*10]);
}

if(number) {
  result.push(num[number]);
}

return result.join(' ');

}
