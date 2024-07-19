const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'first name is required']
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
        validator: validator.isEmail,
        message: "Email is invalid"
        },
        unique: [true, 'this email is already taken']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
        validator: validator.isStrongPassword,
        }
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
