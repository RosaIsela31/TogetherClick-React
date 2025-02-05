const express = require ('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
// Json web token
const jwt = require('jsonwebtoken'); 
const config =  require('config');
const { check, validationResult } = require('express-validator/check')

const User = require('../../models/User');

//@route - GET api/users
//@description - Test route
// acces - Public
// router.get('/', (req, res) => res.send('User route'));

// all code for validations
router.post('/', 
[
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with six or more characters') .isLength({ min: 6 })
], 
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if(user){
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] }); 
      }
    
      // Get users gravatars
      const avatar = gravatar.url(email, {
        s: '200', //size
        r: 'pg', //reading
        d: 'mm' //default
      })

      user = new User({
        name,
        email,
        avatar,
        password
      });
    
      // Encrypt password 
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt)

      await user.save();
    
     const payload = {
       user: {
         id: user.id 
       }
     }

     jwt.sign(
       payload, 
       config.get('jwtSecret'),
       { expiresIn: 360000 },
       (err, token) => {
         if(err) throw err;
         res.json({ token });
       });

    } catch (err){
        console.error(err.message);
        res.status(500).send('server error');
    }

});

module.exports = router;