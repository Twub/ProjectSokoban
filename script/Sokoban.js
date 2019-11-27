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
        <div id="grid">
            <section id="player">
            <player></player>
            </section>
            <div v-for="cell in gridLayoutAngleX" class="grids"> <!-- Detta är ingen riktig array som går att manipulera, detta är bara en template för hur det kommer se ut -->
            <img src="cell.tile">
            <div v-for="(tile, tileIndex) in gridLayoutAngleY" class="grids">
            <img src="images/img11.png">
            </div>
            </div>
        </div>
        <button type="button" @click="tileTest" id="tileTest">Tile test</button> <!-- Tas bort innan inlämning  -->
    </div>
    `,
    data(){
        return{
            gridLayoutAngleX: new Array(15),
            gridLayoutAngleY: new Array(15),    
            choice: '',
            
        }
    },
    methods:{
        tileTest(){ /* Denna metod är bara en test metod för att manipulera tiles */
            let index = 0;
            let cell = new Grid(index++,"images/img11.png", 1,1)
            this.gridLayoutAngleX.push(cell)
            this.gridLayoutAngleY.push(cell)
        },
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