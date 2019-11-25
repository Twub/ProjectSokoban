export default{
    template:`
    <div class="sokoban">
        <div id="grid">
            <tr v-for="grids in gridLayout" id="grids">
            <td v-for="(grids, index) in gridLayout" @click="remove" id="grids">
            <img src="/images/img23.png" alt="block" width="30" height="30">
            </td>
            </tr>
        </div>
    </div>
    `,
    data(){
        return{
            gridLayout: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ]
        }
    },
    methods:{
        remove(){
            this.gridLayout.pop()

        }
    }
}