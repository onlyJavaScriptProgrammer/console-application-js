'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++){
    
            const answerOnFilm = prompt('Один из последних просмотренных фильмов ?', ''),
                  ratingOfFilm = prompt('На сколько вы его оцените ?', '');
        
            if(answerOnFilm != null && answerOnFilm != '' && ratingOfFilm != null && ratingOfFilm != '' && answerOnFilm.length < 50){
                personalMovieDB.movies[answerOnFilm] = ratingOfFilm;
            }else {
                i--;
            }
        } 
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10){
            console.log('Просмотренно довольно мало фильмов');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        }else if(personalMovieDB.count >= 30){
            console.log('Вы киноман');
        }else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if(personalMovieDB.privat === false){
            console.log(personalMovieDB);
        } else {
            console.log('Конфиденциальные данные');
        }
    },
    writeYourGeners: function() {
        for(let i = 0; i < 3; i++){
            const answerGener = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            if(answerGener == null || answerGener ==''){
                i--;
            }else{
                personalMovieDB.genres.push(answerGener);
            }
        }

        personalMovieDB.genres.forEach((genre, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${genre}`);
        });
    },
    toggleVisibleMyDB:function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }
    }
};





