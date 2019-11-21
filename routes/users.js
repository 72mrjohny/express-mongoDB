const express = require('express');
const router = express.Router();
let usersNumber = '10';
let usersGender = 'both';

/* GET home page. */
router.get('/', (req, res) => {
    res.render('users', { title: 'Users' });
});


/* POST home page. */
router.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    let usersNumber = body.usersNumber;
    let usersGender = body.gender;
    console.log(usersNumber, usersGender);
    const url = `https://randomuser.me/api?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`;
    console.log(url);

    req.get(url);
    res.send({ url });

});


module.exports = router;
