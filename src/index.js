import Car from './Car.js';
import { $, getElementValue } from './utils/dom.js';
import {
  carNamesFormID,
  carNamesSubmitID,
  carNamesInputID,
  racingCountFormID,
  racingCountInputID,
  raacingCountSubmitID,
} from './constant/index.js';
import {
  checkValidCarNames,
  checkValidRacingCount,
  checkCarNamesExist,
} from './utils/valid.js';

function RacingGame() {
  this.cars = [];
  this.init = () => {
    initEventHandler();
  };

  const setCarNames = () => {
    const carNamesArray = getElementValue(carNamesInputID).split(',');
    if (!checkValidCarNames(carNamesArray)) {
      return;
    }
    this.cars = carNamesArray.map((carName) => new Car(carName));
  };

  const startRacingGame = () => {
    if (!checkCarNamesExist()) {
      return;
    }
    const racingCount = getElementValue(racingCountInputID);
    if (!checkValidRacingCount(racingCount)) {
      return;
    }
  };

  const initEventHandler = () => {
    $(carNamesFormID).addEventListener('submit', (e) => e.preventDefault());
    $(racingCountFormID).addEventListener('submit', (e) => e.preventDefault());
    $(carNamesSubmitID).addEventListener('click', setCarNames);
    $(raacingCountSubmitID).addEventListener('click', startRacingGame);
  };
}
const racingGame = new RacingGame();
racingGame.init();
