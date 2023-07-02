
import {PIECE} from "../common/constants";

export function drawTetrimino(context, type, pos_x, pos_y){
    switch(type){
        case PIECE.TYPE.TETRIMINO_RED_UP:

            context.fillStyle = "#FF0000";
            context.strokeStyle = "black";
            context.lineWidth = 2;

            context.fillRect(pos_x, pos_y, PIECE.WIDTH, PIECE.HEIGHT);
            context.strokeRect(pos_x, pos_y, PIECE.WIDTH, PIECE.HEIGHT);
            
            context.fillRect(pos_x, pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
            context.strokeRect(pos_x, pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);

            context.fillRect(pos_x + PIECE.WIDTH, pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
            context.strokeRect(pos_x + PIECE.WIDTH, pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);

            context.fillRect(pos_x + PIECE.WIDTH, pos_y + 2*PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
            context.strokeRect(pos_x + PIECE.WIDTH, pos_y + 2*PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);

        break;
    }

}

