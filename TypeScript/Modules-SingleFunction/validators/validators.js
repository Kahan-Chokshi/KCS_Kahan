"use strict";
exports.__esModule = true;
exports.ValidatorCLS = void 0;
var ValidatorCLS = /** @class */ (function () {
    function ValidatorCLS() {
    }
    ValidatorCLS.prototype.isValid = function (s, regex, minlength, maxlength) {
        return maxlength ? (s.length >= minlength && maxlength >= s.length && regex.test(s)) : (minlength === s.length && regex.test(s));
    };
    return ValidatorCLS;
}());
exports.ValidatorCLS = ValidatorCLS;
