const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'Invalid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['freelancer', 'client'],
    required: true,
  },
  profilePicture: {
    type: String,
    default: '',
    validate: [validator.isURL, 'Invalid URL'],
  },
  verificationToken: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  skills: {
    type: [String],
    default: [],
  },
  bio: {
    type: String,
    default: '',
    trim: true,
  },
  location: {
    city: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: '',
    },
    country: {
      type: String,
      default: '',
    },
  },
  hourlyRate: {
    type: Number,
    default: 0,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  availability: {
    type: String,
    default: '',
  },
  dob: {
    type: Date,
  },
  totalEarnings: {
    type: Number,
    default: 0,
  },
  projectsCompleted: {
    type: Number,
    default: 0,
  },
  buyersWorkedWith: {
    type: Number,
    default: 0,
  },
  feedbacks: {
    type: Number,
    default: 0,
  },
  totalRefund: {
    type: Number,
    default: 0,
  },
  lastModifiedDate: {
    type: Date,
    default: Date.now,
  },
  lastActive: {
    type: Date,
    default: Date.now,
  },
  socialLinks: {
    type: Map,
    of: String,
    default: {},
  },
  workExperience: [
    {
      jobTitle: String,
      dateJoined: Date,
      dateLeft: Date,
      organization: String,
    },
  ],
  certificates: [
    {
      title: String,
      dateIssued: Date,
      organization: String,
    },
  ],
  education: [
    {
      organization: String,
      degree: String,
      dateStarted: Date,
      dateEnded: Date,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;