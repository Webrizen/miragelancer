const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const authMiddleware = require('../middleware/authMiddleware');

// Send a message
router.post('/', authMiddleware, async (req, res) => {
  const { recipient, content } = req.body;
  const sender = req.user.userId;

  try {
    const newMessage = new Message({
      sender,
      recipient,
      content,
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error sending message', error });
  }
});

// Get messages between two users
router.get('/:userId', authMiddleware, async (req, res) => {
  const { userId } = req.params;
  const currentUser = req.user.userId;

  try {
    const messages = await Message.find({
      $or: [
        { sender: currentUser, recipient: userId },
        { sender: userId, recipient: currentUser },
      ],
    }).sort({ createdAt: 'asc' });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages', error });
  }
});

module.exports = router;