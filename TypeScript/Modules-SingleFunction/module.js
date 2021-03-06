"use strict";
exports.__esModule = true;
var validators_1 = require("./validators/validators");
var constant_1 = require("./constant/constant");
var email = 'kahanchokshi789@gmail.com';
var zipCode = '380051';
var age = '22';
var name = 'Kahan Chokshi';
var cno = '9408097042';
var validator = new validators_1.ValidatorCLS();
console.log("Valid Name OR Not: " + validator.isValid(name, constant_1.Constants.FullNameRegEx, 2, 30));
console.log("Valid Phone Number OR Not: " + validator.isValid(cno, constant_1.Constants.NumberRegEx, 10, 12));
console.log("Valid Email Id OR Not: " + validator.isValid(email, constant_1.Constants.EmailRegEx, 2, 50));
console.log("Valid Age OR Not: " + validator.isValid(age, constant_1.Constants.NumberRegEx, 2, 2));
console.log("Valid ZipCode OR Not: " + validator.isValid(zipCode, constant_1.Constants.NumberRegEx, 6, 6));
