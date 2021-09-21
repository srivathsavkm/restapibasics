import express from 'express';
import cartController from '../controllers/cartController';

const router = express.Router();

router.get('/ping', cartController.serverHealthCheck);
router.get('/hello', cartController.helloWorld);
router.post('/sampleRequest', cartController.sampleRequest);

export = router;
