import express from 'express';
import authControllers from '../controllers/authController';
const router = express.Router();

router.post('/', authControllers.register);



export default router;


