import storage from '../utility/StorageUtility.js';

export default{
    mixins: [storage],
    template: `
        <div id="timer-content">
            <p id="timer-display" >Time Remaining: {{ time }}</p>
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
        run(time){
            this.time = time;
            let mainScope = this;
            let isTimerEnable = this.getItem("isTimerEnable");
            if (isTimerEnable == 'true'){
                window.setInterval(function(){
                    mainScope.time -= 1;
                    document.getElementById("timer-display").innerText = "Time Remaining: " + mainScope.time;
                    if(mainScope.time <= 0){
                        clearInterval();
                        window.location.reload()
                        return;
                    }
                }, 1000);
            } else if (isTimerEnable == 'false'){
                return;
            }
        },
    },
    stop(time){
        console.log("hej")
    }

}