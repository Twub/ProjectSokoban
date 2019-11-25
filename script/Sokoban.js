import Grid from "./grid.js"

export default{
    components:{
        Grid
    },
    template:`
    <div class="sokoban" @click="remove">
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
            gridLayoutAngleX: [],
            gridLayoutAngleY: []
        }
    },
    methods:{
        remove(){
            this.gridLayoutAngleX.push(new Grid(1,"images/img11.png"))
            this.gridLayoutAngleY.push(new Grid(1,"images/img13.png"))
        }
    }
}