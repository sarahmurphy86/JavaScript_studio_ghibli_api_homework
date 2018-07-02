const PubSub = require('../helpers/pub_sub.js');


const FilmListView = function (dropdown) {
  this.dropdown = dropdown;
};

FilmListView.prototype.getTheFimDataFromTheModelAndPopulateDropDown = function () {
  this.dropdown.addEventListener('change', (event) =>{
    const filmSelected = event.target.value;
    // console.log(filmNameSelected);
    PubSub.publish('FilmListView:get-film-details', filmSelected);
  });

  PubSub.subscribe('Films:film-name', (event) => {
    const filmIndex = event.detail;
    // console.log(filmNames);
    this.populate(filmIndex);
  });
};


FilmListView.prototype.populate = function (films) {
  films.forEach((film, index) => {
    const option = document.createElement('option');
    option.textContent = film.title;
    option.value = index
    // console.log(option);
    this.dropdown.appendChild(option);
  });
};



module.exports = FilmListView;
