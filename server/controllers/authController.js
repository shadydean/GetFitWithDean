const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const generateToken = require('../utils/generateToken')

const registerUser = async (req, res) => {
    const {username, email, password} = req.body;
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({error: 'User already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
          _id: user._id,
          username: user.username,
          email: user.email,
          token: generateToken(user._id),
        });
      } else {
        res.status(400).json({ message: 'Invalid user data' });
      }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user ||!(await bcrypt.compare(password, user.password))){
        return res.status(401).json({error: 'Invalid email or password'});
    }

    res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
    });
}

module.exports = {registerUser, loginUser}