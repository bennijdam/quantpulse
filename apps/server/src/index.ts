import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import analyticsRouter from './routes/analytics';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'quantpulse-server' });
});

app.use('/api/analytics', analyticsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
