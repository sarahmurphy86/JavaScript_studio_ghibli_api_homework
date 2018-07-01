const PubSub = require('../helpers/pub_sub.js');


const FilmListView = function (dropdown) {
  this.dropdown = dropdown;
};

FilmListView.prototype.getTheFimDataFromTheModelAndPopulateDropDown = function () {
  this.dropdown.addEventListener('change', (event) =>{
    const filmNameSelected = event.target.value;
    // console.log(filmNameSelected);
    PubSub.publish('FilmListView:get-film-details', filmNameSelected);
  });

  PubSub.subscribe('Films:film-name', (event) => {
    const filmNames = event.detail;
    // console.log(filmNames);
    this.populate(filmNames);
  });
};


FilmListView.prototype.populate = function (filmNames) {
  for (const filmName of filmNames) {
    const option = document.createElement('option');
    option.textContent = filmName.title;
    // console.log(option);
    this.dropdown.appendChild(option);
  };
};



module.exports = FilmListView;
