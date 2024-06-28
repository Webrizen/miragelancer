const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../config/nodemailer");

// Function to generate an email verification token
function generateVerificationToken() {
  // Generate a random token for simplicity
  const tokenLength = 32;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
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

// User registration
const registerUser = async (req, res) => {
  const { name, email, password, role, profilePicture } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      profilePicture,
    });

    // Generate an email verification token
    const emailVerificationToken = generateVerificationToken();

    // Save the user with the verification token
    newUser.verificationToken = emailVerificationToken;

    // Save the user to the database
    await newUser.save();

    // Send a verification email
    const mailOptions = {
      from: `${process.env.SENDER_EMAIL}`,
      to: newUser.email,
      subject: "Email Verification - Miragelancer",
      text: `Please click the following link to verify your email: ${generateVerificationLink(
        emailVerificationToken
      )}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending verification email:", error);
        return res
          .status(500)
          .json({ message: "Failed to send verification email." });
      } else {
        console.log("Verification email sent:", info.response);
        return res.status(201).json({
          message: "User registered successfully. Verification email sent.",
        });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// User login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if user is verified
    if (!user.isVerified) {
      return res
        .status(400)
        .json({ message: "Please verify your email before logging in" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token with an expiration date and include the user's ID in the payload
    const token = jwt.sign(
      { userId: user._id },
      `${process.env.JWT_SECRET_KEY}`,
      {
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES,
      }
    );

    res.json({
      userId: user._id,
      role: user.role,
      message: "Login successful.",
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Verify email
const verifyEmail = async (req, res) => {
  const token = req.params.token;

  try {
    // Find user by verification token
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Verify user
    user.isVerified = true;
    user.verificationToken = "";

    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  const userId = req.user.id;
  const updateData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { ...updateData, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).select('-password -verificationToken'); // Exclude password and verificationToken
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser, loginUser, verifyEmail, updateUserProfile, getUserById };
