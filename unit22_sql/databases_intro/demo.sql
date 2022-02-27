DROP DATABASE IF EXISTS movies_example;

CREATE DATABASE movies_example;

\c movies_example

CREATE TABLE movies_example
(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    release_year INTEGER,
    runtime INTEGER,
    rating TEXT
);

INSERT INTO movies_example
    (title, release_year, runtime, rating)

VALUES
    ('Star Wars: The Force Awakens', 2015, 136, 'PG-13'),
    ('Avatar', 2009, 160, 'PG-13'),
    ('Black Panther', 2018, 140, 'PG-13');