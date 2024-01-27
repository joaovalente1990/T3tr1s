
import {PIECE, BTN} from "../common/constants";

export function drawTetrimino(context, type, pos_x, pos_y){
    switch(type){
        case PIECE.TYPE.TETRIMINO_RED_UP:

            context.fillStyle = "#FF0000";
            context.strokeStyle = "black";
            context.lineWidth = 2;

            context.fillRect(pos_x + PIECE.WIDTH, pos_y, PIECE.WIDTH, PIECE.HEIGHT);
            context.strokeRect(pos_x + PIECE.WIDTH, pos_y, PIECE.WIDTH, PIECE.HEIGHT);
            
            context.fillRect(pos_x, pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
            context.strokeRect(pos_x, pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);

            context.fillRect(pos_x + PIECE.WIDTH, pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
            context.strokeRect(pos_x + PIECE.WIDTH, pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);

            context.fillRect(pos_x, pos_y + 2*PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
            context.strokeRect(pos_x, pos_y + 2*PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);

        break;

        case PIECE.TYPE.TETRIMINO_CYAN_VERTICAL:

            context.fillStyle = "#00FFFF";
            context.strokeStyle = "black";
            context.lineWidth = 2;

            for(let n = 0; n < 4; n++){
                context.fillRect(pos_x, pos_y + (n*PIECE.HEIGHT), PIECE.WIDTH, PIECE.HEIGHT);
                context.strokeRect(pos_x, pos_y + (n*PIECE.HEIGHT), PIECE.WIDTH, PIECE.HEIGHT);
            }
           
        break;

        case PIECE.TYPE.TETRIMINO_CYAN_HORIZONTAL:

            context.fillStyle = "#00FFFF";
            context.strokeStyle = "black";
            context.lineWidth = 2;

            for(let n = 0; n < 4; n++){
                context.fillRect(pos_x + (n*PIECE.WIDTH), pos_y, PIECE.WIDTH, PIECE.HEIGHT);
                context.strokeRect(pos_x + (n*PIECE.WIDTH), pos_y, PIECE.WIDTH, PIECE.HEIGHT);
            }
           
        break;

        case PIECE.TYPE.TETRIMINO_BLUE_LEFT:

            context.fillStyle = "#0000FF";
            context.strokeStyle = "black";
            context.lineWidth = 2;

            for(let n = 0; n < 2; n++){
                context.fillRect(pos_x, pos_y  + (n*PIECE.HEIGHT), PIECE.WIDTH, PIECE.HEIGHT);
                context.strokeRect(pos_x, pos_y  + (n*PIECE.HEIGHT), PIECE.WIDTH, PIECE.HEIGHT);
            }

            for(let n = 1; n < 3; n++){
                context.fillRect(pos_x + (n*PIECE.WIDTH), pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
                context.strokeRect(pos_x + (n*PIECE.WIDTH), pos_y  + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
            }
       
        break;

        case PIECE.TYPE.TETRIMINO_MAGENTA_RIGHT:

            context.fillStyle = "#FF00FF";
            context.strokeStyle = "black";
            context.lineWidth = 2;

            for(let n = 0; n < 3; n++){
                context.fillRect(pos_x, pos_y  + (n*PIECE.HEIGHT), PIECE.WIDTH, PIECE.HEIGHT);
                context.strokeRect(pos_x, pos_y  + (n*PIECE.HEIGHT), PIECE.WIDTH, PIECE.HEIGHT);
            }

            for(let n = 1; n < 2; n++){
                context.fillRect(pos_x + (n*PIECE.WIDTH), pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
                context.strokeRect(pos_x + (n*PIECE.WIDTH), pos_y  + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
            }
       
        break;

        case PIECE.TYPE.TETRIMINO_ORANGE_RIGHT:

            context.fillStyle = "#FFA500";
            context.strokeStyle = "black";
            context.lineWidth = 2;

            context.fillRect(pos_x + 2*PIECE.HEIGHT, pos_y, PIECE.WIDTH, PIECE.HEIGHT);
            context.strokeRect(pos_x + 2*PIECE.HEIGHT, pos_y, PIECE.WIDTH, PIECE.HEIGHT);

            for(let n = 0; n < 3; n++){
                context.fillRect(pos_x + (n*PIECE.WIDTH), pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
                context.strokeRect(pos_x + (n*PIECE.WIDTH), pos_y  + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
            }
            
       
        break;

        case PIECE.TYPE.TETRIMINO_YELLOW_SQUARE:

            context.fillStyle = "#FFFF00";
            context.strokeStyle = "black";
            context.lineWidth = 2;

            for(let n = 0; n < 2; n++){
                context.fillRect(pos_x + (n*PIECE.WIDTH), pos_y, PIECE.WIDTH, PIECE.HEIGHT);
                context.strokeRect(pos_x + (n*PIECE.WIDTH), pos_y, PIECE.WIDTH, PIECE.HEIGHT);
            }

            for(let n = 0; n < 2; n++){
                context.fillRect(pos_x + (n*PIECE.WIDTH), pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
                context.strokeRect(pos_x + (n*PIECE.WIDTH), pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
            }
            
       
        break;

        case PIECE.TYPE.TETRIMINO_GREEN_UP:

            context.fillStyle = "#006400";
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

        case PIECE.TYPE.TETRIMINO_RED_LEFT:

            context.fillStyle = "#ff0000";
            context.strokeStyle = "black";
            context.lineWidth = 2;

            for(let n = 0; n < 2; n++){

                context.fillRect(pos_x + (n*PIECE.WIDTH), pos_y, PIECE.WIDTH, PIECE.HEIGHT);
                context.strokeRect(pos_x + (n*PIECE.WIDTH), pos_y, PIECE.WIDTH, PIECE.HEIGHT);

            }

            for(let n = 1; n < 3; n++){

                context.fillRect(pos_x + (n*PIECE.WIDTH), pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);
                context.strokeRect(pos_x + (n*PIECE.WIDTH), pos_y + PIECE.HEIGHT, PIECE.WIDTH, PIECE.HEIGHT);

            }

        break;


        }

}

export function drawButton(context, button, type){
    context.beginPath();
    context.roundRect(button.x, button.y, button.width, button.height, 4);
    context.fillStyle = '#f4511e';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#000000';
    context.stroke();
    context.closePath();
    context.font = '18pt Sans Serif';
    context.fillStyle = '#ffffff';

    switch(type){
        case BTN.PLAY:  context.fillText('PLAY', button.x + 100, button.y + 40);
                        break;
        case BTN.STATS: context.fillText('VIEW STATS', button.x + 60, button.y + 40);
                        break;
    }
   
}



export function clearCanvas(context, canvas_width, canvas_height){
    context.clearRect(0, 0, canvas_width, canvas_height);
}

