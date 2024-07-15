const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shikhar_dwivedi:aWLAnznvdTgsww0y@cluster0.e5dlnhf.mongodb.net/paytm-clone-1')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique: true,
        trim: true,
        minLength: 3,
        maxLength: 30,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minLength: 6,
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const User = mongoose.model('User', userSchema);

module.exports= {
    User
}