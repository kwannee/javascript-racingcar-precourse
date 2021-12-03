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

  const submitRacingCount = () => {
    if (!checkCarNamesExist(this.cars)) {
      return;
    }
    const racingCount = getElementValue(racingCountInputID);
    if (!checkValidRacingCount(racingCount)) {
      return;
    }
    startRacingGame(racingCount);
  };

  const startRacingGame = (racingCount) => {
    for (let i = 0; i < racingCount; i += 1) {
      raceAllCars();
    }
  };
  const raceAllCars = () => {
    for (const car of this.cars) {
      car.race();
    }
  };

  const initEventHandler = () => {
    $(carNamesFormID).addEventListener('submit', (e) => e.preventDefault());
    $(racingCountFormID).addEventListener('submit', (e) => e.preventDefault());
    $(carNamesSubmitID).addEventListener('click', setCarNames);
    $(raacingCountSubmitID).addEventListener('click', submitRacingCount);
  };
}
const racingGame = new RacingGame();
racingGame.init();
