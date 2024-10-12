import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error('Database connection error:', err));

app.get('/', (req, res) => res.send('API running...'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
