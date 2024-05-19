const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new job posting
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, budget, skillsRequired, deadline } = req.body;
  const client = req.user.userId;

  try {
    const newJob = new Job({
      title,
      description,
      client,
      budget,
      skillsRequired,
      deadline,
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
});

// Get all job postings
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().populate('client', 'displayName');
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
});

// Get a specific job posting by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate('client', 'displayName');
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job', error });
  }
});

// Update a job posting by ID
router.put('/:id', authMiddleware, async (req, res) => {
  const { title, description, budget, skillsRequired, deadline, status } = req.body;

  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.client.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    if (title) job.title = title;
    if (description) job.description = description;
    if (budget) job.budget = budget;
    if (skillsRequired) job.skillsRequired = skillsRequired;
    if (deadline) job.deadline = deadline;
    if (status) job.status = status;

    await job.save();
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job', error });
  }
});

// Delete a job posting by ID
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.client.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await job.remove();
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job', error });
  }
});

module.exports = router;