import cookie from './utility/CookieUtility.js';

export default{
    mixins: [cookie],
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
            let isTimerEnable = this.getCookie("timerEnableCookie").split("=");
            isTimerEnable = isTimerEnable[1];
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