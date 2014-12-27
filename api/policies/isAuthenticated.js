module.exports = function(req, res, next) {
  if (req.user) return next();
  return res.forbidden('You are not permitted to perform this action.');
};
