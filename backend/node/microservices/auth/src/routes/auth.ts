import express from 'express';

import authController from '../controllers/auth';

const router = express.Router();

router.put("/signup", authController.postSignup);

router.post("/login", authController.postLogin);

router.post("/logout", authController.postLogout);

export default router;
