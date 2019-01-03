const express = require('express');
const router = express.Router();
const User = require('./models/User');



exports.login = function (req, res) {

    const userName = req.body.userName;
    const password = req.body.password;

    User.findOne({
        user_name: userName
    }).then(user => {
        if (!user) {
            return res.status(400).json({
                error: 'user is not found'
            });
        }

        if(!user.password || user.password != password) {
            return res.status(400).json({
                error: 'password is wrong'
            });
        } else {
            res.json({
                success: true
            });
        }
    })
};