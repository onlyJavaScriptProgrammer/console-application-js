'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){

    const answerOnFilm = prompt('Один из последних просмотренных фильмов ?', ''),
          ratingOfFilm = prompt('На сколько вы его оцените ?', '');

    if(answerOnFilm != null && answerOnFilm != '' && ratingOfFilm != null && ratingOfFilm != '' && answerOnFilm.length < 50){
        personalMovieDB.movies[answerOnFilm] = ratingOfFilm;
    }else {
        i--;
    }
} 

if(personalMovieDB.count < 10){
    console.log('Просмотренно довольно мало фильмов');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
}else if(personalMovieDB >= 30){
    console.log('Вы киноман');
}


console.log(personalMovieDB.movies);
