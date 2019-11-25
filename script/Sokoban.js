export default{
    template:`
    <div class="sokoban">
        <div id="grid">
            <tr v-for="grids in gridLayout">
            <td v-for="(grids, grids) in gridLayout">*insert grid*</td>
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
                [],
                []
            ]
        }
    },
}