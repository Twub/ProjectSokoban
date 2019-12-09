import cookie from './utility/CookieUtility.js';
import storage from './utility/StorageUtility.js';

export default{
    mixins: [cookie, storage],
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
        }
    },
    methods: {
        run: function(time){
            this.time = time;
            let mainScope = this;
            let isTimerEnable = this.getItem("timerEnableCookie");
            if (isTimerEnable == 'true'){
                window.setInterval(function(){
                    mainScope.time -= 1;
                    if(this.time <= 0){
                        clearInterval();
                        return;
                    }
                }, 1000);
            } else if (isTimerEnable == 'false'){
                return;
            }
        },
    }
}