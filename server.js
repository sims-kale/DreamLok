const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();
// const PORT = 5000;
const PORT = config.PORT || 3000;

// MongoDB Connection
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const dreamSchema = new mongoose.Schema({
  date: String,
  title: String,
  description: String,
  emotions: String,
  symbols: String,
  meaning: String,
  reflection: String,
});

const Dream = mongoose.model('Dream', dreamSchema);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//  Save a dream
app.post('/api/dreams', async (req, res) => {
  const newDream = new Dream(req.body);
  await newDream.save();
  res.json({ message: 'Dream saved' });
});

// Get all dreams
app.get('/api/dreams', async (req, res) => {
  const dreams = await Dream.find().sort({ _id: -1 });
  res.json(dreams);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
