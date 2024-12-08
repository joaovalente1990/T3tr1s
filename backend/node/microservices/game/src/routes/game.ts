import express from 'express';

import gameController from '../controllers/game';

const router = express.Router();

router.put("/new", gameController.postCreateGame as any);

router.put("/:gameId/start", gameController.putStartGame as any);

export default router;
