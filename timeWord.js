const onesHours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
const onesMinutes = [`o'clock`, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
const teens = ['thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['twenty', 'thirty', 'fourty', 'fifty'];

function timeWord(timeStr) {
    let time
    // account for two edge cases
    if (timeStr === '00:00') return 'midnight'
    if (timeStr === '12:00') return 'noon'

    let [ h, m ] = timeStr.split(':');
    let hour = parseInt(h);
    let minute = parseInt(m);

    // conver hour number to word
    time = onesHours[hour%12];

    // convert minutes to words
    if ( minute <= 12 ) { // use 'ones' variable for minutes 1-12
        time += ( minute <= 9 && minute > 0 ) ? ' oh' : '';
        time += ' ' + onesMinutes[minute];
    } else if ( minute <= 19 ) { // use teens variable for minutes 13-19
        time += ' ' + teens[minute%13];
    } else { // use combo of tens and ones variables for minutes 20-59
        time += ' ' + tens[parseInt(m[0]) - 2];
        if ( parseInt(m[1]) > 0 ) {
            time += ' ' + onesMinutes[parseInt(m[1])];
        }
    }

    // add am/pm
    time += hour < 12 ? ' am' : ' pm';

    return time
}

module.exports = timeWord;