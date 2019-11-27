import Grid from "./Grid.js"
import player from './player.js'

export default{
    components:{
        Grid,
        player
    },
    template:`
    <div class="sokoban" id="sokobanGrid">
    <section class="difficulty">
    <label for="mapSelect" id="text">Difficulty: </label>
    <select id="mapSelect" v-model="choice">
    <option value="Easy">Easy</option>
    <option value="Normal">Normal</option>
    <option value="Hard">Hard</option>
    <option value="Extreme">Extreme</option>
    </select>
    <button type="button" id="difficultySubmit" @click="diffTest">Load difficulty</button>
    </section>
    <div id="game">
        <Grid></Grid>
        </div>
    </div>
    `,
    data(){
        return{
            choice:' '
        }
    },
    methods:{
        diffTest(){ /* Gjorde ett litet test för varje difficulty att rendera ut en map, notera: detta är bara ett test för att testa varje svårighetsgrad så man renderar ut mappen baserat på svårighetsgraden */
            if (this.choice == "Easy") {

            }
            else if (this.choice == "Normal") {

             }
             else if (this.choice == "Hard") {

             }
             else if (this.choice == "Extreme") {
             }
        },
    }
}