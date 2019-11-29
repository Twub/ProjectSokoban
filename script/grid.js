import Tile from './Tile.js'

export default{
    props:['choice, displayGrid'],
    components:{
        Tile,
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
            tiles:[],
            wall: "/images/img23.png",
            player: "/images/playerDown.png",
            block: "/images/img2.png",
            ground: "/images/img11.png"
            

        }
    },
    created(){
        if(this.displayGrid = true){
                let grid = [
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'W','W'],
                    ['W','G', 'B', 'G', 'G','G', 'G', 'G', 'W','W'],
                    ['W','G', 'B', 'P', 'G','G', 'G', 'G', 'W','W'],
                    ['W','G', 'B', 'G', 'G','G', 'G', 'G', 'W','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'W','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'W','W'],
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