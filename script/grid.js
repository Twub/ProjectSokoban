import Tile from './Tile.js'

export default{
    components:{
        Tile
    },
    template: `
    <div id="grid">
    <Tile 
        v-for="(tile, i) of flatTiles"
        :position="tile"
        :key="'tile'+ i + tile.x + tile.y"
        id="grids"></Tile>
        
    </div>
    `,
    data(){
        return{
            tiles:[]
        }
    },
    created(){

        for(let row = 0; row < 14; row++){
            this.tiles[row] = []
            for(let col = 0; col < 14; col++){
                let position = {
                    x: col,
                    y: row,
                    image: "/images/img11.png"
                }
                this.tiles[row].push(position)
            }
        }
    },
    computed:{
        flatTiles(){
            return this.tiles.flat()
        }
    },
    methods:{
        generateImage(){
            
        }
    }

}