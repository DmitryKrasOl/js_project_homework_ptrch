"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalVovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a, b;

for (let i = 0; i < 2; i++) {
  a = prompt("Один из последних просмотренных фильмов?", "");
  b = +prompt("На сколько оцените его?", "");
  personalVovieDB.movies[a] = b;
}

console.log(personalVovieDB);
