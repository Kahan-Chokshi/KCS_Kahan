import { ValidatorCLS } from './validators/validators'
import { Constants } from './constant/constant';

let email = 'kahanchokshi789@gmail.com';
let zipCode = '380051';
let age = '22';
let name = 'Kahan Chokshi';
let cno = '9408097042';

let validator = new ValidatorCLS();

console.log("Valid Name OR Not: "+validator.isValid(name,Constants.FullNameRegEx,2,30));
console.log("Valid Phone Number OR Not: "+validator.isValid(cno,Constants.NumberRegEx,10,12));
console.log("Valid Email Id OR Not: "+validator.isValid(email,Constants.EmailRegEx,2,50));
console.log("Valid Age OR Not: "+validator.isValid(age,Constants.NumberRegEx,2,2));
console.log("Valid ZipCode OR Not: "+validator.isValid(zipCode,Constants.NumberRegEx,6,6));