const express = require('express');
const router = express.Router();
const Proposal = require('../models/Proposal');
const { auth } = require('../middleware/auth');

// Create a new proposal
router.post('/', auth, async (req, res) => {
  try {
    const proposal = new Proposal(req.body);
    const savedProposal = await proposal.save();
    res.status(201).json(savedProposal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all proposals
router.get('/', async (req, res) => {
  try {
    const proposals = await Proposal.find();
    res.status(200).json(proposals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single proposal by ID
router.get('/:id', async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    if (!proposal) return res.status(404).json({ message: 'Proposal not found' });
    res.status(200).json(proposal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a proposal by ID
router.put('/:id', auth, async (req, res) => {
  try {
    const updatedProposal = await Proposal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProposal) return res.status(404).json({ message: 'Proposal not found' });
    res.status(200).json(updatedProposal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a proposal by ID
router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedProposal = await Proposal.findByIdAndDelete(req.params.id);
    if (!deletedProposal) return res.status(404).json({ message: 'Proposal not found' });
    res.status(200).json({ message: 'Proposal deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;