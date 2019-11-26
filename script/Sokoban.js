import Grid from "./grid.js"

export default{
    components:{
        Grid
    },
    template:`
    <div class="sokoban" id="sokobanGrid">
    <div class="difficulty">
    <label for="mapSelect" id="text">Difficulty: </label>
    <select id="mapSelect" v-model="choice">
    <option value="Easy">Easy</option>
    <option value="Normal">Normal</option>
    <option value="Hard">Hard</option>
    <option value="Extreme">Extreme</option>
    </select>
    <button type="button" id="tileTest" @click="diffTest">Load difficulty</button>
    </div>
        <div id="grid">
            <tr v-for="grids in gridLayoutAngleX" id="grids">
            <td v-for="(grids, index) in gridLayoutAngleY"id="grids">
            <img src="images/img11.png" width="30" height="30">
            </td>
            </tr>
        </div>
        <button type="button" @click="tileTest" id="tileTest">Tile test</button>
    </div>
    `,
    data(){
        return{
            gridLayoutAngleX: new Array(20),
            gridLayoutAngleY: new Array(32),
            choice: ''
        }
    },
    methods:{
        tileTest(){
            let i = 0
            this.gridLayoutAngleX = ["test", "test2", i++] /* Utan dessa har gridLayoutAngleX [1] [2] [3] inget värde */
            console.log(this.gridLayoutAngleX[0])
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
                    console.log(this.gridLayoutAngleX[i])
                }
             }
             else if (this.choice == "Extreme") {
                for(let y = 0; y < this.gridLayoutAngleX.length; y++){
                    this.gridLayoutAngleX.pop
                }
                for(let i = 0; i < 4; i++){
                    this.gridLayoutAngleX = "4444"
                    console.log(this.gridLayoutAngleX[i])
                }
             }
        }
    }
}