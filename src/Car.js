import { NUMBER_RULE } from './constant/index.js';
export default function Car(name) {
  this.name = name;
  this.forwardCount = 0;
  this.race = () => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      NUMBER_RULE.MIN_NUMBER,
      NUMBER_RULE.MAX_NUMBER,
    );
    this.forwardCount += randomNumber >= NUMBER_RULE.FORWARD_NUMBER;
  };
}
