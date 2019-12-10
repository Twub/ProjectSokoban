import Grid from "./grid.js"
import arrowKeys from '../Controls/arrowKeys.js'
import storage from '../utility/StorageUtility.js';

export default{
    mixins: [storage],
    components:{
        Grid,
        arrowKeys
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
        <h1 id="start-screen">{{startScreen}}</h1>
        <Grid v-if="displayGrid" :difficulty="difficulty"></Grid>
       
    </div>
    <arrowKeys v-if="displayGrid" />
    </div>    
    
    `,
    data(){
        return{
            choice:' ',
            displayGrid: false,
            difficulty: 'Easy',
            startScreen: 'sokoban'
        }
    },
    methods:{
        diffTest(){
                this.displayGrid= true 
                this.startScreen=''      
        },
        reLoad(){
            window.location.reload()    
        }
    }
    }