const {Conflict} = require('http-errors');

const {User} = require('../../models');

const register = async (req, res) => {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if (user) {
        throw new Conflict(`Email ${email} is already registered`)
    }
const result = await User.create({name, email, password});

res.status(201).json({
    status:"success",
    code: 201,
    data: {
        user: {
            name: result.name, 
            email: result.email
        },
        
    }
})
}

module.exports = register