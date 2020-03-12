// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//     res.json([]);
// })

// module.exports = router;

const User = require('../models/user')

module.exports = function(app) {
    app.get('/users', (req, res) => {
        User.getUsers((err, data) => {
            res.status(200).json(data);
        });
    });

    app.post('/users', (req, res) => {
        // console.log(req.body);
        const userData = {
            id: null,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            created_at: null,
            updated_at: null
        };

        User.insertUser(userData, (err, data) => {
            if (data && data.insertId) {
                res.status(200).json({
                    success: true,
                    msg: 'Usuario insertado',
                    data: data
                });
            } else {
                res.status(500).json({
                    success: false,
                    msq: 'Error'
                })
            }
        });
    });

}

