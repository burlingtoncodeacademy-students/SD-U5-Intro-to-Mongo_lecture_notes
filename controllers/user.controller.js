const router = require('express').Router();


router.post('/signup', (req,res) => {
    try {
        
        

    } catch (err) {
        res.status(500).json({
            ERROR: err.message
        })
    }
})


module.exports = router;