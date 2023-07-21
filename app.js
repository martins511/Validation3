const express = require('express');
const Joi = require('joi');
const app = express();
//const { user} = require('./schema')
const db = require('./schema')

app.use(express.json());

app.post('/der',async(req,res)=>{
  
    console.log(req.body);
    const {error} =await db.user.validate(req.body)
        if(error){
            res.status(400).send(error.details[0].message)
        }else{
            res.status(200).send({message:'Good to go'})
        }

});

app.listen(2000,()=>{
    console.log("Listening to port 2000");
})