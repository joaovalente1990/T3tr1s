FROM rustlang/rust:nightly

WORKDIR /app/

COPY ./api .

RUN cargo install diesel_cli --no-default-features --features postgres
RUN cargo install cargo-watch

CMD ["cargo", "watch", "--why", "--", "echo"]
