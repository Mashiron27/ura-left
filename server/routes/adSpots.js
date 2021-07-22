import express from 'express';
import { getAdSpots, createAdSpot } from '../controllers/adSpots.js';

const router = express.Router();

router.get('/', getAdSpots);
router.post('/', createAdSpot);

export default router;