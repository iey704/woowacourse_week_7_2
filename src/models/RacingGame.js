import MoveCar from "./MoveCar.js";

class RacingGame {
  constructor(carNames, moveCount) {
    this.cars = carNames.map((name) => new MoveCar(name));
    this.moveCount = moveCount;
  }

  play() {
    for (let i = 0; i < this.moveCount; i++) {
      this.moveAllCars();
    }
  }

  moveAllCars() {
    this.cars.forEach((car) => car.move());
  }

  getCarNames() {
    return this.cars;
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    return this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }
}

export default RacingGame;
