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
                for(let y = 0; y < this.gridLayoutAngleX.length; y++){
                    this.gridLayoutAngleX.pop

                }
               for(let i = 0; i < 1; i++){
                   this.gridLayoutAngleX = "1"
                   console.log(this.gridLayoutAngleX[i])
               }
            }
            else if (this.choice == "Normal") {
                for(let y = 0; y < this.gridLayoutAngleX.length; y++){
                    this.gridLayoutAngleX.pop
                }
                for(let i = 0; i < 2; i++){
                    this.gridLayoutAngleX = "22"
                    console.log(this.gridLayoutAngleX[i])
                }
             }
             else if (this.choice == "Hard") {
                for(let y = 0; y < this.gridLayoutAngleX.length; y++){
                    this.gridLayoutAngleX.pop
                }
                for(let i = 0; i < 3; i++){
                    this.gridLayoutAngleX = "333"
                    this.gridLayoutAngleX = "333"
                    console.log(this.gridLayoutAngleX[i])
                }
             }
             else if (this.choice == "Extreme") {
                for(let y = 0; y < this.gridLayoutAngleX.length; y++){
                    this.gridLayoutAngleX.pop
                }
                for(let i = 0; i < 4; i++){
                    this.gridLayoutAngleX = "1234567894"
                    this.gridLayoutAngleY = "4444444444"
                    console.log(this.gridLayoutAngleX[i][i])
                }
             }
        },
    }
}