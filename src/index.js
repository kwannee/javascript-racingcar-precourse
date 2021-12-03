import Car from './Car.js';
import { $, getElementValue, createElementWithTemplate } from './utils/dom.js';
import {
  carNamesFormID,
  carNamesSubmitID,
  carNamesInputID,
  racingCountFormID,
  racingCountInputID,
  racingCountSubmitID,
} from './constant/index.js';
import {
  checkValidCarNames,
  checkValidRacingCount,
  checkCarNamesExist,
} from './utils/valid.js';

function RacingGame() {
  this.cars = [];
  this.results = [];
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
    renderRacingResults();
  };

  const startRacingGame = (racingCount) => {
    for (let i = 0; i < racingCount; i += 1) {
      raceAllCars();
      const thisRaceResult = makeRaceResultTemplate();
      this.results.push(thisRaceResult);
    }
  };
  const raceAllCars = () => {
    for (const car of this.cars) {
      car.race();
    }
  };
  const makeRaceResultTemplate = () => {
    return this.cars
      .map((car) => {
        return `<div>${car.name}: ${'-'.repeat(car.forwardCount)}</div>`;
      })
      .join('');
  };
  const renderRacingResults = () => {
    const resultTemplate = this.results
      .map((result) => {
        return `<div>${result}</div>`;
      })
      .join('<br/>');
    const racingResultDiv = createElementWithTemplate('div', resultTemplate);
    $('#app').appendChild(racingResultDiv);
  };

  const initEventHandler = () => {
    $(carNamesFormID).addEventListener('submit', (e) => e.preventDefault());
    $(racingCountFormID).addEventListener('submit', (e) => e.preventDefault());
    $(carNamesSubmitID).addEventListener('click', setCarNames);
    $(racingCountSubmitID).addEventListener('click', submitRacingCount);
  };
}
const racingGame = new RacingGame();
racingGame.init();
