import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import CarNameValidator from "../models/validator/CarNameValidator.js";
import MoveCountValidator from "../models/validator/MoveCountValidator.js";
import RacingGame from "../models/RacingGame.js";
import { MESSAGES } from "../constants/messages.js";

class RacingGameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.game = null;
  }

  async run() {
    try {
      await this.initialize();
      this.playGame();
      this.showResult();
    } catch (error) {
      this.outputView.printError(error);
      throw error;
    } finally {
      this.inputView.close();
    }
  }

  async initialize() {
    const carNames = await this.inputCarNames();
    const moveCount = await this.inputMoveCount();
    this.game = new RacingGame(carNames, moveCount);
  }

  async inputCarNames() {
    const input = await this.inputView.readInput(MESSAGES.INPUT_CAR_NAMES);
    const carNames = input.split(",").map((name) => name.trim());
    const validator = new CarNameValidator(carNames);
    validator.validate();
    return carNames;
  }

  async inputMoveCount() {
    const input = await this.inputView.readInput(MESSAGES.INPUT_MOVE_COUNT);
    const validator = new MoveCountValidator(input);
    validator.validate();
    return Number(input);
  }

  playGame() {
    this.outputView.print(MESSAGES.RESULT_TITLE);

    for (let i = 0; i < this.game.moveCount; i++) {
      this.game.moveAllCars();
      this.outputView.printRoundResult(this.game.getCarNames());
    }
  }

  showResult() {
    const winners = this.game.getWinners();
    this.outputView.printWinners(winners);
  }
}

export default RacingGameController;
