const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    googleId: {
      type: String,
      unique: true,
      sparse: true
    },
    email: {
      type: String,
      unique: true,
      sparse: true
    },
    password: {
      type: String
    },
    displayName: {
      type: String
    },
    photoURL: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    bio: {
      type: String
    },
    skills: {
      type: [String]
    },
    portfolio: {
      type: [String]
    },
    social: {
      website: {
        type: String
      },
      instagram: {
        type: String
      },
      facebook: {
        type: String
      },
    },
    customMeetingURL: {
      type: String
    },
    location: {
      state: {
        type: String
      },
      country: {
        type: String
      }
    },
    overallRating: {
      type: Number,
      default: 0
    },
    profileQuickTitle: {
      type: String
    },
    feedbacks: [{
      clientName: {
        type: String
      },
      profilePhoto: {
        type: String
      },
      feedbackText: {
        type: String
      }
    }]
  }, { timestamps: true });  

// Create and export User model
module.exports = mongoose.model("User", userSchema);