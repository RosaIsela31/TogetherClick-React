const express = require ('express');
const router = express.Router();

//@route - GET api/profile/me
//@description - Test route
// acces - Public
router.get('/', (req, res) => res.send('Profile  route'));

module.exports = router;