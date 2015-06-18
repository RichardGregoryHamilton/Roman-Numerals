(function(){
    'use strict';

    var NUMBERS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var SYMBOLS = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    Number.prototype.toRoman = function () {

        var integer = Math.floor(this);
        var num = integer;
        var roman = '';
        var index = 0;

        if (integer < 4000) {
            // Add symbols to roman numeral
            while (integer > 0) {
                var value = NUMBERS[index] || '';
                while (integer >= value) {
                    integer -= value;
                    roman += SYMBOLS[index];
                }
                index++;
            }
        }

        // Get return value in 1 line
        return num < 1 ? "N" : num >= 4000 ? "T" : roman;
    }
})();
