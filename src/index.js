import Car from './Car.js';
import { $, getElementValue, formsPreventDefault } from './utils/dom.js';
import { ELEMENT } from './constant/index.js';
import { VALID } from './validation/valid.js';
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
    const carNamesArray = getElementValue(ELEMENT.carNamesInputID).split(',');
    if (!VALID.checkValidCarNames(carNamesArray)) {
      return;
    }
    this.cars = carNamesArray.map((carName) => new Car(carName));
  };

  const submitRacingCount = () => {
    if (!VALID.checkCarsExist(this.cars)) {
      return;
    }
    const racingCount = getElementValue(ELEMENT.racingCountInputID);
    if (!VALID.checkValidRacingCount(racingCount)) {
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
    $(ELEMENT.appID).appendChild(racingResultsElement);
    const winners = getRacingWinner(this.cars);
    const racingWinnersElement = createRacingWinnersElement(winners);
    $(ELEMENT.appID).appendChild(racingWinnersElement);
  };

  const initEventHandler = () => {
    formsPreventDefault();
    $(ELEMENT.carNamesSubmitID).addEventListener('click', setCarNames);
    $(ELEMENT.racingCountSubmitID).addEventListener('click', submitRacingCount);
  };
}
const racingGame = new RacingGame();
racingGame.init();
