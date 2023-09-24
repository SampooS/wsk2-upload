import express from 'express';

import uploadRoute from './routes/uploadRoute';
import MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'routes: uploads',
  });
});

router.use('/uploads', uploadRoute);

export default router;
