import { MIN_NUMBER, MAX_NUMBER, FORWARD_NUMBER } from './constant/index.js';
export default function Car(name) {
  this.name = name;
  this.forwardCount = 0;
  this.race = () => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      MIN_NUMBER,
      MAX_NUMBER,
    );
    this.forwardCount += randomNumber >= FORWARD_NUMBER;
  };
}
