import Grid from "./Grid.js"
import arrowKeys from './Controls/arrowKeys.js'
export default{
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
        <arrowKeys />
        <Grid v-if="displayGrid" :difficulty="difficulty"></Grid>
    </div>
    </div>    
    
    `,
    data(){
        return{
            choice:' ',
            displayGrid: false,
            difficulty: 'Easy'
        }
    },
    methods:{
        diffTest(){
                this.displayGrid= true       
        },
        reLoad(){
            window.location.reload()    
        }
    }
    }