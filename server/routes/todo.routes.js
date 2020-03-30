const express = require('express');
const authRoutes = express.Router();

const passport = require('passport');
const bcrypt = require('bcryptjs');

const User = require('../models/User.model')
const Todo = require('../models/Todo.model')


module.exports = authRoutes;