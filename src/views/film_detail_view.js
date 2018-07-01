const PubSub = require('../helpers/pub_sub.js');


const FilmDetailView = function (containerForFilmDetails){
  this.container = containerForFilmDetails
};

FilmDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:film-information', (event) => {
    const filmDetails = event.detail;
    console.log(filmDetails);
    this.populateTheContainer(filmDetails);
  });
};

FilmDetailView.prototype.populateTheContainer = function (film) {
  const filmInfo = document.createElement('div');

  const filmName = film.title;
  const htmlElementForFilmName = document.createElement('h2');
  htmlElementForFilmName.textContent = filmName;
  filmInfo.appendChild(filmName);

  const filmDescription = film.description;
  const htmlElementForDescription = document.createElement('p');
  htmlElementForDescription.textContent = filmDescription;
  filmInfo.appendChild(filmDescription);
};

module.exports = FilmDetailView;
