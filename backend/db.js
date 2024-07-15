const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shikhar_dwivedi:aWLAnznvdTgsww0y@cluster0.e5dlnhf.mongodb.net/paytm-clone-1')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const User = mongoose.model('User', userSchema);

module.exports= {
    User
}