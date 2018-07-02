const Helper = require('../helpers/helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Films = function (){
  this.filmsData = []
}

Films.prototype.bindEvents = function () {

  PubSub.subscribe('FilmListView:get-film-details', (event) =>{
    const filmIndex = event.detail;
    console.log(filmIndex);
    const selectedFilm = this.filmsData[filmIndex]
    // console.log(selectedFilm);
    PubSub.publish('Films:film-information', selectedFilm);
  });
};

Films.prototype.getData = function () {
  const helper = new Helper('https://ghibliapi.herokuapp.com/films')
  helper.get((allFilmData) => {
  // console.log(allFilmData);
  this.filmsData = allFilmData;
  // const filmNames = this.films.map((film) => {
  //     return film.title;
  //   });
  // console.log(filmNames);
  // console.log(allFilmData);
  PubSub.publish('Films:film-name', allFilmData);
  });

};
module.exports = Films;
