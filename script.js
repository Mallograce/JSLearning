let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

while (isNaN(numberOfFilms) || numberOfFilms === '' || numberOfFilms === null) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

for (let i = 0; i < personalMovieDB.count; i++) {
    const answer_a = prompt('Один из последних просмотренных фильмов?', ''),
        answer_b = prompt('На сколько оцените его?', '');

    if (answer_a !== null && answer_a !== '' && answer_a.length < 50 && answer_b !== null && answer_b !== '') {
        personalMovieDB.movies[answer_a] = answer_b;
        console.log(`OK`);
    } else {
        console.log(`ERROR`);
        i--;
    }
}

if (personalMovieDB.count < 10 && personalMovieDB.count !== 0) {
    alert(`Просмотрено довольно мало фильмов`);
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert(`Вы классический зритель`)
} else if (personalMovieDB.count > 30) {
    alert(`Вы киноман`)
} else {
    console.log(`ERROR`);
}

console.log(personalMovieDB);

