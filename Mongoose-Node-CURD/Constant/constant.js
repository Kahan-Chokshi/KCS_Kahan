"use strict";
exports.__esModule = true;
exports.Constants = void 0;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.NumberRegEx = /^[0-9]+$/;
    Constants.AgeRegEx = /^([0-9]{1,2})$/;
    Constants.FullNameRegEx = /^([a-zA-Z ]{2,40})$/;
    Constants.EmailRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
    return Constants;
}());
exports.Constants = Constants;
