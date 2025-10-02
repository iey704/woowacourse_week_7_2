import { ERROR_MESSAGES } from "../../constants/messages.js";

class CarNameValidator {
  constructor(names) {
    this.names = names;
  }

  validate() {
    this.validateNotEmpty();
    this.validateLength();
  }

  validateNotEmpty() {
    if (this.names.some((name) => name.length === 0)) {
      throw new Error(`[ERROR] ${ERROR_MESSAGES.EMPTY_CAR_NAME}`);
    }
  }

  validateLength() {
    if (this.names.some((name) => name.length > 5)) {
      throw new Error(`[ERROR] ${ERROR_MESSAGES.INVALID_CAR_NAME}`);
    }
  }

  validateDuplicate() {
    // 중복 제거
    const uniqueNames = new Set(this.names);

    if (uniqueNames.length != this.names.length) {
      throw new Error(`[ERROR] ${ERROR_MESSAGES.DUPLICATE_CAR_NAME}`);
    }
  }
}

export default CarNameValidator;
