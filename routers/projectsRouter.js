const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'Projects router is running'})
})

module.exports = router