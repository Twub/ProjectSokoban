import sound from '/script/utility/SoundUtility.js';
import movement from './Move.js';

export default{
   mixins: [sound, movement],
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
           this.moveUp();
           
       },
       goDown(){
            this.playSound('/sound/moveSound.wav');
            this.moveDown();
           
       },
       goRight(){
           this.playSound('/sound/moveSound.wav');
           this.moveRight();
           
       },
       goLeft(){
           this.playSound('/sound/moveSound.wav');
           this.moveLeft();
       }
   }
}