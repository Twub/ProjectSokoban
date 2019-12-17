import Tile from './Tile.js'
import sound from '../utility/SoundUtility.js';
import storage from '../utility/StorageUtility.js';
import { moveLeft, moveRight, moveDown, moveUp, timerEnable } from './gameLogic.js'
import { maps } from './maps.js'

export default{
    mixins: [sound, storage],
    props:['difficulty','displayGrid', 'arrowClickDir'],
    components:{
        Tile,
    },
    template: `
    <div id="grid">
    <Tile 
        v-for="(tile, id) of flatTiles"
        :position="tile"
        :key="'tile'+ id + tile.x + tile.y"
        class="grids"
        @movePlayerOnClick="onMovePlayerOnClick"></Tile>       
        <span class="powerUps">{{powerUps}}</span>
        <span class="trapptText">{{trapptText}}</span>  
    </div>
    `,
    data(){
        return{
            tiles:[],
            grid: [],
            powerUps:`You have 0 powerups`,
            trapptText:``,
            flatTiles:[],
            amountOfPowerUps: 0,
            hasPowerUp: false,
            wall: "/images/img23.png",
            breakableWall:  "/images/img25.png",
            player: "/images/playerDown.png",
            block: "/images/img2.png",
            map : '',
            ground: "/images/img11.png",
            boxGoal: "/images/img20.png",
            blockOnGoal: "/images/img4.png",
            blackBox: "images/blackBox.png",
            powerUp: "images/powerCoin.png",
            trap: "images/trap.png",
            goals: 0, /* Om ni skall ändra antalet goals/boxGoal så glöm inte ändra denna data i created */
            points: 0,
            actualTile: '',
            pastTile: '',
            moves: 0,
            gameTime: 0,
            timerEnable: false,
            /* Tänker att vi gör map4(Extreme) tillsammans då den skall  vi maxa på, blir avslutnings område */
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
        },
      timerOn: function(){
        timerEnable();
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
            if(this.points == this.goals){
                this.gameTime=10;
                let condition = confirm(`You have completed ${this.difficulty} in ${this.moves} moves ${this.GameTime}`) /* Implementera timer räkning här */
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
                this.map = maps[0]
                this.generateMap(10,this.map,"small")
            }
            else if(this.difficulty == "Normal"){
                this.map = maps[1]
                this.generateMap(10,this.map,"small")
            }
            else if(this.difficulty == "Hard"){
                this.map = maps[2]
                this.generateMap(13,this.map,"medium")
            }
            else if(this.difficulty == "Extreme"){
                this.map = maps[3]
                this.generateMap(20,this.map,"large")
            }
            if(this.difficulty == "Easy"){ /* This section makes checking for boxGoal easier and dynamic */
                /* Ändra goals baserat på hur många 'F' det finns och grid:en skall vara samma för respektive map och svårighetsgrad */
                this.goals = 2
                this.playerPosition.x = 1
                this.playerPosition.y = 5
                this.grid = maps[0]
            }
            else if(this.difficulty == "Normal"){
                this.goals = 4
                this.playerPosition.x = 5
                this.playerPosition.y = 5
                this.grid = maps[1]
            }
            else if(this.difficulty == "Hard"){
                this.goals = 4
                this.playerPosition.x = 11
                this.playerPosition.y = 6
                this.grid = maps[2]
            }
            else if(this.difficulty == "Extreme"){
                this.goals = 6
                this.playerPosition.x = 11
                this.playerPosition.y = 6
                this.grid = maps[3]
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