import express from 'express';
import PingController from '../controllers/ping';
import LaboratoryRouter from './laboratory.router';
import ExamRouter from './exam.router';

const router = express.Router();

router.use('/laboratories', LaboratoryRouter);
router.use('/exams', ExamRouter);

export default router;
