import { createElementWithTemplate } from './utils/dom.js';
export const createRacingResultsElement = (results) => {
  const resultTemplate = results
    .map((result) => {
      return `<div>${result}</div>`;
    })
    .join('<br/>');
  const racingResultDiv = createElementWithTemplate('div', resultTemplate);
  return racingResultDiv;
};
export const createRacingWinnersElement = (winners) => {
  const winnerTemplate = `최종 우승자: 
    <span id="racing-winners">${winners.join(',')}</span>`;
  return createElementWithTemplate('span', winnerTemplate);
};
export const makeRaceResultTemplate = (cars) => {
  return cars
    .map((car) => {
      return `<div>${car.name}: ${'-'.repeat(car.forwardCount)}</div>`;
    })
    .join('');
};
