
use serde::{Serialize};
use crate::schema::schema::*;

pub struct Game {
    pub id: i32,
    pub piece_id: i32,
    pub status: i32
}

#[derive(Serialize, Default)]
pub struct Piece {
    pub id: i32,
    pub tetrimino_type: i32,
    pub xpos: i32,
    pub ypos: i32,
    pub col: i32,
    pub width: i32,
    pub height: i32,
    pub is_stopped: bool,
    pub move_allowed_left: bool,
    pub move_allowed_right: bool,
    pub move_allowed_down: bool
}