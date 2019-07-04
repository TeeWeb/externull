var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', {
    title: 'Home - Externull',
    logo: '../images/Externull-logo2-final.png'
  });
});

/* GET about page */
router.get('/about', function (req, res, next) {
  res.render('about', {
    title: 'About - Externull',
    logo: '../images/Externull-logo2-final.png'
  });
});

/* GET about page */
router.get('/portfolio', function (req, res, next) {
  res.render('portfolio', {
    title: 'Portfolio - Externull',
    logo: '../images/Externull-logo2-final.png'
  });
});

module.exports = router;