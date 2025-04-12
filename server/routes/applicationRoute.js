const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
// Get all applications
router.get('/', async (req, res) => {
  const apps = await Application.find();
  res.json(apps);
});

// Add a new application
router.post('/', async (req, res) => {
  const newApp = new Application(req.body);
  await newApp.save();
  res.status(201).json(newApp);
});

// Update application status
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const app = await Application.findByIdAndUpdate(id, { status }, { new: true });
  if (!app) return res.status(404).json({ error: 'Application not found' });
  res.json(app);
});

// Delete an application
router.delete('/:id', async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
