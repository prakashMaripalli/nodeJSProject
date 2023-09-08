const mongoose = require('mongoose')
const { stringify } = require('querystring')

const employerDetails = mongoose.Schema({
    employeFirstName: {
        type: String,
        required: true
    },
    employeLastName: {
        type: String,
        required: true
    },
    employePhoneNumber: {
        type: String,
        required: true
    },
    employeEmail: {
        type: String,
        required: true
    },
    employeMessage: {
        type: String,
        required: true
    }

},
    {
        timestamp: true
    }
)

const EmployeDetails = mongoose.model('employeDetails', employerDetails);
module.exports = EmployeDetails;