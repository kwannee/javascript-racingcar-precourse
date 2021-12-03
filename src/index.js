import Car from './Car.js';
import { $ } from './utils/dom.js';
function RacingGame() {
  this.cars = [];
  this.init = () => {
    initEventHandler();
  };
  const setCarNames = () => {
    const carNamesArray = getCarNames().split(',');
    this.cars = carNamesArray;
  };
  const getCarNames = () => $('#car-names-input').value;
  const initEventHandler = () => {
    $('#car-names-form').addEventListener('submit', (e) => e.preventDefault());
    $('#racing-count-form').addEventListener('submit', (e) =>
      e.preventDefault(),
    );
    $('#car-names-submit').addEventListener('click', setCarNames);
  };
}
const racingGame = new RacingGame();
racingGame.init();
