import cookie from './CookieUtility.js';

export default {
    mixins: [cookie],
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
            let cookieState = this.getCookie("soundEnableCookie");
            let isVolumeEnable = cookieState.split("=");
            if (isVolumeEnable[1] == true){
                return true;
            }
            return false;
        }
    }
}

// var audio = new Audio('/sound/buttonClick.mp3');
// audio.play();
