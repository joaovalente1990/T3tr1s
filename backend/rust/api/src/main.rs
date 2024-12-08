#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

mod models;
mod schema;

use rocket_contrib::json::Json;
use crate::models::models::*;
use rand::prelude::*;


#[get["/games/new"]]
fn create_game() -> Json<i32>{
    Json(1)
}

#[get["/game/<_id>"]]
fn start_game(_id: i32) -> Json<Vec<Piece>>{


    let mut rand_rng = rand::thread_rng();

    let current_piece = Piece{ tetrimino_type: rand_rng.gen_range(0..19), ..Default::default() };
   
    let last_piece = Piece::default();

    let next_piece = Piece::default();

    let mut pieces_vector = Vec::new();

    pieces_vector.push(current_piece);
    pieces_vector.push(last_piece);
    pieces_vector.push(next_piece);

    Json(pieces_vector)
}


fn main(){

    rocket::ignite()
            .mount("/", routes![
                create_game,
                start_game
            ])
            .launch();

}