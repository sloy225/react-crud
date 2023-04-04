const mongoose = require ("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/students")

    .then(()=>{
        console.log("connexion à la BD reussir");
    }).catch((err)=>{
    console.log("non connecté");
    console.log(err);
})