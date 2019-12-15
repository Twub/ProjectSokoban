import storage from './StorageUtility.js';

export default {
    mixins: [storage],
    data(){
        return {
            musicSound: new Audio('/sound/menyMusic.mp3'),
            buttonSound: new Audio('/sound/buttonClick.mp3'),
            boxSound: new Audio('/sound/moveBoxSound.wav'),
            goalSound: new Audio('/sound/goalSound.wav'),
        }
    },
    methods: {
        buttonClick: function(){
            if (this.isSoundEnable() == true){
                this.buttonSound.volume = this.getAudioVolume();
                this.buttonSound.play();    
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
                this.boxSound.volume = this.getAudioVolume();
                this.boxSound.play();
            }
        },
        playGoalSound: function(){
            if (this.isSoundEnable() == true){
                this.goalSound.volume = this.getAudioVolume();
                this.goalSound.play();
            }
        },
        playMusic: function(){
            this.musicSound.volume = this.getAudioVolume();
            if (this.isSoundEnable == true){
                if (this.isMusicOn()){
                    this.musicSound.play();
                    this.musicSound.loop = true;
                }else{
                    this.musicSound.pause();
                    this.musicSound.currentTime = 0;
                }
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
        },
        getAudioVolume: function(){
            let volume = this.getItem('volume');
            return volume / 100;
        }
    }
}

// var audio = new Audio('/sound/buttonClick.mp3');
// audio.play();
