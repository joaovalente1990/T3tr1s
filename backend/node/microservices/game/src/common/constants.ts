export const GAME = {
    STATUS: {
        IN_GAME: 0,
        OFF_GAME: 1
    }
} 

export const PIECE = {
    STATUS: {
        CREATED: 0,
        IN_MOTION: 1,
        STOPPED: 2
    },
    TYPE: {
        TETRIMINO_RED_VERTICAL: 0,
        TETRIMINO_RED_HORIZONTAL: 1,
        TETRIMINO_CYAN_VERTICAL: 2,
        TETRIMINO_CYAN_HORIZONTAL: 3,
        TETRIMINO_BLUE_UP: 4,
        TETRIMINO_BLUE_DOWN: 5,
        TETRIMINO_BLUE_LEFT: 6,
        TETRIMINO_BLUE_RIGHT: 7,
        TETRIMINO_MAGENTA_UP: 8,
        TETRIMINO_MAGENTA_DOWN: 9,
        TETRIMINO_MAGENTA_LEFT: 10,
        TETRIMINO_MAGENTA_RIGHT: 11,
        TETRIMINO_ORANGE_UP: 12,
        TETRIMINO_ORANGE_DOWN: 13,
        TETRIMINO_ORANGE_LEFT: 14,
        TETRIMINO_ORANGE_RIGHT: 15,
        TETRIMINO_YELLOW_SQUARE: 16,
        TETRIMINO_GREEN_VERTICAL: 17,
        TETRIMINO_GREEN_HORIZONTAL: 18
    },
    WIDTH: 30,
    HEIGHT: 30
}