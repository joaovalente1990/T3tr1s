import { Request, Response, NextFunction } from "express";

import Game from "../models/game";
import Piece from "../models/piece";
import { GAME, PIECE } from "../common/constants";
import { IGame, IPiece, IRequest } from "../common/types";

import createMQProducer from "../broker/producer";

const GAMES_QUEUE_NAME = "GamesQueue";

const producer = createMQProducer(
  `${process.env.GAMES_AMQP_URL}`,
  GAMES_QUEUE_NAME
);

class gameService {
  createGame(req: IRequest, res: Response, next: NextFunction) {
    const game = new Game({
      status: GAME.STATUS.IN_GAME,
      n_lines: 22,
      n_rows: 10,
      n_levels: 29,
      score: 0,
      userId: req.userId,
    });

    game
      .save()
      .then((result: IGame) => {
        res.status(201).json({ id: result._id });
      })
      .catch((err: Error) => {
        next(err);
      });
  }

  startGame(req: Request, res: Response, next: NextFunction) {
    Game.findOne({ _id: req.params.gameId })
      .then((game: IGame | null) => {
        if (!game) {
          throw new Error("Game not found!");
        }

        Piece.findOne({ _id: game.current_piece })
          .then((currentPiece: IPiece | null) => {

            if (currentPiece!.status != PIECE.STATUS.STOPPED) {

              currentPiece!.type = Math.floor(Math.random() * 18);
              game.next_piece_type = Math.floor(Math.random() * 18);

              switch (currentPiece!.type) {
                case PIECE.TYPE.TETRIMINO_RED_VERTICAL:
                  currentPiece!.width = 4;
                  break;
                case PIECE.TYPE.TETRIMINO_RED_HORIZONTAL: case PIECE.TYPE.TETRIMINO_CYAN_VERTICAL: case PIECE.TYPE.TETRIMINO_CYAN_HORIZONTAL: case PIECE.TYPE.TETRIMINO_BLUE_RIGHT: case PIECE.TYPE.TETRIMINO_MAGENTA_DOWN: case PIECE.TYPE.TETRIMINO_MAGENTA_LEFT: case PIECE.TYPE.TETRIMINO_MAGENTA_RIGHT: case PIECE.TYPE.TETRIMINO_YELLOW_SQUARE:
                  currentPiece!.width = 3;
                  break;
                case PIECE.TYPE.TETRIMINO_BLUE_UP: case PIECE.TYPE.TETRIMINO_BLUE_DOWN: case PIECE.TYPE.TETRIMINO_BLUE_LEFT: case PIECE.TYPE.TETRIMINO_ORANGE_UP: case PIECE.TYPE.TETRIMINO_ORANGE_DOWN: case PIECE.TYPE.TETRIMINO_ORANGE_LEFT: case PIECE.TYPE.TETRIMINO_ORANGE_RIGHT: case PIECE.TYPE.TETRIMINO_GREEN_VERTICAL: case PIECE.TYPE.TETRIMINO_GREEN_HORIZONTAL:
                  currentPiece!.width = 2;
                  break;
                case PIECE.TYPE.TETRIMINO_MAGENTA_UP:
                  currentPiece!.width = 1;
                  break;
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new gameService();
