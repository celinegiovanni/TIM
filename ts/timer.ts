export class Timer {
    startTime : number = 0;
    pauseTime: number = 0;
    finishTime : number = 0;

    constructor() {
        
    }

    startTimer() {
        this.startTime = Date.now();
    }

    stopTimer() {
        this.finishTime= Date.now();
    }

    pauseTimer() {
        this.pauseTime = Date.now();
    }
}