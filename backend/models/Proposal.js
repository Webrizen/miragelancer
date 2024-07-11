const mongoose = require('mongoose');

const ProposalSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  coverLetter: {
    introduction: {
      type: String,
      required: true
    },
    experience: {
      type: String,
      required: true
    },
    whyFit: {
      type: String,
      required: true
    }
  },
  proposedRate: {
    type: Number,
    required: true
  },
  hoursPerWeek: {
    type: Number
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Proposal = mongoose.model('Proposal', ProposalSchema);

module.exports = Proposal;