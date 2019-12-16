import storage from './StorageUtility.js';

export default {
    mixins: [storage],
    methods: {
        buttonClick: function(){
            if (this.isSoundEnable() == true){
                var audio = new Audio('/sound/buttonClick.mp3');
                audio.play();    
            }  
        },
        playSound: function(soundFile){
            if (this.isSoundEnable() == true) {
                var audio = new Audio(soundFile);
                audio.play();
            }  
        },
        playBoxSound: function(){
            if (this.isSoundEnable() == true){
                var audio = new Audio('/sound/moveBoxSound.wav');
                audio.play();
            }
        },
        playGoalSound: function(){
            if (this.isSoundEnable() == true){
                var audio = new Audio('/sound/goalSound.wav');
                audio.play();
            }
        },
        playMusic: function(){
            if (this.isMusicOn() == true){
            
                var audio = new Audio('/sound/menyMusic.mp3');
                audio.loop = true;
                audio.play();
            }
            else{
                this.audio.pause();
                this.audio.currentTime = 0;
            }
        },
        isSoundEnable: function(){
            let volumeEnable = this.getItem('isSoundEnable');
            if (volumeEnable == 'true'){
                return true;
            }
            return false;
        },
        isMusicOn: function(){
            let musicEnable = this.getItem('isMusicEnable');
            if (musicEnable == 'true'){
                return true;
            }
            return false;
        }
    }
}

// var audio = new Audio('/sound/buttonClick.mp3');
// audio.play();
