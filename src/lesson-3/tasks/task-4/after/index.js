var timeouts = [];

const Timer = () => new function () {
    this.minutes = 0;
    this.seconds = 1;
    this.isTimerStoped = false;

    this.init = function (startFrom = 0, callback) {
        this.isTimerStoped = false;
        this.minutes = startFrom;
        callback()
    };


    this.start = function (speed = 1, callback) {
        this.isTimerStoped = false;
        }
        let minuteDelay = 0,
            secondsDelay = 0;
        for (let currentMinute = this.minutes; currentMinute <= 60 && !this.isTimerStoped; currentMinute++) {
            for (let currentSecond = this.seconds; currentSecond <= 60 && !this.isTimerStoped; currentSecond++) {
                timeouts.push(setTimeout((() => {
                    this.minutes = currentMinute;
                    this.seconds = currentSecond;
                    callback(this);
                }), (1000 * (secondsDelay + (minuteDelay * 60))) / speed));
                this.seconds = 0;
                secondsDelay++;
            }
            minuteDelay++;
        }
    };

    this.pause = function (callback) {
        this.isTimerStoped = true;
        clearAllTimeouts();
        callback(this)
    };

    this.stop = function (callback) {
        this.isTimerStoped = true;
        clearAllTimeouts();
        callback(this);
        this.minutes = 0;
        this.seconds = 0;
    }
};

const clearAllTimeouts = () => {
    for (let i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i])
    }
    timeouts = [];
};

export default Timer
