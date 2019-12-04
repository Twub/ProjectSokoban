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
        :key="'tile'+ id + tile.x + tile.y"
        id="grids"
        @movePlayerOnClick="onMovePlayerOnClick"></Tile>
        
    </div>
    `,
    data(){
        return{
            tiles:[],
            grid: [],
            flatTiles:[],
            wall: "/images/img23.png",
            player: "/images/playerDown.png",
            block: "/images/img2.png",
            ground: "/images/img11.png",
            boxGoal: "/images/img20.png",
            renderMap: 0,
            actualTile: '',
            pastTile: '',
            cloudTile: '',
            moves: 0,
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
            this.actualTile = this.tiles[y][x].img
            if(this.moves > 0){
            this.cloudTile = this.tiles[y][x].img
            }
            if(this.actualTile != this.wall){
                if(this.tiles[y-1][x].img == this.player) {
                        this.pastTile = this.tiles[y-1][x].img
                        if(this.moves > 0){
                        this.tiles[y-1][x].img = this.actualTile
                        }
                        console.log(this.pastTile)
                }
               else if(this.tiles[y+1][x].img == this.player) {
                    this.pastTile = this.tiles[y+1][x].img
                    this.tiles[y+1][x].img = this.actualTile
                    console.log(this.pastTile)
                }
                else if(this.tiles[y][x-1].img == this.player) {
                    this.pastTile = this.tiles[y][x-1].img
                    this.tiles[y][x-1].img = this.actualTile
                    console.log(this.pastTile)
                }
                else if(this.tiles[y][x+1].img == this.player) {
                    this.pastTile = this.tiles[y][x+1].img
                    this.tiles[y][x+1].img = this.actualTile
                    console.log(this.pastTile)
                }
            }
            
            this.tiles[y][x].img = this.player
            this.moves++
            console.log(this.tiles[y][x])
            this.flatTiles = this.tiles.flat()
        },
    },
    created(){
        if(this.displayGrid = true){
            if(this.difficulty == "Easy"){
                let size = 10
                for(let col = 0; col < size; col++){
                    this.tiles[col] = []
                    for(let row = 0; row < size; row++){
                        let position = {
                            x: row,
                            y: col,
                        }
                        this.tiles[col].push(position)
                            switch(this.map1[col][row]){
                                case 'W':{
                                    this.tiles[col][row].img = this.wall
                                    console.log('W')
                                    break
                                }
                                case 'P':{
                                    this.tiles[col][row].img = this.player
                                    console.log('P')
                                    break
                                }
                                case 'B':{
                                    this.tiles[col][row].img = this.block
                                    console.log('B')
                                    break
                                }
                                case 'G':{
                                    this.tiles[col][row].img = this.ground
                                    console.log('G')
                                    break
                                }
                                case 'F':{
                                    this.tiles[col][row].img = this.boxGoal
                                    console.log('F')
                                    break
                                }
                            
                    }
                    
                    
    }
    
}

            }
            else if(this.difficulty == "Normal"){
                let size = 10
                for(let col = 0; col < size; col++){
                    this.tiles[col] = []
                    for(let row = 0; row < size; row++){
                        let position = {
                            x: row,
                            y: col,
                        }
                        this.tiles[col].push(position)
                            switch(this.map2[col][row]){
                                case 'W':{
                                    this.wall = "images/img24.png"
                                    this.tiles[col][row].img = this.wall
                                    this.wall = "images/img23.png"
                                    console.log('W')
                                    break
                                }
                                case 'P':{
                                    this.tiles[col][row].img = this.player
                                    console.log('P')
                                    break
                                }
                                case 'B':{
                                    this.tiles[col][row].img = this.block
                                    console.log('B')
                                    break
                                }
                                case 'G':{
                                    this.ground = "images/img19.png"
                                    this.tiles[col][row].img = this.ground
                                    this.ground = "images/img11.png"
                                    console.log('G')
                                    break
                                }
                                case 'F':{
                                    this.tiles[col][row].img = this.boxGoal
                                    console.log('F')
                                    break
                                }
                            
                    }
                    
                    
    }
    
}
            }
            else if(this.difficulty == "Hard"){
                let size = 13
                for(let col = 0; col < size; col++){
                    this.tiles[col] = []
                    for(let row = 0; row < size; row++){
                        let position = {
                            x: row,
                            y: col,
                        }
                        this.tiles[col].push(position)
                            switch(this.map3[col][row]){
                                case 'W':{
                                    this.tiles[col][row].img = this.wall
                                    console.log('W')
                                    break
                                }
                                case 'P':{
                                    this.tiles[col][row].img = this.player
                                    console.log('P')
                                    break
                                }
                                case 'B':{
                                    this.tiles[col][row].img = this.block
                                    console.log('B')
                                    break
                                }
                                case 'G':{
                                    this.tiles[col][row].img = this.ground
                                    console.log('G')
                                    break
                                }
                                case 'F':{
                                    this.tiles[col][row].img = this.boxGoal
                                    console.log('F')
                                    break
                                }
                            
                    }
                    
                    
    }
    
}
            }
            }
            this.flatTiles = this.tiles.flat()
},
    computed:{
        flatTiles(){
            return this.tiles.flat()
        }
    },
    watch:{
        renderMap(val){
            console.log(`Number of moves: ${val}`)
          /*  localStorage.setItem('counter-value', this.renderMap)
            localStorage.setItem('savedMap',JSON.stringify(this.tiles)) */
        },
    }
}