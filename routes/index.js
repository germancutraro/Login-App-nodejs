const router = require('express').Router();
// basics routes
router.get('/', (req, res) => {
  res.render('index', {title: 'Login App - Node.Js - Express - MongoDB - Passport'});
});

module.exports = router;
