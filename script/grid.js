import Tile from './Tile.js'

export default{
    props:['difficulty','displayGrid'],
    components:{
        Tile,
    },
    template: `
    <div id="grid">
    <Tile 
        v-for="(tile, id) of flatTiles"
        :position="tile"
        :key="'tile'+ id + tile.x + tile.y + renderMap"
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
            boxGoal: "/images/img20.png",
            renderMap: 1,
            playerPosition: '',
            map1: [
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'F', 'G','W'],
                ['W','G', 'B', 'B', 'G','G', 'G', 'F', 'G','W'],
                ['W','G', 'B', 'P', 'G','G', 'G', 'F', 'G','W'],
                ['W','G', 'B', 'G', 'G','G', 'G', 'F', 'B','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'B','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'B','W'],
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
            ],
            map2: [
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                ['W','G', 'G', 'G', 'W','W', 'G', 'G', 'G','W'],
                ['W','G', 'G', 'B', 'W','W', 'G', 'G', 'G','W'],
                ['W','G', 'G', 'B', 'G','G', 'G', 'F', 'G','W'],
                ['W','G', 'B', 'G', 'G','G', 'G', 'F', 'G','W'],
                ['W','G', 'B', 'P', 'G','G', 'G', 'F', 'G','W'],
                ['W','G', 'B', 'G', 'G','G', 'G', 'F', 'B','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'B','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'B','W'],
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
            ],
            map3: [
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W','W','W','W'],
                ['W','G', 'W', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','G', 'B', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','G', 'W', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','G', 'W', 'G', 'G','G', 'G', 'G', 'G','G','G','F','W'],
                ['W','G', 'W', 'G', 'G','G', 'G', 'G', 'G','G','G','F','W'],
                ['W','G', 'B', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','G', 'W', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','G', 'W', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','P', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W','W','W','W'],
            ], /* Tänker att vi gör map4(Extreme) tillsammans då den skall  vi maxa på, blir avslutnings område */
        }
    },
    methods:{
        onMovePlayerOnClick(x,y){
            let activeCell = this.tiles[x][y].img
            if(activeCell != this.wall){
                if(activeCell == this.block){
                    alert('box')
                }
                else if(activeCell == this.boxGoal){
                    alert('goal')
                }
            } 
            this.tiles[x][y].img = this.player
            this.renderMap++
            console.log(this.tiles)
        },
    },
    created(){
        if(this.displayGrid = true){
            if(this.difficulty == "Easy"){
                let size = 10
                for(let row = 0; row < size; row++){
                    this.tiles[row] = []
                    for(let col = 0; col < size; col++){
                        let position = {
                            x: row,
                            y: col,
                            img: Image
                        }
                        this.tiles[row].push(position)
                            switch(this.map1[row][col]){
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
            else if(this.difficulty == "Normal"){
                let size = 10
                for(let row = 0; row < size; row++){
                    this.tiles[row] = []
                    for(let col = 0; col < size; col++){
                        let position = {
                            x: row,
                            y: col,
                            img: Image
                        }
                        this.tiles[row].push(position)
                            switch(this.map2[row][col]){
                                case 'W':{
                                    this.wall = "/images/img24.png"
                                    this.tiles[row][col].img = this.wall
                                    this.wall = "/images/img23.png"
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
                                    this.ground = "/images/img19.png",
                                    this.tiles[row][col].img = this.ground
                                    this.ground = "/images/img11.png"
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
            else if(this.difficulty == "Hard"){
                let size = 13
                for(let row = 0; row < size; row++){
                    this.tiles[row] = []
                    for(let col = 0; col < size; col++){
                        let position = {
                            x: row,
                            y: col,
                            img: Image
                        }
                        this.tiles[row].push(position)
                            switch(this.map3[row][col]){
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