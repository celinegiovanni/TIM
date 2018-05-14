"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Timer {
    constructor() {
        this.startTime = 0;
        this.pauseTime = 0;
        this.finishTime = 0;
    }
    startTimer() {
        this.startTime = Date.now();
    }
    stopTimer() {
        this.finishTime = Date.now();
    }
    pauseTimer() {
        this.pauseTime = Date.now();
    }
}
exports.Timer = Timer;
//# sourceMappingURL=timer.js.map