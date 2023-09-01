"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
   }
}

start();

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const
         a = prompt("Один из последних просмотренных фильмов?", ""),
         b = prompt("На сколька оцените его?", '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalVovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}

rememberMyFilms();

const personalVovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

function detectPersonalLevel() {
   if (personalVovieDB.count < 10) {
      console.log('Просмотренно довольно мало фильмов');
   } else if (personalVovieDB.count >= 10 && personalVovieDB.count < 30) {
      console.log('Вы классический зритель');
   } else if (personalVovieDB.count >= 30) {
      console.log('Вы киноман');
   } else {
      console.log('Произошла ошибка');
   }
}

detectPersonalLevel();

function showMyDB() {
   if (personalVovieDB.privat == true) {
      console.log(personalVovieDB);
   }

}

function writeYourGenres() {
   for (let i = 0; i <= 2; i++) {
      const genre = prompt(`Вашь любимый жанр под номером ${i + 1}?`);

      while (genre == '' || genre == null || !isNaN(genre)) {
         genre = prompt(`Вашь любимый жанр под номером ${i + 1}?`);
      }
      personalVovieDB.genres[i] = genre;

   }

}

console.log(personalVovieDB);