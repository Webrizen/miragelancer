const express = require('express');
const router = express.Router();
const Bid = require('../models/Bid');
const Job = require('../models/Job');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new bid
router.post('/', authMiddleware, async (req, res) => {
  const { jobId, amount, proposal } = req.body;
  const freelancer = req.user.userId;

  try {
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const newBid = new Bid({
      job: jobId,
      freelancer,
      amount,
      proposal,
    });

    await newBid.save();
    res.status(201).json(newBid);
  } catch (error) {
    res.status(500).json({ message: 'Error creating bid', error });
  }
});

// Get all bids for a specific job
router.get('/job/:jobId', async (req, res) => {
  try {
    const bids = await Bid.find({ job: req.params.jobId }).populate('freelancer', 'displayName');
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bids', error });
  }
});

// Get a specific bid by ID
router.get('/:id', async (req, res) => {
  try {
    const bid = await Bid.findById(req.params.id).populate('freelancer', 'displayName');
    if (!bid) {
      return res.status(404).json({ message: 'Bid not found' });
    }
    res.status(200).json(bid);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bid', error });
  }
});

// Update a bid by ID
router.put('/:id', authMiddleware, async (req, res) => {
  const { amount, proposal, status } = req.body;

  try {
    const bid = await Bid.findById(req.params.id);

    if (!bid) {
      return res.status(404).json({ message: 'Bid not found' });
    }

    if (bid.freelancer.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    if (amount) bid.amount = amount;
    if (proposal) bid.proposal = proposal;
    if (status) bid.status = status;

    await bid.save();
    res.status(200).json(bid);
  } catch (error) {
    res.status(500).json({ message: 'Error updating bid', error });
  }
});

// Delete a bid by ID
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const bid = await Bid.findById(req.params.id);

    if (!bid) {
      return res.status(404).json({ message: 'Bid not found' });
    }

    if (bid.freelancer.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await bid.remove();
    res.status(200).json({ message: 'Bid deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting bid', error });
  }
});

module.exports = router;