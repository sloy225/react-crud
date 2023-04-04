const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({

    nom: {
        type:String,
        required:true
    },
    email: { type: String
    },
    numero: {
        type: Number,
        required:true,

    },
    adresse: {
        type:String,
        required:true
    },
    matricule: {
        type: Number,
        required:true
    },

})

const student = new mongoose.model('student', studentSchema);
module.exports = student;