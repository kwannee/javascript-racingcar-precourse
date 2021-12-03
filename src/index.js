import Car from './Car.js';
import { $ } from './utils/dom.js';
function RacingGame() {
  this.cars = [];
  this.init = () => {
    initEventHandler();
  };
  const setCarNames = () => {
    const carNamesArray = getCarNames().split(',');
    if (!isValidCarNames(carNamesArray)) {
      alert('자동차 이름은 5글자 이하로 입력해 주세요.');
      $('#car-names-input').value = '';
      $('#car-names-input').focus();
      return;
    }
    this.cars = carNamesArray.map((carName) => new Car(carName));
  };
  const isValidCarNames = (carNamesArray) =>
    carNamesArray.every((carName) => carName.length <= 5);
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
