const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/users.js');

router.get('/', (req,res)=> {
    User.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error retrieving users : '+JSON.stringify(err,undefined,2));}
    });
})

router.get('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id : ${req.params.id}`);

    User.findById(req.params.id, (err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error retrieving users : '+JSON.stringify(err,undefined,2));}
    })
})


router.post('/', (req,res)=>{
    var user=new User({
        name:req.body.name,
        mail:req.body.mail,
        age:req.body.age,
        number:req.body.number,
    });
    console.log(user);
    user.save((err,doc)=>{
        if(!err){res.send(doc)}
        else{console.log('error while adding user : '+JSON.stringify(err,undefined,2))}
    })
})


router.put('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id : ${req.params.id}`);
/*
    var user=new User({
        name:req.body.name,
        mail:req.body.mail,
        age:req.body.age,
        number:req.body.number,
    });
    console.log(user)*/

    User.findByIdAndUpdate(req.params.id,  {name:req.body.name, mail:req.body.mail, age:req.body.age, number:req.body.number}, {new:true}, (err,doc)=>{
        if(!err){res.send(doc)}
        else{console.log('error while updating user : '+JSON.stringify(err,undefined,2))}
    });
})

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id : ${req.params.id}`);

    User.findByIdAndDelete(req.params.id, (err,doc)=>{
        if(!err){res.send(doc)}
        else{console.log('error while adding user : '+JSON.stringify(err,undefined,2))}
    })
})


module.exports = router; 