import { $ } from '../utils/dom.js';
import { ELEMENT_ID, ALERT_MESSAGE } from '../constant/index.js';
import { NUMBER_RULE } from '../constant/index.js';
import { clearInput } from '../utils/dom.js';
export const VALID = {
  checkValidRacingCount(racingCount) {
    if (!isPositiveNumber(racingCount)) {
      alert(ALERT_MESSAGE.WRONG_COUNT_NUMBER);
      clearInput(racingCountInputID);
      return false;
    }
    return true;
  },
  checkCarsExist(cars) {
    if (!cars.length) {
      alert(ALERT_MESSAGE.CAR_NOT_EXIT);
      $(ELEMENT_ID.carNamesInputID).focus();
      return false;
    }
    return true;
  },
  checkValidCarNames(carNamesArray) {
    if (!isValidCarNamesLength(carNamesArray)) {
      alert(ALERT_MESSAGE.WRONG_CAR_NAME_LENGTH);
      clearInput(ELEMENT_ID.carNamesInputID);
      return false;
    }
    return true;
  },
};
const isPositiveNumber = (number) => number > 0;
const isValidCarNamesLength = (carNamesArray) =>
  carNamesArray.every(
    (carName) => carName.length <= NUMBER_RULE.MAX_CAR_NAME_LENGTH,
  );
