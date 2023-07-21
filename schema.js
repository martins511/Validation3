const Joi = require('joi');


const schema ={
    user: Joi.object({
        firstName: Joi.string().max(7).required(),
        lastName: Joi.string().max(7).required(),
        email: Joi.string().email().required()
    })
}
   
       module.exports= schema;