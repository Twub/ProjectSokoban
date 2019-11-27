import Tile from './Tile.js'
import player from './player.js'

export default{
    props:['choice, displayGrid'],
    components:{
        Tile,
        player
    },
    template: `
    <div id="grid">
        <player id="player"></player>
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
        if(this.displayGrid = true){
            if(this.choice = "Easy"){
                for(let row = 0; row < 15; row++){
                    this.tiles[row] = []
                    for(let col = 0; col < 15; col++){
                        let position = {
                            x: col,
                            y: row,
                            image: "/images/img24.png"
                        }
                        this.tiles[row].push(position)
                    }
                    }
            }
            else if(this.choice = "Normal"){
                for(let row = 0; row < 20; row++){
                    this.tiles[row] = []
                    for(let col = 0; col < 20; col++){
                        let position = {
                            x: col,
                            y: row,
                            image: "/images/img22.png"
                        }
                        this.tiles[row].push(position)
                    }
                    }
            }
            else if(this.choice = "Hard"){
                for(let row = 0; row < 20; row++){
                    this.tiles[row] = []
                    for(let col = 0; col < 20; col++){
                        let position = {
                            x: col,
                            y: row,
                            image: "/images/img23.png"
                        }
                        this.tiles[row].push(position)
                    }
                    }
            }
            else if(this.choice = "Extreme"){
                for(let row = 0; row < 20; row++){
                    this.tiles[row] = []
                    for(let col = 0; col < 20; col++){
                        let position = {
                            x: col,
                            y: row,
                            image: "/images/img25.png"
                        }
                        this.tiles[row].push(position)
                    }
                    }
            }
    }
    },
    computed:{
        flatTiles(){
            return this.tiles.flat()
        }
    },
}