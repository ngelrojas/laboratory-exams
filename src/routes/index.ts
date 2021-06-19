import express from 'express';
import PingController from '../controllers/ping';
import LaboratoryRouter from './laboratory.router';

const router = express.Router();

router.get('/ping', async (_req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
});

router.use('/laboratories', LaboratoryRouter);

export default router;
