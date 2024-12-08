import { Request, Response, NextFunction } from "express";

import gameService from "../services/game";
import { IRequest } from "../common/types";

class gameController {
  postCreateGame(req: IRequest, res: Response, next: NextFunction) {
    gameService.createGame(req, res, next);
  }

  putStartGame(req: Request, res: Response, next: NextFunction) {
    gameService.startGame(req, res, next);
  }
}

export default new gameController();
