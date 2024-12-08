import { Request, Response, NextFunction } from "express";

import authService from "../services/auth";

class authController {
  postLogin(req: Request, res: Response, next: NextFunction) {
    authService.login(req, res, next);
  }

  postSignup(req: Request, res: Response, next: NextFunction) {
    authService.signup(req, res, next);
  }

  postLogout(req: Request, res: Response, next: NextFunction) {
    authService.logout(req, res, next);
  }
}

export default new authController();
