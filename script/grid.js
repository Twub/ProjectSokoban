import Tile from './Tile.js'

export default{
    props:['difficulty, displayGrid'],
    components:{
        Tile,
    },
    template: `
    <div id="grid">
        
    <Tile 
        v-for="(tile, i) of flatTiles"
        :position="tile"
        :key="'tile'+ i + tile.x + tile.y"
        id="grids"
        @movePlayerOnClick="onMovePlayerOnClick"></Tile>
        
    </div>
    `,
    data(){
        return{
            tiles:[],
            wall: "/images/img23.png",
            player: "/images/playerDown.png",
            block: "/images/img2.png",
            ground: "/images/img11.png",
            boxGoal: "/images/img20.png"

            

        }
    },
    methods:{
        onMovePlayerOnClick(x,y){
            if(this.tiles[x][y].img == this.ground){
                console.log('first check')
                this.tiles[x][y].img == this.player
                this.tiles[x-1][y].img == this.ground
                
            } 
        }
    },
    created(){
        if(this.displayGrid = true){
            if(this.difficulty = 'Easy'){
                let grid = [
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'F', 'G','W'],
                    ['W','G', 'B', 'G', 'G','G', 'G', 'F', 'G','W'],
                    ['W','G', 'B', 'P', 'G','G', 'G', 'F', 'G','W'],
                    ['W','G', 'B', 'G', 'G','G', 'G', 'G', 'B','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'B','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'B','W'],
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
                ]
                let size = 10
                for(let row = 0; row < size; row++){
                    this.tiles[row] = []
                    for(let col = 0; col < size; col++){
                        let position = {
                            x: col,
                            y: row,
                            img: Image
                        }
                        this.tiles[row].push(position)
                            switch(grid[row][col]){
                                case 'W':{
                                    this.tiles[row][col].img = this.wall
                                    console.log('W')
                                    break
                                }
                                case 'P':{
                                    this.tiles[row][col].img = this.player
                                    console.log('P')
                                    break
                                }
                                case 'B':{
                                    this.tiles[row][col].img = this.block
                                    console.log('B')
                                    break
                                }
                                case 'G':{
                                    this.tiles[row][col].img = this.ground
                                    console.log('G')
                                    break
                                }
                                case 'F':{
                                    this.tiles[row][col].img = this.boxGoal
                                    console.log('F')
                                    break
                                }
                            
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