export default{
    template: `
        <div id="timer-content">
            <p id="timer-display">Time Remaining: {{ time }}</p>
        </div>
    `,
    data() {
        return {
            time: 0
        }
    },
    methods: {
        setTime: function(time){
            this.time = time;
        },
        updateTime: function(){
            this.time -= 1;
        }

    }
}