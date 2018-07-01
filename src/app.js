const Films = require('./models/films.js');
const FilmListView = require('./views/film_list_view.js');
const FilmDetailView = require('./views/film_detail_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

const listContainer = document.querySelector('#films');
const filmListView = new FilmListView(listContainer);
filmListView.getTheFimDataFromTheModelAndPopulateDropDown();

const films = new Films;
films.bindEvents()
films.getData();

const detailElement = document.querySelector('#film-info')
const filmDetailView = new FilmDetailView(detailElement);
filmDetailView.bindEvents();

// filmListView.getNames();

});
