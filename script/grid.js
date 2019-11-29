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
            tiles:[],
            wall: "/images/img23.png"

        }
    },
    created(){
        if(this.displayGrid = true){
                let grid = [
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                    ['W',' ', ' ', ' ', ' ',' ', ' ', ' ', ' ','W'],
                    ['W',' ', ' ', ' ', ' ',' ', ' ', ' ', 'W','W'],
                    ['W',' ', ' ', ' ', ' ',' ', ' ', ' ', 'W','W'],
                    ['W',' ', ' ', ' ', ' ',' ', ' ', ' ', 'W','W'],
                    ['W',' ', ' ', ' ', ' ',' ', ' ', ' ', 'W','W'],
                    ['W',' ', ' ', ' ', ' ',' ', ' ', ' ', 'W','W'],
                    ['W',' ', ' ', ' ', ' ',' ', ' ', ' ', 'W','W'],
                    ['W',' ', ' ', ' ', ' ',' ', ' ', ' ', 'W','W'],
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
                ]
                let size = 10
                for(let row = 0; row < size; row++){
                    this.tiles[row] = []
                    for(let col = 0; col < size; col++){
                        let position = {
                            x: col,
                            y: row,
                            image: Image
                        }
                        this.tiles[row].push(position)
                            switch(grid[row][col]){
                                case 'W':{
                                    this.tiles[row][col].image = this.wall
                                }
                            
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