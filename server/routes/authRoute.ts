import express from 'express';
import authControllers from '../controllers/authController';
import { vaildRegister } from '../middlewares/valid';
const router = express.Router();


router.post('/', vaildRegister, authControllers.register);



export default router;


