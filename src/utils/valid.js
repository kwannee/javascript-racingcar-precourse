import { $ } from './dom.js';
import { ELEMENT, ALERT_MESSAGE } from '../constant/index.js';
import { MAX_CAR_NAME_LENGTH } from '../constant/index.js';
import { clearInput } from './dom.js';
export const checkValidRacingCount = (racingCount) => {
  if (!isPositiveNumber(racingCount)) {
    alert(ALERT_MESSAGE.WRONG_COUNT_NUMBER);
    clearInput(racingCountInputID);
    return false;
  }
  return true;
};
export const checkCarsExist = (cars) => {
  if (!cars.length) {
    alert(ALERT_MESSAGE.CAR_NOT_EXIT);
    $(ELEMENT.carNamesInputID).focus();
    return false;
  }
  return true;
};
export const checkValidCarNames = (carNamesArray) => {
  if (!isValidCarNamesLength(carNamesArray)) {
    alert(ALERT_MESSAGE.WRONG_CAR_NAME_LENGTH);
    clearInput(ELEMENT.carNamesInputID);
    return false;
  }
  return true;
};
const isPositiveNumber = (number) => number > 0;
const isValidCarNamesLength = (carNamesArray) =>
  carNamesArray.every((carName) => carName.length <= MAX_CAR_NAME_LENGTH);
