const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(process.env.SOME);
  res.render('index', { title: 'Express' });
});

module.exports = router;
