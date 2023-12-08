const router = require('express').Router();
const User = require('../models/user.model');


router.post('/signup', async (req,res) => {
    try {
        
        const user = new User({
        //  model : frontend value
            firstName: req.body.first,
            lastName: req.body.last,
            email: req.body.email,
            password: req.body.password
        });

        const newUser = await user.save();

        res.status(200).json({
            user: newUser,
            msg: "Success! User created!"
        })

    } catch (err) {
        res.status(500).json({
            ERROR: err.message
        })
    }
})


module.exports = router;