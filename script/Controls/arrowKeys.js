export default{
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
           console.log("Up")
       },
       goDown(){
           console.log("Down")
       },
       goRight(){
           console.log("Right")
       },
       goLeft(){
           console.log("left")
       }
   }
}