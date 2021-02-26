const express = require('express');

const router = exprss.router();

//GET / 라우터
router.get('/', (req, res) => {
    res.send('Hello, Express');
});

module.exports = router;