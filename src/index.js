import Car from './Car.js';
import { $ } from './utils/dom.js';
function RacingGame() {
  this.cars = [];
  this.init = () => {
    initEventHandler();
  };

  const startRacingGame = () => {
    if (!this.cars.length) {
      alert('자동차 이름을 입력하고 확인 버튼을 눌러주세요.');
      $('#car-names-input').focus();
      return;
    }
    const racingCount = getRacingCount();
    if (!isValidCountInput(racingCount)) {
      alert('시도할 횟수 입력이 올바르지 않습니다.');
      $('#racing-count-input').focus();
      $('#racing-count-input').value = '';
      return;
    }
  };
  const getRacingCount = () => $('#racing-count-input').value;
  const isValidCountInput = (racingCount) => racingCount > 0;

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
    $('#racing-count-submit').addEventListener('click', startRacingGame);
  };
}
const racingGame = new RacingGame();
racingGame.init();
