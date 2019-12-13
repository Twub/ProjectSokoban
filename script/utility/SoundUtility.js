import storage from './StorageUtility.js';

export default {
    mixins: [storage],
    methods: {
        buttonClick: function(){
            if (this.isSoundEnable() == true){
                var audio = new Audio('/sound/buttonClick.mp3');
                audio.volume = this.getAudioVolume();
                audio.play();    
            }  
        },
        playSound: function(soundFile){
            if (this.isSoundEnable() == true) {
                var audio = new Audio(soundFile);
                audio.volume = this.getAudioVolume();
                audio.play();
            }  
        },
        playBoxSound: function(){
            if (this.isSoundEnable() == true){
                var audio = new Audio('/sound/moveBoxSound.wav');
                audio.volume = this.getAudioVolume();
                audio.play();
            }
        },
        playGoalSound: function(){
            if (this.isSoundEnable() == true){
                var audio = new Audio('/sound/goalSound.wav');
                audio.volume = this.getAudioVolume();
                audio.play();
            }
        },
        playMusic: function(){
            var audio = new Audio('/sound/menyMusic.mp3');
            audio.volume = this.getAudioVolume();
            if (this.isMusicOn()){
                audio.loop = true;
                audio.play();
            }
            else{
                audio.pause();
                audio.currentTime = 0;
            }
        },
        isSoundEnable: function(){
            let volumeEnable = this.getItem('isSoundEnable');
            audio.volume = this.getAudioVolume();
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
        },
        getAudioVolume: function(){
            let volume = this.getItem('volume');
            return volume / 100;
        }
    }
}

// var audio = new Audio('/sound/buttonClick.mp3');
// audio.play();
