import express from 'express';
import LaboratoryController from '../controllers/laboratory.controller';

const router = express.Router();

router.get('/', async(_req, res) => {
    const controller = new LaboratoryController();
    const response = await controller.getLaboratories();
    return res.send(response);
});

router.post('/', async(req, res) => {
    const controller = new LaboratoryController();
    const response = await controller.createLaboratory(req.body);
    return res.send(response);
});

router.get('/:id', async(req, res) => {
    const controller = new LaboratoryController();
    const response = await controller.getLaboratory(req.params.id);
    if(!response) res.status(404).send({message: 'No laboratory found'});
    return res.send(response);
});

export default router;
