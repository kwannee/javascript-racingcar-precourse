import { MIN_NUMBER, MAX_NUMBER } from './constant';
export default function Car(name) {
  this.name = name;
  this.forwardCount = 0;
  this.race = () => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      MIN_NUMBER,
      MAX_NUMBER,
    );
    this.forwardCount += randomNumber >= 4;
  };
}
