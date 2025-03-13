const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('./contacts')
  })
  
router.use('/contacts', require('./contacts'));

module.exports = router;