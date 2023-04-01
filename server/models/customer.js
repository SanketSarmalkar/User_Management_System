const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedDate: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model('Customer', customerSchema);