const Joi = require('@hapi/joi');


//register validation
function registerValidation(data) {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        c_id: Joi.string()
            .min(10)
            .required(),
        password: Joi.string()
            .min(8)
            .required()
    }).options({ abortEarly: false });
    return schema.validate(data);
}
//login validation

const loginValidation = (data) => {
    const schema = {
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .required()
    };
    return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;