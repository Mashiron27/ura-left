import express from 'express';
import { getDesigns, createDesign } from '../controllers/design.js';

const router = express.Router();

router.get('/', getDesigns);
router.post('/', createDesign);

export default router;