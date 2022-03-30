import { ValidatorCLS } from './validators/validators';

let email = 'kahanchokshi789@gmail.com';
let zipCode = '380051';

let validator = new ValidatorCLS();

let resultOfEmailValidate = validator.isValidEmailStr(email);
let resultOfZipCodeValidate = validator.isValidZipCode(zipCode);

console.log("Valid Email Id OR Not: "+resultOfEmailValidate);
console.log("Valid Zip Code OR Not: "+resultOfZipCodeValidate);