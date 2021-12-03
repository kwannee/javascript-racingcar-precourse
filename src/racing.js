export const raceAllCars = (cars) => {
  for (const car of cars) {
    car.race();
  }
  return cars;
};
export const getRacingWinner = (cars) => {
  const maxCountNumber = Math.max(...cars.map((car) => car.forwardCount));
  return cars
    .filter((car) => car.forwardCount === maxCountNumber)
    .map((car) => car.name);
};
