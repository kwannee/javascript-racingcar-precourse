import { $ } from '../utils/dom.js';
import { ELEMENT_ID, EVENT_TYPE } from '../utils/constants.js';

import NameFormView from '../views/NameFormView.js';
import CountFormView from '../views/CountFormView.js';
import ResultView from '../views/ResultView.js';
import WinnersView from '../views/WinnersView.js';

import CarsModel from '../models/CarsModel.js';

export default {
  init() {
    new NameFormView($(ELEMENT_ID.carNamesForm))
      .init()
      .on(EVENT_TYPE.SUBMIT, (e) => this.onSubmitCarNames(e.detail.input));
    new CountFormView($(ELEMENT_ID.racingCountForm))
      .init()
      .on(EVENT_TYPE.SUBMIT, (e) => this.onSubmitRacingCounts(e.detail.input));
    ResultView.setup($(ELEMENT_ID.app));
    WinnersView.setup($(ELEMENT_ID.app));
  },

  onSubmitCarNames(carNames) {
    CarsModel.setCars(carNames);
  },

  onSubmitRacingCounts(racingCount) {
    this.playGame(racingCount);
  },

  playGame(count) {
    CarsModel.play(count).then((result) => {
      this.onPlayResult(result);
    });
  },

  onPlayResult(result) {
    ResultView.render(result);
    CarsModel.getWinners().then((winners) => {
      this.onGetWinners(winners);
    });
  },

  onGetWinners(winners) {
    WinnersView.render(winners);
  },
};
