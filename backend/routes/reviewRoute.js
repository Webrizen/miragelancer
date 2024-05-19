const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const authMiddleware = require("../middleware/authMiddleware");

// Add a review to a completed job
router.post("/:jobId/review", authMiddleware, async (req, res) => {
  const { jobId } = req.params;
  const { rating, feedback } = req.body;
  const userId = req.user.userId;

  try {
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (
      job.client.toString() !== userId &&
      job.freelancer.toString() !== userId
    ) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    if (job.status !== "completed") {
      return res
        .status(400)
        .json({ message: "Job must be completed to leave a review" });
    }

    const newReview = {
      user: userId,
      rating,
      feedback,
    };

    if (userId === job.client.toString()) {
      job.clientReviews.push(newReview);
    } else {
      job.freelancerReviews.push(newReview);
    }

    await job.save();

    res
      .status(201)
      .json({ message: "Review added successfully", review: newReview });
  } catch (error) {
    res.status(500).json({ message: "Error adding review", error });
  }
});

// Get reviews for a specific job
router.get("/:jobId/reviews", async (req, res) => {
  const { jobId } = req.params;

  try {
    const job = await Job.findById(jobId)
      .populate("clientReviews.user", "displayName")
      .populate("freelancerReviews.user", "displayName");

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const reviews = {
      clientReviews: job.clientReviews,
      freelancerReviews: job.freelancerReviews,
    };

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
});

module.exports = router;