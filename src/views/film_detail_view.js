const PubSub = require('../helpers/pub_sub.js');


const FilmDetailView = function (containerForFilmDetails){
  this.container = containerForFilmDetails
};

FilmDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:film-information', (event) => {
    const filmSelected = event.detail;
    // console.log(filmSelected);
    this.populateTheContainer(filmSelected);
  });
};


FilmDetailView.prototype.populateTheContainer = function (film) {
  const filmInfo = document.createElement('div');

  const filmName = film.title;
  const htmlElementForFilmName = document.createElement('h2');
  htmlElementForFilmName.textContent = filmName;
  filmInfo.appendChild(htmlElementForFilmName);

  const filmDescription = film.description;
  const htmlElementForDescription = document.createElement('p');
  htmlElementForDescription.textContent = filmDescription;
  filmInfo.appendChild(htmlElementForDescription);

  this.container.appendChild(filmInfo)
};

module.exports = FilmDetailView;
