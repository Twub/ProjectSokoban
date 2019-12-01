export default {
    methods: {
        buttonClick: function(){
            var audio = new Audio('/sound/buttonClick.mp3');
            audio.play();
        },
        playSound: function(soundFile){
            var audio = new Audio(soundFile);
            audio.play();
        }
    }
}

// var audio = new Audio('/sound/buttonClick.mp3');
// audio.play();