import Car from './Car.js';
import { $, getElementValue } from './utils/dom.js';
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
  checkCarsExist,
} from './utils/valid.js';
import { raceAllCars, getRacingWinner } from './racing.js';
import {
  createRacingResultsElement,
  createRacingWinnersElement,
  makeRaceResultTemplate,
} from './render.js';

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
    if (!checkCarsExist(this.cars)) {
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
      const thisRaceResult = raceAllCars(this.cars);
      const thisRaceResultTemplate = makeRaceResultTemplate(thisRaceResult);
      this.results.push(thisRaceResultTemplate);
    }
    renderRacingResults();
  };

  const renderRacingResults = () => {
    const racingResultsElement = createRacingResultsElement(this.results);
    $('#app').appendChild(racingResultsElement);
    const winners = getRacingWinner(this.cars);
    const racingWinnersElement = createRacingWinnersElement(winners);
    $('#app').appendChild(racingWinnersElement);
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
