const express = require("express");
const router = express.Router();
const User = require("../models/User");
const transporter = require("../config/nodemailer");
const jwt = require("jsonwebtoken");

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
  return `https://${process.env.DOMAIN}/verify-email?token=${emailVerificationToken}`;
}

// Register a new user
router.post("/register", async (req, res) => {
  const { email, password, displayName, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newUser = new User({
      email,
      password,
      displayName,
      role,
      verificationToken: generateVerificationToken(),
      emailVerificationExpire: Date.now() + 3600000, // 1 hour
    });

    await newUser.save();

    // Send verification email
    const verificationLink = generateVerificationLink(
      newUser.verificationToken
    );
    await transporter.sendMail({
      to: newUser.email,
      subject: "Verify your email - Miragelancer",
      html: `<p>Please verify your email by clicking on the following link: <a href="${verificationLink}">${verificationLink}</a></p>`,
    });

    res
      .status(201)
      .json({
        message:
          "User registered successfully. Please check your email for verification.",
      });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

// Verify email token
router.get("/verify-email/:token", async (req, res) => {
  const token = req.params.token;

  try {
    const user = await User.findOne({
      verificationToken: token
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.emailVerified = true;
    user.verificationToken = undefined;
    user.emailVerificationExpire = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).json({ message: "Error verifying email", error });
  }
});

// User login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (!user.emailVerified) {
      return res
        .status(400)
        .json({ message: "Please verify your email before logging in" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES,
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

// Get user details
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user details", error });
  }
});

// Update user details
router.put("/:id", async (req, res) => {
  const { email, password, displayName, ...otherFields } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (email) user.email = email;
    if (password) user.password = await bcrypt.hash(password, 10);
    if (displayName) user.displayName = displayName;
    Object.assign(user, otherFields);

    await user.save();
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
});

module.exports = router;
