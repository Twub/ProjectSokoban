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
    <option value="Nasy">Easy</option>
    <option value="Normal">Normal</option>
    <option value="Hard">Hard</option>
    <option value="Extreme">Extreme</option>
    </select>
    </div>
        <div id="grid">
            <tr v-for="grids in gridLayoutAngleX" id="grids">
            <td v-for="(grids, index) in gridLayoutAngleY"id="grids">
            <img src="images/img11.png" width="30" height="30">
            </td>
            </tr>
        </div>
    </div>
    `,
    data(){
        return{
            gridLayoutAngleX: new Array(20),
            gridLayoutAngleY: new Array(32)
        }
    },
    methods:{
        
    }
}