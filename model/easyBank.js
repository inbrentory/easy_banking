const mongoose = require('mongoose');

const EasyBankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    timestamps: {
        type: String,
        default: Date.now
    }
});

const EasyBank = mongoose.model("EasyBank", EasyBankSchema);
module.exports = EasyBank; 
