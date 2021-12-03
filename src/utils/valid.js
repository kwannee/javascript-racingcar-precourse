import { carNamesInputID, racingCountInputID } from '../constant/index.js';
import { MAX_CAR_NAME_LENGTH } from '../constant/index.js';
import { clearInput } from './dom.js';
export const checkValidRacingCount = (racingCount) => {
  if (!isPositiveNumber(racingCount)) {
    alert('시도할 횟수 입력이 올바르지 않습니다.');
    clearInput(racingCountInputID);
    return false;
  }
  return true;
};
export const checkCarNamesExist = (cars) => {
  if (!cars.length) {
    alert('자동차 이름을 입력하고 확인 버튼을 눌러주세요.');
    $(carNamesInputID).focus();
    return false;
  }
  return true;
};
export const checkValidCarNames = (carNamesArray) => {
  if (!isValidCarNamesLength(carNamesArray)) {
    alert('자동차 이름은 5글자 이하로 입력해 주세요.');
    clearInput(carNamesInputID);
    return false;
  }
  return true;
};
const isPositiveNumber = (number) => number > 0;
const isValidCarNamesLength = (carNamesArray) =>
  carNamesArray.every((carName) => carName.length <= MAX_CAR_NAME_LENGTH);
