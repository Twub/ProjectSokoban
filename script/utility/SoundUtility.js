export default {
    methods: {
        buttonClick(){
            var audio = new Audio('/sound/buttonClick.mp3');
            audio.play();
        }
    }
}

// var audio = new Audio('/sound/buttonClick.mp3');
// audio.play();