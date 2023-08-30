"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalVovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

let toggle = 0;

while (toggle < 2) {
   const
      a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколька оцените его?", '');

   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalVovieDB.movies[a] = b;
      console.log('done');
      toggle++;
   } else {
      console.log('error');
      toggle--;
   }

}

/* 
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
 */

/* 
if (personalVovieDB.count < 10) {
   console.log('Просмотренно довольно мало фильмов');
} else if (personalVovieDB.count >= 10 && personalVovieDB.count < 30) {
   console.log('Вы классический зритель');
} else if (personalVovieDB.count >= 30) {
   console.log('Вы киноман');
} else {
   console.log('Произошла ошибка');
}
 */
console.log(personalVovieDB);