"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Timer = /** @class */ (function () {
    function Timer() {
        this.startTime = 0;
        this.pauseTime = 0;
        this.finishTime = 0;
    }
    Timer.prototype.startTimer = function () {
        this.startTime = Date.now();
    };
    Timer.prototype.stopTimer = function () {
        this.finishTime = Date.now();
    };
    Timer.prototype.pauseTimer = function () {
        this.pauseTime = Date.now();
    };
    return Timer;
}());
exports.Timer = Timer;
//# sourceMappingURL=timer.js.map