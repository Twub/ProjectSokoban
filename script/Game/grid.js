import Tile from './Tile.js'
import Player from './player.js'
import sound from '../utility/SoundUtility.js';
import storage from '../utility/StorageUtility.js';
import Move from '../Controls/Move.js'

export default{
    mixins: [sound, storage],
    props:['difficulty','displayGrid'],
    components:{
        Tile,
        Player,
        Move
    },
    template: `
    <div id="grid">
    <Tile 
        v-for="(tile, id) of flatTiles"
        :position="tile"
        :key="'tile'+ id + tile.x + tile.y"
        class="grids"
        @movePlayerOnClick="onMovePlayerOnClick"></Tile>
       <!-- <Player class="Player"></Player> -->
        <span class="powerUps">{{powerUps}}</span>
        <Move
        v-on:moveLeft= onMovePlayerOnArrows
        v-bind:arrowCords="arrowCords"
        ></Move>
    </div>
    `,
    data(){
        return{
            arrowCords:"",
            tiles:[],
            grid: [],
            powerUps:`You have 0 powerups`,
            flatTiles:[],
            amountOfPowerUps: 0,
            hasPowerUp: false,
            wall: "/images/img23.png",
            breakableWall:  "/images/img25.png",
            player: "/images/playerDown.png",
            block: "/images/img2.png",
            ground: "/images/img11.png",
            boxGoal: "/images/img20.png",
            blockOnGoal: "/images/img4.png",
            blackBox: "images/blackBox.png",
            powerUp: "images/powerCoin.png",
            goals: 0, /* Om ni skall ändra antalet goals/boxGoal så glöm inte ändra denna data i created */
            points: 0,
            actualTile: '',
            pastTile: '',
            moves: 0,
            map1: [ /* Skall ni ändra map layout så ändra också grid:en i created */
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                ['W','G', 'G', 'G', 'B','G', 'G', 'W', 'F','W'],
                ['W','U', 'B', 'G', 'G','G', 'G', 'G', 'G','W'],
                ['W','W', 'W', 'W', 'B','G', 'G', 'W', 'G','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'D', 'G','W'],
                ['W','P', 'G', 'G', 'G','G', 'G', 'D', 'G','W'],
                ['W','W', 'W', 'W', 'B','G', 'G', 'W', 'G','W'],
                ['W','G', 'B', 'G', 'G','G', 'G', 'G', 'G','W'],
                ['W','G', 'G', 'G', 'B','G', 'G', 'W', 'F','W'],
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
            ],
            map2: [
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                ['W','F', 'G', 'G', 'G','G', 'G', 'G', 'F','W'],
                ['W','G', 'W', 'G', 'W','W', 'W', 'W', 'W','W'],
                ['W','G', 'W', 'B', 'G','G', 'U', 'W', 'S','S'],
                ['W','G', 'W', 'G', 'G','W', 'W', 'W', 'W','S'],
                ['W','G', 'D', 'B', 'G','P', 'G', 'G', 'W','W'],
                ['W','G', 'W', 'G', 'G','B', 'G', 'B', 'G','W'],
                ['W','G', 'W', 'W', 'D','W', 'W', 'G', 'G','W'],
                ['W','F', 'G', 'G', 'G','G', 'G', 'F', 'G','W'],
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
            ],
            map3: [
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W','W','W','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','W','F','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','F','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','W','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','W','B','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','W','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','F','W'],
                ['W','P', 'G', 'G', 'G','G', 'G', 'G', 'G','G','W','F','W'],
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W','W','W','W'],
            ], /* Tänker att vi gör map4(Extreme) tillsammans då den skall  vi maxa på, blir avslutnings område */
            playerPosition:{
                x: '',
                y: ''
            }
        }
    },
    methods:{ /* Detta är logiken i spelet */
        onMovePlayerOnClick(x,y){
            if(this.tiles[y-1][x].img == this.player){
                moveDown(x,y,this)
            }
            else if(this.tiles[y+1][x].img == this.player){
                moveUp(x,y,this)
            }
            else if(this.tiles[y][x-1].img == this.player){
                moveRight(x,y,this)
            }
            else if(this.tiles[y][x+1].img == this.player){
                moveLeft(x,y,this)
            }
        },
        checkKey(e){
            e = e || window.event
            for(let i = 0; i < this.tiles.length; i++){
                for(let j = 0; j < this.tiles[i].length; j++){
                    if(this.tiles[i][j].img == this.player){
                        this.playerPosition.x = j
                        this.playerPosition.y = i
                    }
                }
            }
            if(e.keyCode == '87'){
                console.log('Up')
                moveUp(this.playerPosition.x,this.playerPosition.y-1,this)
            }
            else if(e.keyCode == '83'){
                console.log('Down')
                moveDown(this.playerPosition.x,this.playerPosition.y+1,this)
            }
            else if(e.keyCode == '65'){
                console.log('Left')
                moveLeft(this.playerPosition.x-1,this.playerPosition.y,this)
            }
            else if(e.keyCode == '68'){
                console.log('Right')
                moveRight(this.playerPosition.x+1,this.playerPosition.y,this)
            }
            else if(e.keyCode == '32'){
                window.location.reload()
            }
        }
    },
    created(){
        window.onkeydown = this.checkKey
        let revealGrid = this.displayGrid
        if(this.revealGrid = true){
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
                                    this.tiles[col][row].class = "small"
                                    break
                                }
                                case 'P':{
                                    this.tiles[col][row].img = this.player
                                    this.tiles[col][row].class = "small"                                 
                                    break
                                }
                                case 'B':{
                                    this.tiles[col][row].img = this.block
                                    this.tiles[col][row].class = "small"                                  
                                    break
                                }
                                case 'G':{
                                    this.tiles[col][row].img = this.ground
                                    this.tiles[col][row].class = "small"                                 
                                    break
                                }
                                case 'F':{
                                    this.tiles[col][row].img = this.boxGoal
                                    this.tiles[col][row].class = "small"               
                                    break
                                }
                                case 'S':{
                                    this.tiles[col][row].img = this.blackBox
                                    this.tiles[col][row].class = "small"
                                    break
                                }
                                case 'U':{
                                    this.tiles[col][row].img = this.powerUp
                                    this.tiles[col][row].class = "small"
                                    break
                                }
                                case 'D':{
                                    this.tiles[col][row].img = this.breakableWall
                                    this.tiles[col][row].class = "small"
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
                                    this.tiles[col][row].img = this.wall
                                    this.tiles[col][row].class = "small"
                                    break
                                }
                                case 'P':{
                                    this.tiles[col][row].img = this.player
                                    this.tiles[col][row].class = "small"                                 
                                    break
                                }
                                case 'B':{
                                    this.tiles[col][row].img = this.block
                                    this.tiles[col][row].class = "small"                                  
                                    break
                                }
                                case 'G':{
                                    this.tiles[col][row].img = this.ground
                                    this.tiles[col][row].class = "small"                                 
                                    break
                                }
                                case 'F':{
                                    this.tiles[col][row].img = this.boxGoal
                                    this.tiles[col][row].class = "small"               
                                    break
                                }
                                case 'S':{
                                    this.tiles[col][row].img = this.blackBox
                                    this.tiles[col][row].class = "small"
                                    break
                                }
                                case 'U':{
                                    this.tiles[col][row].img = this.powerUp
                                    this.tiles[col][row].class = "small"
                                    break
                                }
                                case 'D':{
                                    this.tiles[col][row].img = this.breakableWall
                                    this.tiles[col][row].class = "small"
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
                                    this.tiles[col][row].class = "medium"
                                    break
                                }
                                case 'P':{
                                    this.tiles[col][row].img = this.player
                                    this.tiles[col][row].class = "medium"
                                    break
                                }
                                case 'B':{
                                    this.tiles[col][row].img = this.block
                                    this.tiles[col][row].class = "medium"
                                    break
                                }
                                case 'G':{
                                    this.tiles[col][row].img = this.ground
                                    this.tiles[col][row].class = "medium"
                                    break
                                }
                                case 'F':{
                                    this.tiles[col][row].img = this.boxGoal
                                    this.tiles[col][row].class = "medium"
                                    break
                                }
                                case 'S':{
                                    this.tiles[col][row].img = this.blackBox
                                    this.tiles[col][row].class = "medium"
                                    break
                                }  
                                case 'U':{
                                    this.tiles[col][row].img = this.powerUp
                                    this.tiles[col][row].class = "medium"
                                    break
                                } 
                                case 'D':{
                                    this.tiles[col][row].img = this.breakableWall
                                    this.tiles[col][row].class = "medium"
                                    break
                                }
                    }            
    }
    
}
            }
            if(this.difficulty == "Easy"){ /* This section makes checking for boxGoal easier and dynamic */
                /* Ändra goals baserat på hur många 'F' det finns och grid:en skall vara samma för respektive map och svårighetsgrad */
                this.goals = 2
                this.grid = [ /* Skall ni ändra map layout så ändra också grid:en i data */
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                    ['W','G', 'G', 'G', 'B','G', 'G', 'W', 'F','W'],
                    ['W','U', 'B', 'G', 'G','G', 'G', 'G', 'G','W'],
                    ['W','W', 'W', 'W', 'B','G', 'G', 'W', 'G','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'D', 'G','W'],
                    ['W','P', 'G', 'G', 'G','G', 'G', 'D', 'G','W'],
                    ['W','W', 'W', 'W', 'B','G', 'G', 'W', 'G','W'],
                    ['W','G', 'B', 'G', 'G','G', 'G', 'G', 'G','W'],
                    ['W','G', 'G', 'G', 'B','G', 'G', 'W', 'F','W'],
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
                ]
            }
            else if(this.difficulty == "Normal"){
                this.goals = 4
                this.grid = [
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                    ['W','F', 'G', 'G', 'G','G', 'G', 'G', 'F','W'],
                    ['W','G', 'W', 'G', 'W','W', 'W', 'W', 'W','W'],
                    ['W','G', 'W', 'B', 'G','G', 'U', 'W', 'S','S'],
                    ['W','G', 'W', 'G', 'G','W', 'W', 'W', 'W','S'],
                    ['W','G', 'D', 'B', 'G','P', 'G', 'G', 'W','W'],
                    ['W','G', 'W', 'G', 'G','B', 'G', 'B', 'G','W'],
                    ['W','G', 'W', 'W', 'D','W', 'W', 'G', 'G','W'],
                    ['W','F', 'G', 'G', 'G','G', 'G', 'F', 'G','W'],
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
                ]
            }
            else if(this.difficulty == "Hard"){
                this.goals = 2
                this.grid = [
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W','W','W','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','W','F','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','F','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','W','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','W','B','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','W','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','G','W'],
                    ['W','G', 'G', 'G', 'G','G', 'G', 'G', 'G','G','G','F','W'],
                    ['W','P', 'G', 'G', 'G','G', 'G', 'G', 'G','G','W','F','W'],
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W','W','W','W'],
                ]
            }
            }
            this.flatTiles = this.tiles.flat()
},
}