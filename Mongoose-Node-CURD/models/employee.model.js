const mongoose = require('mongoose');
// import { Constants } from '../Constant/constant';
var regex = require('../Constant/constant');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'

    },
    mobile: {
        type: String,
        required: 'This field is required.'

    },
    age: {
        type: String,
        required: 'This field is required.'

    },
    salary: {
        type: String,
        required: 'This field is required.'

    },
    city: {
        type: String,
        required: 'This field is required.'

    }
});

employeeSchema.path('fullName').validate((val) => {
    return regex.Constants.FullNameRegEx.test(val);
}, 'Invalid Full Name.');
employeeSchema.path('email').validate((val) => {
    return regex.Constants.EmailRegEx.test(val);
}, 'Invalid Email.');
employeeSchema.path('mobile').validate((val) => {
    return regex.Constants.NumberRegEx.test(val);
}, 'Invalid Mobile.');
employeeSchema.path('age').validate((val) => {
    return regex.Constants.AgeRegEx.test(val);
}, 'Invalid Age.');
employeeSchema.path('salary').validate((val) => {
    return regex.Constants.NumberRegEx.test(val);
}, 'Invalid Salary.');
employeeSchema.path('city').validate((val) => {
    return regex.Constants.FullNameRegEx.test(val);
}, 'Invalid City.');

mongoose.model('Employee', employeeSchema);