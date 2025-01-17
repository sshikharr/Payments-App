const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shikhar_dwivedi:aWLAnznvdTgsww0y@cluster0.e5dlnhf.mongodb.net/payments-app')

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const accountSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    balance: {type: Number, required: true},
});

const Account = mongoose.model('Account', accountSchema);

module.exports= {
    User,
    Account
}