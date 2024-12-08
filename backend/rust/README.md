# Tetris_Backend-Rust-Postgres

Project restructuring and creation of an initial draft of the endpoints create_game() and start_game().
<br/>
<br/>
First run: 
```
docker-compose up -d --build
```
to create the docker containers.
<br/>
<br/>
And then run:
```
docker-compose exec app cargo run
```
to compile the code of the project.
<br/>
<br/>
To test the endpoints run for example:

```
docker-compose exec app curl 127.0.0.1:8000/game/1
```
To test the endpoint to create a new game.