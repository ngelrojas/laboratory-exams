import express from 'express';
import ExamController from '../controllers/exam.controller';

const router = express.Router();

router.get('/', async(_req, res) => {
    const controller = new ExamController();
    const response = await controller.getExams();
    return res.send(response);
});

router.post('/', async(req, res) => {
    const controller = new ExamController();
    const response = await controller.createExam(req.body);
    if(!response) return res.status(404).send({message: 'the laboratory or exam is not enable'});
    return res.send(response);
});

router.get('/:id', async(req, res) => {
    const controller = new ExamController();
    const response = await controller.getExam(req.params.id);
    if(!response) res.status(404).send({message: 'No exam found'});
    return res.send(response);
});

export default router;
