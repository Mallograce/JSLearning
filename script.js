const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const answer_a = prompt('Один из последних просмотренных фильмов?', ''),
    answer_b = prompt('На сколько оцените его?', ''),
    answer_c = prompt('Один из последних просмотренных фильмов?', ''),
    answer_d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[answer_a] = answer_b;
personalMovieDB.movies[answer_c] = answer_d;

console.log(personalMovieDB);