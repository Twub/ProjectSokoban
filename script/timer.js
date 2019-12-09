import storage from './utility/StorageUtility.js';

export default{
    mixins: [storage],
    template: `
        <div id="timer-content">
            <p id="timer-display">Time Remaining: {{ time }}</p>
        </div>
    `,
    data: function() {
        return {
            time: 0,
            presetOne: 120,
            presetTwo: 90,
            presetThree: 60,
            timerUpdater: ''
        }
    },
    methods: {
        run(time){
            this.time = time;
            document.getElementById("timer-display").innerText = "Time Remaining: " + this.time;
            let isTimerEnable = this.getItem("isTimerEnable");
            if (isTimerEnable == 'true'){
                this.timerUpdater = setInterval(this.updater, 1000);
            }
        },
        updater: function(){
            this.time -= 1;
            document.getElementById("timer-display").innerText = "Time Remaining: " + this.time;
        },
        stop: function(){
            window.clearInterval(this.timerUpdater);
        }
    }
}