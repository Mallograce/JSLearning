const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB: function () {
      if (this.privat) {
          this.privat = false;
      } else {
          this.privat = true;
      }
    },
    showStartMessage: function()  {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (isNaN(this.count) || this.count == '' || this.count === null) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberFilms: function () {
        for (let i = 0; i < this.count; i++) {
            const answer_a = prompt('Один из последних просмотренных фильмов?', ''),
                answer_b = prompt('На сколько оцените его?', '');

            if (answer_a !== null && answer_a !== '' && answer_a.length < 50 && answer_b !== null && answer_b !== '') {
                this.movies[answer_a] = answer_b;
                console.log(`OK`);
            } else {
                console.log(`ERROR`);
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10 && this.count !== 0) {
            alert(`Просмотрено довольно мало фильмов`);
        } else if (this.count >= 10 && this.count <= 30) {
            alert(`Вы классический зритель`)
        } else if (this.count > 30) {
            alert(`Вы киноман`)
        } else {
            console.log(`ERROR`);
        }
    },
    showMyDB: function (DB, value) {
        if (value === false) {
            console.log(DB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`, ``);

            if (genre === '' || genre === null) {
                console.log('Вы ввели неправильные данные');
                i--;
            }
            else {
                this.genres[i - 1] = genre;
            }
        }

        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};






