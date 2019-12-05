import sound from '/script/utility/SoundUtility.js';

export default{
    mixins: [sound],
   template:`
   <div id="arrows">
   <i @click="goLeft" class="fa fa-arrow-circle-left" id="sideArrows"></i>
   <div id="upDownArrows">   
   <i @click="goUp" class="fa fa-arrow-circle-up"></i>
   <i @click="goDown" class="fa fa-arrow-circle-down"></i>
   </div>
   <i @click="goRight" class="fa fa-arrow-circle-right" id="sideArrows"></i>
   
   </div>
  
   `, 
   methods:{
       goUp(){
           this.playSound('/sound/moveSound.wav');
           console.log("Up")
       },
       goDown(){
            this.playSound('/sound/moveSound.wav');
           console.log("Down")
       },
       goRight(){
        this.playSound('/sound/moveSound.wav');
           console.log("Right")
       },
       goLeft(){
        this.playSound('/sound/moveSound.wav');
           console.log("left")
       }
   }
}