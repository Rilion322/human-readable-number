module.exports = function toReadable (number) {
    if (number < 0 || number > 999 ) return 'error';
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen','nineteen'];
    const tens = [ '', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    let result = '';
    if (number === 0) {
        return ones[0];
    }

    const hundred = Math.floor(number / 100);
    const ten = Math.floor((number % 100) / 10);
    const one = number % 10;

    if (hundred > 0) {
        result += ones[hundred] + ' hundred';
    }
    
    if (ten > 1) {
        if (result) result += ' ';
        result += tens[ten];
        if (one > 0) {
            result += ' ' + ones[one];
        }
    } else if (ten === 1) {
        if (result) result += ' ';
        result += teens[one];
    } else if (one > 0) {
        if (result) result += ' ';
        result += ones[one];
    }

    return result.trim();

}
