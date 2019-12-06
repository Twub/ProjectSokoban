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
        isSoundEnable: function(){
            let volumeEnable = this.getItem('isSoundEnable');
            if (volumeEnable == 'true'){
                return true;
            }
            return false;
        }
    }
}

// var audio = new Audio('/sound/buttonClick.mp3');
// audio.play();
