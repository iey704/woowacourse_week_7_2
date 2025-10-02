class MoveCar {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomValue = this.generateRandomNumber();
    if (randomValue >= 4) {
      this.position++;
    }
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 10); // 정수 랜덤 숫자 생성 (0~9)
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  getPositionDisplay() {
    return "-".repeat(this.position);
  }
}

export default MoveCar;
