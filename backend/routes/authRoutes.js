const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Google OAuth authentication route
router.get('/google', authController.googleAuth);

// Google OAuth callback route
router.get('/google/callback', authController.googleAuthCallback);

// Email/password signup route
router.post('/signup', authController.signup);

// Email/password login route
router.post('/login', authController.login);

module.exports = router;