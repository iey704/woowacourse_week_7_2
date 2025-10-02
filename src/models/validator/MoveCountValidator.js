import { ERROR_MESSAGES } from "../../constants/messages.js";

class MoveCountValidator {
  constructor(count) {
    this.count = count;
  }

  validate() {
    this.validateIsNumber();
    this.validatePositive();
  }

  validateIsNumber() {
    // 문자열을 숫자로 변환 후 검증
    const num = Number(this.count);

    if (isNaN(num) || !Number.isInteger(num)) {
      throw new Error(`[ERROR] ${ERROR_MESSAGES.INVALID_MOVE_COUNT}`);
    }
  }

  validatePositive() {
    const num = Number(this.count);

    if (num <= 0) {
      throw new Error(`[ERROR] ${ERROR_MESSAGES.INVALID_MOVE_COUNT}`);
    }
  }
}

export default MoveCountValidator;
