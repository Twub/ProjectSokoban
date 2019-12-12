import Tile from './Tile.js'
import Player from './player.js'
import sound from '../utility/SoundUtility.js';
import storage from '../utility/StorageUtility.js';
import { moveLeft, moveRight, moveDown, moveUp, } from './gameLogic.js'

export default{
    mixins: [sound, storage],
    props:['difficulty','displayGrid', 'arrowClickDir'],
    components:{
        Tile,
        Player,
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
        <span class="trapptText">{{trapptText}}</span>
        
    </div>
    `,
    data(){
        return{
            tiles:[],
            grid: [],
            powerUps:`You have 0 power`,
            trapptText:`dadd`,
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
            trap: "images/speedCoin.jpg",
            goals: 0, /* Om ni skall ändra antalet goals/boxGoal så glöm inte ändra denna data i created */
            points: 0,
            actualTile: '',
            pastTile: '',
            moves: 0,
            map1: [ /* Skall ni ändra map layout så ändra också grid:en i created */
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                ['W',' ', ' ', ' ', 'B',' ', ' ', 'W', 'F','W'],
                ['W','U', 'B', ' ', ' ',' ', ' ', ' ', ' ','W'],
                ['W','W', 'W', 'W', 'B',' ', ' ', 'W', ' ','W'],
                ['W',' ', ' ', ' ', ' ',' ', ' ', 'D', ' ','W'],
                ['W','P', ' ', ' ', ' ','T', ' ', 'D', ' ','W'],
                ['W','W', 'W', 'W', 'B',' ', ' ', 'W', ' ','W'],
                ['W',' ', 'B', ' ', ' ',' ', ' ', ' ', ' ','W'],
                ['W',' ', ' ', ' ', 'B',' ', ' ', 'W', 'F','W'],
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
            ],
            map2: [
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                ['W','F', ' ', ' ', ' ',' ', ' ', ' ', 'F','W'],
                ['W',' ', 'W', ' ', 'W','W', 'W', 'W', 'W','W'],
                ['W',' ', 'W', 'B', ' ',' ', 'U', 'W', 'S','S'],
                ['W',' ', 'W', ' ', ' ','W', 'W', 'W', 'W','S'],
                ['W',' ', 'D', 'B', ' ','P', ' ', ' ', 'W','W'],
                ['W',' ', 'W', ' ', ' ','B', ' ', 'B', ' ','W'],
                ['W',' ', 'W', 'W', 'D','W', 'W', ' ', ' ','W'],
                ['W','F', ' ', ' ', ' ',' ', ' ', 'F', ' ','W'],
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
            ],
            map3: [
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W','W','W','W'],
                ['W',' ', ' ', 'W', ' ',' ', ' ', ' ', ' ',' ','D','F','W'],
                ['W',' ', 'B', ' ', ' ','W', ' ', ' ', ' ',' ',' ','F','W'],
                ['W',' ', ' ', ' ', 'W','W', 'W', ' ', 'W','W','W',' ','W'],
                ['W','W', ' ', 'B', 'W',' ', ' ', ' ', ' ',' ','W',' ','W'],
                ['W',' ', ' ', 'W', 'W',' ', 'B', ' ', 'B',' ','W',' ','W'],
                ['W',' ', 'U', ' ', ' ',' ', ' ', ' ', ' ',' ','D','P','W'],
                ['W',' ', ' ', 'W', 'W',' ', 'W', ' ', 'W',' ','W',' ','W'],
                ['W','W', ' ', 'B', 'W',' ', ' ', ' ', ' ',' ','W',' ','W'],
                ['W',' ', ' ', ' ', 'W','W', 'W', ' ', 'W','W','W',' ','W'],
                ['W',' ', 'B', ' ', ' ','W', ' ', ' ', ' ',' ',' ','F','W'],
                ['W',' ', ' ', 'W', ' ',' ', ' ', ' ', ' ',' ','D','F','W'],
                ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W','W','W','W'],
            ], /* Tänker att vi gör map4(Extreme) tillsammans då den skall  vi maxa på, blir avslutnings område */
            playerPosition:{
                x: '',
                y: ''
            }
        }
    },
    methods: { /* Detta är logiken i spelet */
        setPlayerPosition() {
            for(let i = 0; i < this.tiles.length; i++){
                for(let j = 0; j < this.tiles[i].length; j++){
                    if(this.tiles[i][j].img == this.player){
                        this.playerPosition.x = j
                        this.playerPosition.y = i
                    }
                }
            }
        },
        goLeft() { 
            this.setPlayerPosition()
            moveLeft(this.playerPosition.x-1,this.playerPosition.y,this) 
        },
        goUp() { 
            this.setPlayerPosition()
            moveUp(this.playerPosition.x,this.playerPosition.y-1,this) 
        },
        goDown() { 
            this.setPlayerPosition()
            moveDown(this.playerPosition.x,this.playerPosition.y+1,this)
        },
        goRight() {
            this.setPlayerPosition()
             moveRight(this.playerPosition.x+1,this.playerPosition.y,this) 
        },
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
            this.checkGoalTile()       
        },
        OnmoveLeftByArrow(){
        playerPosition=playerPosition + arrowcords;

        },
        checkKey(e){
            e = e || window.event

            if(e.keyCode == '87'){
                console.log('Up')
                this.goUp()
            }
            else if(e.keyCode == '83'){
                console.log('Down')
                this.goDown()
            }
            else if(e.keyCode == '65'){
                console.log('Left')
                this.goLeft()
            }
            else if(e.keyCode == '68'){
                console.log('Right')
               this.goRight()
            }
            else if(e.keyCode == '32'){
                window.location.reload()
            }
        },
        checkWinCondition(){
            console.log(this.points)
            console.log(`You have moved: ${this.moves} times`)
            if(this.points == this.goals){
                let condition = confirm(`You have completed ${this.difficulty} in ${this.moves} moves`)
                if(condition == true){
                    window.location.reload()
                }
                else{
                    alert('Continuing game')
                }
                }
                this.points = 0
        },
        generateMap(size,map, cssClass){
            for(let col = 0; col < size; col++){
                this.tiles[col] = []
                for(let row = 0; row < size; row++){
                    let position = {
                        x: row,
                        y: col,
                    }
                    this.tiles[col].push(position)
            switch(map[col][row]){
                case 'W':{
                    this.tiles[col][row].img = this.wall
                    this.tiles[col][row].class = cssClass
                    break
                }
                case 'P':{
                    this.tiles[col][row].img = this.player
                    this.tiles[col][row].class = cssClass                               
                    break
                }
                case 'B':{
                    this.tiles[col][row].img = this.block
                    this.tiles[col][row].class = cssClass                                 
                    break
                }
                case ' ':{
                    this.tiles[col][row].img = this.ground
                    this.tiles[col][row].class = cssClass                                 
                    break
                }
                case 'F':{
                    this.tiles[col][row].img = this.boxGoal
                    this.tiles[col][row].class = cssClass              
                    break
                }
                case 'S':{
                    this.tiles[col][row].img = this.blackBox
                    this.tiles[col][row].class = cssClass
                    break
                }
                case 'U':{
                    this.tiles[col][row].img = this.powerUp
                    this.tiles[col][row].class = cssClass
                    break
                }
                case 'D':{
                    this.tiles[col][row].img = this.breakableWall
                    this.tiles[col][row].class = cssClass
                    break
                }
                case 'T':{
                    this.tiles[col][row].img = this.trap
                    this.tiles[col][row].class = cssClass
                    break
                }
            }
        }
    }
}
},
    created(){
        this.moveUp = moveUp;
        this.moveDown = moveDown;
        this.moveRight = moveRight;
        this.moveLeft = moveLeft;


        window.onkeydown = this.checkKey
        let revealGrid = this.displayGrid
        if(revealGrid = true){
            if(this.difficulty == "Easy"){
                this.generateMap(10,this.map1,"small")
            }
            else if(this.difficulty == "Normal"){
                this.generateMap(10,this.map2,"small")
            }
            else if(this.difficulty == "Hard"){
                this.generateMap(13,this.map3,"medium")
            }
            if(this.difficulty == "Easy"){ /* This section makes checking for boxGoal easier and dynamic */
                /* Ändra goals baserat på hur många 'F' det finns och grid:en skall vara samma för respektive map och svårighetsgrad */
                this.goals = 2
                this.playerPosition.x = 1
                this.playerPosition.y = 5
                this.grid = [ /* Skall ni ändra map layout så ändra också grid:en i data */
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                    ['W',' ', ' ', ' ', 'B',' ', ' ', 'W', 'F','W'],
                    ['W','U', 'B', ' ', ' ',' ', ' ', ' ', ' ','W'],
                    ['W','W', 'W', 'W', 'B',' ', ' ', 'W', ' ','W'],
                    ['W',' ', ' ', ' ', ' ',' ', ' ', 'D', ' ','W'],
                    ['W','P', ' ', ' ', ' ','T', ' ', 'D', ' ','W'],
                    ['W','W', 'W', 'W', 'B',' ', ' ', 'W', ' ','W'],
                    ['W',' ', 'B', ' ', ' ',' ', ' ', ' ', ' ','W'],
                    ['W',' ', ' ', ' ', 'B',' ', ' ', 'W', 'F','W'],
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
                ]
            }
            else if(this.difficulty == "Normal"){
                this.goals = 4
                this.playerPosition.x = 5
                this.playerPosition.y = 5
                this.grid = [
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W'],
                    ['W','F', ' ', ' ', ' ',' ', ' ', ' ', 'F','W'],
                    ['W',' ', 'W', ' ', 'W','W', 'W', 'W', 'W','W'],
                    ['W',' ', 'W', 'B', ' ',' ', 'U', 'W', 'S','S'],
                    ['W',' ', 'W', ' ', ' ','W', 'W', 'W', 'W','S'],
                    ['W',' ', 'D', 'B', ' ','P', ' ', ' ', 'W','W'],
                    ['W',' ', 'W', ' ', ' ','B', ' ', 'B', ' ','W'],
                    ['W',' ', 'W', 'W', 'D','W', 'W', ' ', ' ','W'],
                    ['W','F', ' ', ' ', ' ',' ', ' ', 'F', ' ','W'],
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W']
                ]
            }
            else if(this.difficulty == "Hard"){
                this.goals = 2
                this.grid = [
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W','W','W','W'],
                    ['W',' ', ' ', 'W', ' ',' ', ' ', ' ', ' ',' ','D','F','W'],
                    ['W',' ', 'B', ' ', ' ','W', ' ', ' ', ' ',' ',' ','F','W'],
                    ['W',' ', ' ', ' ', 'W','W', 'W', ' ', 'W','W','W',' ','W'],
                    ['W','W', ' ', 'B', 'W',' ', ' ', ' ', ' ',' ','W',' ','W'],
                    ['W',' ', ' ', 'W', 'W',' ', 'B', ' ', 'B',' ','W',' ','W'],
                    ['W',' ', 'U', ' ', ' ',' ', ' ', ' ', ' ',' ','D','P','W'],
                    ['W',' ', ' ', 'W', 'W',' ', 'W', ' ', 'W',' ','W',' ','W'],
                    ['W','W', ' ', 'B', 'W',' ', ' ', ' ', ' ',' ','W',' ','W'],
                    ['W',' ', ' ', ' ', 'W','W', 'W', ' ', 'W','W','W',' ','W'],
                    ['W',' ', 'B', ' ', ' ','W', ' ', ' ', ' ',' ',' ','F','W'],
                    ['W',' ', ' ', 'W', ' ',' ', ' ', ' ', ' ',' ','D','F','W'],
                    ['W','W', 'W', 'W', 'W','W', 'W', 'W', 'W','W','W','W','W'],
                ]
            }
            }
            this.flatTiles = this.tiles.flat()
},
watch:{
    points(){
        setTimeout(() => {
            this.checkWinCondition()
        }, 10);
    },
    arrowClickDir(dir){
        switch(dir){
            case "right":this.goRight()
            break;
            case "left":this.goLeft()
            break;
            case "up":this.goUp()
            break;
            case "down":this.goDown()
            break;
        }

    },
}
}