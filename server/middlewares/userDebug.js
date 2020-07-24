const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const user = await User.findOne().select('-password');
    req.user = user;
    console.log(req.user);
    next();
  } catch (error) {
    next(error);
  }
};
