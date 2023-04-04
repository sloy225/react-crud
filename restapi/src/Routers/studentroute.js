const express = require('express');
const student = require('./../model/student');


const router = require("express").Router();

router.get("/",async (req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    try{
        const students = await student.find()
        res.json(students)
    }catch (e) {
        res.status(400).json(e)
    }

})


router.post('/students/',async (req,res) => {
    res.header("Access-Control-Allow-Origin","*");
    console.log(req.body);
    const student = new student({
        name:req.body.name,
        email:req.body.email,
        numero:req.body.numero,
        adresse:req.body.adresse,
        matricule:req.body.matricule

    })
    const data = new student(req.body);
    const result = await student.save();
    res.json("OK !!!!!!!!!!!!!!!!!!!!!");


    if (!result){
        res.json({
            status:"ECHEC",
            message:"employée noN enregistrer ...."
        })
    }
    else {
        res.json({
            status:"SUCCESS",
            message:"employée  enregistrer avec succès...."
        })
    }
})
router.delete('/students/:id', async(req, res) =>{
    res.header("Access-Control-Allow-Origin","*");
    try {
        const {id} = req.params;
        const student = await student.findByIdAndDelete(id);
        if(!student){
            return res.status(404).json({message: `impossile de trouver l'etudiant avev l'id  ${id}`})
        }
        res.status(200).json(student);

    } catch (error) {
        alert("erreur")
        res.status(500).json({message: error.message}


        )
    }
})

/*router.put('/students/:id', async(req, res) => {
    res.header("Access-Control-Allow-Origin","*");
    try {
        const {id} = req.params;
        const student = await students.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!student){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await student.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})*/
router.put('/:id', async (req, res) => {
    const student = new student;

    if (req.body.name != null) {

        res.student.name = req.body.name;

    }

    if (req.body.age != null) {

        res.student.age = req.body.age;

    }

    if (req.body.email != null) {

        res.student.email = req.body.email;

    }




    try {

        const updatedStudent = await res.student.save();

        res.json(updatedStudent);

    } catch (err) {

        res.status(400).json({ message: err.message });

    }

});


module.exports = router;