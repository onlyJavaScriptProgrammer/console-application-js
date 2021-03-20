'use strict';

let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    }
}

function showMyDB() {
    if(personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}

function writeYourGeners() {
    for(let i = 0; i < 3; i++){
        const answerGener = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        personalMovieDB.genres.push(answerGener);
    }
}

function rememberMyFilms() {
    for(let i = 0; i < 2; i++){

        const answerOnFilm = prompt('Один из последних просмотренных фильмов ?', ''),
              ratingOfFilm = prompt('На сколько вы его оцените ?', '');
    
        if(answerOnFilm != null && answerOnFilm != '' && ratingOfFilm != null && ratingOfFilm != '' && answerOnFilm.length < 50){
            personalMovieDB.movies[answerOnFilm] = ratingOfFilm;
        }else {
            i--;
        }
    } 
}

function detectPersonalLevel() {
    if(numberOfFilms < 10){
        console.log('Просмотренно довольно мало фильмов');
    }else if(numberOfFilms >= 10 && numberOfFilms < 30){
        console.log('Вы классический зритель');
    }else if(numberOfFilms >= 30){
        console.log('Вы киноман');
    }else {
        console.log('Произошла ошибка');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();
writeYourGeners();
showMyDB();
detectPersonalLevel();



