const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

function signToken ({ email, username, _id }) {
  const payload = { email, username, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/');
    } else {
      next();
    }
  };

  module.exports = {withAuth, signToken};
  