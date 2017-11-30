module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/auth/login');
  },
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated())
      res.redirect('/auth/secret');
    else
      return next();
  }
}
