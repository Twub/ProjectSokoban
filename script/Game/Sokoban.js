import Grid from "./grid.js"
import arrowKeys from '../Controls/arrowKeys.js'
import storage from '../utility/StorageUtility.js';
import startScreen from './startScreen.js'
import music from '../utility/SoundUtility.js';

export default{
    mixins: [storage],
    components:{
        Grid,
        arrowKeys,
        startScreen,
        music,
    },
    template:`
    <div class="sokoban" id="sokobanGrid">
    <section class="difficulty">
    <label for="mapSelect" id="text">Difficulty: </label>
    <select id="mapSelect" v-model="difficulty" :value="difficulty">
    <option value="Easy">Easy</option>
    <option value="Normal">Normal</option>
    <option value="Hard">Hard</option>
    <option value="Extreme">Extreme</option>
    </select>
    <button type="button" id="difficultySubmit" @click="diffTest">Load difficulty</button>
    <button type="button" id="reLoadButton" @click="reLoad">Restart game</button>
    </section>
    
    <div id="game">
    <startScreen v-if= "displayStartScreen"></startScreen>
    <Grid v-if="displayGrid" :difficulty="difficulty" :arrowClickDir="arrowClickDir"></Grid>
       
    </div>
    <arrowKeys v-if="displayGrid" @arrowClick="onArrowClick" />
    </div>    
    
    `,
    data(){
        return{
            choice:' ',
            displayGrid: false,
            difficulty: 'Easy',
            startTitle: 'sokoban',
            arrowClickDir: "",
            displayStartScreen: true,
        }
    },
    methods:{
        onArrowClick(dir) {
            this.arrowClickDir=""
            setTimeout(() => {
                this.arrowClickDir=dir
            }, 5);
        },
        diffTest(){
                this.displayGrid= true 
                this.startScreen='' 
                this.displayStartScreen=false     
        },
        reLoad(){
            window.location.reload()    
        }
    }
    }