const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

//determines the complexity of the hashing algorithm.
const SALT_ROUNDS = 10; 

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    password: {
      type: String,
    },
    displayName: {
      type: String,
    },
    photoURL: {
      type: String,
      default: "https://placehold.co/500x500",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    bio: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    emailVerificationExpire: Date,
    skills: {
      type: [String],
    },
    portfolio: {
      type: [String],
    },
    social: {
      website: {
        type: String,
      },
      instagram: {
        type: String,
      },
      facebook: {
        type: String,
      },
    },
    customMeetingURL: {
      type: String,
    },
    role: {
      type: String,
      enum: ["client", "freelancer", "admin"],
      default: "client",
    },
    location: {
      state: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    overallRating: {
      type: Number,
      default: 0,
    },
    profileQuickTitle: {
      type: String,
    },
    feedbacks: [
      {
        clientName: {
          type: String,
        },
        profilePhoto: {
          type: String,
        },
        feedbackText: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

// Pre-save hook to hash password before saving
userSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashedPassword = await bcrypt.hash(this.password, SALT_ROUNDS);
    this.password = hashedPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword, next) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (error) {
    return next(error);
  }
};

// Create and export User model
module.exports = mongoose.model("User", userSchema);
