const User = require('../models/User');
const jwt = require('jsonwebtoken');
const transporter = require('../config/nodemailer');
const bcrypt = require('bcrypt');

// Function to generate an email verification token
function generateVerificationToken() {
  // Generate a random token for simplicity
  const tokenLength = 32;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }
  return token;
}

// Function to generate the verification link
function generateVerificationLink(emailVerificationToken) {
  return `https://${process.env.DOMAIN}/auth/verify-email?token=${emailVerificationToken}`;
}

// Email/password signup controller
exports.signup = async (req, res) => {
  const { email, password, role, location, displayName } = req.body;

  try {
    // Check if the email is already registered
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Generate email verification token
    const emailVerificationToken = generateVerificationToken();

    // Create a new user
    const newUser = new User({
      email,
      password,
      role,
      location,
      verificationToken: emailVerificationToken,
      displayName
    });

    // Save the user to the database
    await newUser.save();

    // Send verification email
    const verificationLink = generateVerificationLink(emailVerificationToken);
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: 'Verify Your Email - Miragelancer',
      html: `Click <a href="${verificationLink}">here</a> to verify your email.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending verification email:', error);
        return res.status(500).json({ message: 'Failed to send verification email.' });
      } else {
        console.log('Verification email sent:', info.response);
        return res.status(201).json({ message: 'User registered. Verification email sent.' });
      }
    });

    // Respond with success message
    res.status(201).json({ message: 'User created successfully. Please check your email to verify your account.' });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Email/password login controller
exports.login = async (req, res) => {
  // Implement login logic
};