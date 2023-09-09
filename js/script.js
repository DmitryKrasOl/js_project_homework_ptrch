"use strict";


let personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: true,
   start: function () {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      }
   },
   rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
         const
            a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколька оцените его?", '');

         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
         } else {
            console.log('error');
            i--;
         };
      }
   },
   detectPersonalLevel: function () {
      if (personalVovieDB.count < 10) {
         console.log('Просмотренно довольно мало фильмов');
      } else if (personalVovieDB.count >= 10 && personalVovieDB.count < 30) {
         console.log('Вы классический зритель');
      } else if (personalVovieDB.count >= 30) {
         console.log('Вы киноман');
      } else {
         console.log('Произошла ошибка');
      }
   },

   writeYourGenres: function () {
      for (let i = 0; i <= 2; i++) {
         // First variant
         /* 
                  const genre = prompt(`Вашь любимый жанр под номером ${i + 1}?`);
         
                  if (genre === '' || genre == null) {
                     console.log('Вы ввели неккоректные данные или не ввели их вовсе');
                     i--;
                  } else {
                     personalMovieDB.genres[i] = genre;
                  }
                   */

         let genres = prompt(`Введите ваши любимые жанры через запятую`);

         if (genres === '' || genres == null) {
            console.log('Вы ввели неккоректные данные или не ввели их вовсе');
            i--;
         } else {
            // Разбиваем полученную строку на элементы массива
            personalMovieDB.genres = genres.split(', ');

         }

      };

      // Стрелочная ф-я
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр под номером ${i + 1} - это ${item} `);
      });

      // Мой вариант
      /* 
            personalMovieDB.genres.forEach(function (item, i, arr) {
               console.log(`Любимый жанр под номером ${i + 1} - это ${item} `);
               console.log(arr);
            });
             */
   },

   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },

   showMyDB: function (hidden) {
      if (!hidden === false) {
         console.log(personalMovieDB);
      }
   },

}

// personalMovieDB.writeYourGenres();


// personalMovieDB.start();


// personalMovieDB.detectPersonalLevel();

// console.log(personalMovieDB.privat);

// personalMovieDB.showMyDB();

// personalMovieDB.toggleVisibleMyDB();

// console.log(personalMovieDB.privat);

// personalMovieDB.showMyDB();



// personalMovieDB.rememberMyFilms();