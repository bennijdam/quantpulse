import { Router } from 'express';

const router = Router();

router.get('/mispricing-delta', (req, res) => {
  res.json({
    message: 'Mispricing Delta analytics endpoint',
    data: {
      delta: 0.0,
      timestamp: new Date().toISOString(),
    },
  });
});

router.get('/optimism-tax', (req, res) => {
  res.json({
    message: 'Optimism Tax analytics endpoint',
    data: {
      tax: 0.0,
      timestamp: new Date().toISOString(),
    },
  });
});

export default router;
