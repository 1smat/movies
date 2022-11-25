create database movie;

create table movies (
    movie_id serial not null primary key,
    movie_title character varying(40),
    movie_date date default current_date
);
--  check
\!dt+
-- connect
\c dbname

-- insert
insert into movies(movie_title, movie_date) values ('Spider-man 4', '2022-10-22');

-- select
select * from movies;