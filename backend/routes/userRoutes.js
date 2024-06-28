const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  verifyEmail,
  updateUserProfile,
  getUserById,
} = require("../controllers/userController");
const auth = require("../middleware/auth");

// User routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/profile", auth, updateUserProfile);
router.get("/verify-email/:token", verifyEmail);
router.get("/:id", getUserById);

module.exports = router;
