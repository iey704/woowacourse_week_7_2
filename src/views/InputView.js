import readline from "readline";

class InputView {
  // 입력 인터페이스 생성: rl 객체로 터미널에서 입력을 받을 수 있는 객체 생성
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin, // readable stream
      output: process.stdout, // writable stream
    });
  }

  // 입력 메서드: 문자열을 터미널에 출력하고 사용자가 입력할 때까지 대기함
  async readInput(prompt) {
    return new Promise((resolve) => {
      this.rl.question(prompt, (answer) => {
        resolve(answer.trim());
      });
    });
  }

  close() {
    this.rl.close();
  }
}

export default InputView;
