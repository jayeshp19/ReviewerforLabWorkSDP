const express = require('express');
const router = express.Router();
const verify = require('../verifyToken');
const Assignment = require('../models/Assignment');

router.get('/', async(req,res) =>{
    try {
        const assignments = await Assignment.find();
        res.json(assignments);
    } catch(err){
        res.json({ message: err });
    }
});

//assgin
router.post('/post', async(req,res) => {
    const assignment = new Assignment({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedAssignment = await assignment.save();
        res.json(savedAssignment);
    } catch( err ){
        res.json({ message: err });
    }
});

//specific assignment
router.get('/:assignmentId', async(req,res) => {
    try {
        const assignment = await Assignment.findById(req.params.assignmentId);
        res.json(assignment);
    } catch (err) {
        res.json({ message: err });
    }
    
})

//delete assignment
router.delete('/:assignmentId',async(req,res) => {
    try {
        const removedAssignment = await Assignment.remove({_id: req.params.assignmentId});
        res.json(removedAssignment);
    } catch (err) {
        res.json({ message: err });
    }
})

//update assignment
router.patch('/:assignmentId',async(req,res) => {
    try {
        const updatedAssignment = await Assignment.updateOne(
            {_id: req.params.assignmentId},
            { $set: {title: req.body.title} }
        );
        res.json(updatedAssignment);
    } catch (err) {
        res.json({ message: err });
    }
})


module.exports = router;