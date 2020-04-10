const express = require('express');
const authRoutes = express.Router();

const passport = require('passport');
const bcrypt = require('bcryptjs');

const User = require('../models/User')


authRoutes.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.json({
      status: "failed",
      message: 'Provide username and password'
    });
    return;
  }

  if (password.length < 7) {
    res.json({
      status: "failed",
      message: 'Please make your password at least 8 characters long.'
    });
    return;
  }

  User.findOne({
    username
  }, (err, foundUser) => {

    if (err) {
      res.json({
        status: "failed",
        message: "Username check went bad."
      });
      return;
    }

    if (foundUser) {
      res.json({
        status: "failed",

        message: 'Username taken. Choose another one.'
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      password: hashPass
    });

    aNewUser.save(err => {
      if (err) {
        res.status(400).json({
          message: 'Saving user to database went wrong.'
        });
        return;
      }

      req.login(aNewUser, (err) => {

        if (err) {
          res.status(500).json({
            message: 'Login after signup went bad.'
          });
          return;
        }

        res.status(200).json(aNewUser);
      });
    });
  });
});


authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.json({
        status: "failed",
        message: 'Something went wrong authenticating user'
      })
      return
    }

    if (!theUser) {

      res.json({
        status: "failed",
        message: 'Something is workng with the credentials, try again.'
      })
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({
          message: 'Something went wrong authenticating user'
        });
        return;
      }
      res.status(200).json(theUser);
    });
  })(req, res, next);
});



authRoutes.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({
    message: 'Log out success!'
  });
});


authRoutes.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({
    message: 'Unauthorized'
  });
});



module.exports = authRoutes;