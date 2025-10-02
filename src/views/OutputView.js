class OutputView {
  print(message) {
    console.log(message);
  }

  printError(error) {
    console.log(`[ERROR] ${error.message}`);
  }

  printRoundResult(cars) {
    cars.forEach(car => {
      this.print(`${car.getName()} : ${car.getPositionDisplay()}`);
    });
    this.print('');
  }

  printWinners(winners) {
    this.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default OutputView;
