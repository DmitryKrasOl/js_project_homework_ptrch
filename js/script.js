"use strict";


let numberOfFilms;
do {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

   if (numberOfFilms <= 10) {
      alert("Просмотренно довольно мало фильмов");

   } else if (numberOfFilms > 10) {
      alert("Вы классический зритель");

   } else if (numberOfFilms > 30) {
      alert("Вы киноман");
   } else {
      alert('Произошла ошибка');
      continue;
   }
} while (!numberOfFilms);

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");


const personalVovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

let a, b;

a = +"dsdfdsf"
console.log(a);

for (let i = 0; i < 2; i++) {
   let toggle = true;
   do {
      a = prompt("Один из последних просмотренных фильмов?", "");
      // console.log(a.length);
      if (a.length === 0) {
         alert("Всетаки ответьте на вопрос");
         toggle = false;
      } else if (a.length >= 50) {
         console.log(a.length);
         alert("Введите не больше 50-и символов");
         toggle = false;
      } else {
         toggle = true;
      }
   } while (toggle === false);

   do {
      b = +prompt("На сколько оцените его?", "");
      if (b.length === 0) {
         alert("Введите оценку.");
         toggle = false;
      } else if (isNaN(b)) {
         alert("Введите число");
         toggle = false;
      } else {
         toggle = true;
      }
   } while (toggle === false);

   personalVovieDB.movies[a] = b;
}


// let a = "";
// let g = a.length;
// console.log(`g = ${g}`);
console.log(personalVovieDB);
