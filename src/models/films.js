const Helper = require('../helpers/helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Films = function (){
  this.filmsData = []
}

Films.prototype.getData = function () {
  const helper = new Helper('https://ghibliapi.herokuapp.com/films')
  helper.get((allFilmData) => {
  console.log(allFilmData);
  });

};
module.exports = Films;
