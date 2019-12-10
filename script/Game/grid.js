import Tile from './Tile.js'
import Player from './player.js'
import sound from '../utility/SoundUtility.js';
import storage from '../utility/StorageUtility.js';

export default{
    mixins: [sound, storage],
    props:['difficulty','displayGrid'],
    components:{
        Tile,
        Player
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
    </div>
    `,
    data(){
        return{
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
            playerPosition:{
                x: 1,
                y: 2
            }
        }
    },
    methods:{ /* Detta är logiken i spelet */
        onMovePlayerOnClick(x,y){
            let ableToMove = this.getItem("isAbleToMove");
            if (ableToMove == 'true'){
                this.buttonClick();
            this.actualTile = this.tiles[y][x].img
            if(this.player == this.tiles[y-1][x].img ||
                this.player == this.tiles[y+1][x].img ||
                this.player == this.tiles[y][x-1].img ||
                this.player == this.tiles[y][x+1].img){ /* Finns en liten bug när man trycker sig mot en o samma låda flera gånger så försvinner gubben typ från grid */

           if(this.actualTile != this.wall){ /* Logic start here */
                        
            if(this.actualTile == this.powerUp){
                this.amountOfPowerUps++
                this.powerUps = `You have ${this.amountOfPowerUps} powerups`
                console.log('You have a powerup')
            }
            if(this.tiles[y][x].img == this.breakableWall && this.amountOfPowerUps > 0){
                this.tiles[y][x].img = this.ground
                this.amountOfPowerUps--
                this.powerUps = `You have ${this.amountOfPowerUps} powerups`
            }
            else if(this.tiles[y][x].img == this.breakableWall && this.hasPowerUp == false){
                console.log('You have no powerup')
            }
                if(this.tiles[y-1][x].img == this.player) { /* Denna if är till för sätta tile rätt och undvika dupe player */
                    this.player = "/images/playerDown.png"
                    if( this.tiles[y][x].img == this.block && this.tiles[y+1][x].img == this.wall ||
                        this.tiles[y][x].img == this.block && this.tiles[y+1][x].img == this.block || 
                        this.tiles[y][x].img == this.block && this.tiles[y+1][x].img == this.breakableWall ||
                        this.tiles[y][x].img == this.blockOnGoal && this.tiles[y+1][x].img == this.wall || 
                        this.tiles[y][x].img == this.blockOnGoal && this.tiles[y+1][x].img == this.blockOnGoal || 
                        this.tiles[y][x].img == this.blockOnGoal && this.tiles[y+1][x].img == this.block ||
                        this.tiles[y][x].img == this.block && this.tiles[y+1][x].img == this.blockOnGoal){
                            console.log('None')
                            this.tiles[y-1][x].img = this.player
                    }
                    else if(this.tiles[y][x].img == this.block && (this.tiles[y+1][x].img != this.wall) ||this.tiles[y][x].img == this.blockOnGoal){ /* Denna kollar när gubben går neråt */
                        this.pastTile = this.tiles[y-1][x].img
                        this.tiles[y-1][x].img = this.ground
                        this.tiles[y+1][x].img = this.block
                        this.tiles[y][x].img = this.player
                        this.moves++
                    }
                    else if(this.tiles[y][x].img == this.breakableWall){
                        console.log('This is a thin wall')
                    }
                    else{
                        this.pastTile = this.tiles[y-1][x].img
                        this.tiles[y-1][x].img = this.ground
                        this.tiles[y][x].img = this.player
                        this.moves++
                    }
                }
            
               else if(this.tiles[y+1][x].img == this.player) { /* Denna kollar när gubben går uppåt */
                this.player = "/images/playerUp.png"
                if( this.tiles[y][x].img == this.block && this.tiles[y-1][x].img == this.block ||
                    this.tiles[y][x].img == this.block && this.tiles[y-1][x].img == this.breakableWall ||
                    this.tiles[y][x].img == this.blockOnGoal && this.tiles[y-1][x].img == this.wall || 
                    this.tiles[y][x].img == this.blockOnGoal && this.tiles[y-1][x].img == this.blockOnGoal || 
                    this.tiles[y][x].img == this.blockOnGoal &&  this.tiles[y-1][x].img == this.block ||
                    this.tiles[y][x].img == this.block && this.tiles[y-1][x].img == this.blockOnGoal){
                        this.tiles[y+1][x].img = this.player
                }
                else if(this.tiles[y][x].img == this.block && this.tiles[y-1][x].img != this.wall  ||this.tiles[y][x].img == this.blockOnGoal){
                    this.pastTile = this.tiles[y+1][x].img
                    this.tiles[y+1][x].img = this.ground
                    this.tiles[y-1][x].img = this.block
                    this.tiles[y][x].img = this.player
                    this.moves++
                }
                else if(this.tiles[y][x].img == this.block && this.tiles[y-1][x].img == this.wall){
                }
                else if(this.tiles[y][x].img == this.breakableWall){
                    console.log('This is a thin wall')
                }
                else{
                    this.pastTile = this.tiles[y-1][x].img
                    this.tiles[y+1][x].img = this.ground
                    this.tiles[y][x].img = this.player
                    this.moves++
                }
                }
            
                else if(this.tiles[y][x-1].img == this.player) { /* Kollar n'r gubben går åt vänster */
                this.player = "/images/playerRight.png"
                if( this.tiles[y][x].img == this.block && this.tiles[y][x+1].img == this.block ||
                    this.tiles[y][x].img == this.block && this.tiles[y][x+1].img == this.breakableWall ||
                    this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x+1].img == this.wall || 
                    this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x+1].img == this.blockOnGoal || 
                    this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x+1].img == this.block ||
                    this.tiles[y][x].img == this.block && this.tiles[y][x+1].img == this.blockOnGoal){
                        this.tiles[y][x-1].img = this.player
                }
                   else if(this.tiles[y][x].img == this.block && this.tiles[y][x+1].img != this.wall  ||this.tiles[y][x].img == this.blockOnGoal){
                        this.pastTile = this.tiles[y][x-1].img
                        this.tiles[y][x-1].img = this.ground
                        this.tiles[y][x+1].img = this.block
                        this.tiles[y][x].img = this.player
                        this.moves++
                    }
                    else if(this.tiles[y][x].img == this.block && this.tiles[y][x+1].img == this.wall){
                    }
                    else if(this.tiles[y][x].img == this.breakableWall){
                        console.log('This is a thin wall')
                    }
                    else{
                        this.pastTile = this.tiles[y-1][x].img
                        this.tiles[y][x-1].img = this.ground
                        this.tiles[y][x].img = this.player
                        this.moves++
                    }
                    console.log(this.pastTile)
                }
            
                else if(this.tiles[y][x+1].img == this.player) { /* Gubben går åt höger */
                    this.player = "/images/playerLeft.png"
                    if( this.tiles[y][x].img == this.block && this.tiles[y][x-1].img == this.block ||
                        this.tiles[y][x].img == this.block && this.tiles[y][x-1].img == this.breakableWall ||
                        this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x-1].img == this.wall || 
                        this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x-1].img == this.blockOnGoal || 
                        this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x-1].img == this.block ||
                        this.tiles[y][x].img == this.block && this.tiles[y][x-1].img == this.blockOnGoal ){
                            this.tiles[y][x+1].img = this.player
                    }
                    else if(this.tiles[y][x].img == this.block && this.tiles[y][x-1].img != this.wall  || this.tiles[y][x].img == this.blockOnGoal){
                        this.pastTile = this.tiles[y][x+1].img
                        this.tiles[y][x+1].img = this.ground
                        this.tiles[y][x-1].img = this.block
                        this.tiles[y][x].img = this.player
                        this.moves++
                    }
                    else if(this.tiles[y][x].img == this.block && this.tiles[y][x-1].img == this.wall){
                    }
                    else if(this.tiles[y][x].img == this.breakableWall){
                        console.log('This is a thin wall')
                    }
                    else{
                        this.pastTile = this.tiles[y-1][x].img
                        this.tiles[y][x+1].img = this.ground
                        this.tiles[y][x].img = this.player
                        this.moves++
                    }
                    console.log(this.pastTile)
                }
            }
            else if(this.tiles[y][x].img == this.player){
                console.log('This is you')
            }
            else{
                console.log('This is a wall')
            }
        }
            else{
                console.log('Too far away')
            }
            console.log(this.actualTile)
            for(let i = 0; i < this.tiles.length; i++){ /* This loop checks and keeps the boxGoal in its place */
                for(let j = 0; j < this.tiles[i].length; j++){
                    if(this.grid[j][i] == 'F' && this.tiles[j][i].img == this.block || this.tiles[j][i].img == this.player || this.tiles[j][i].img == this.blockOnGoal){
                        if(this.grid[j][i] == 'F' && this.tiles[j][i].img == this.block || this.tiles[j][i].img == this.blockOnGoal){
                            this.tiles[j][i].img = this.blockOnGoal
                        }
                        else{
                            
                        }
                    }
                    else if(this.grid[j][i] == 'F' && this.tiles[j][i].img != this.boxGoal){
                        this.tiles[j][i].img = this.boxGoal
                    }
                    if(this.tiles[j][i].img == this.blockOnGoal){
                        this.points++
                    }
                }
            }
            if(this.points == this.goals){
                alert(`You have completed ${this.difficulty} in ${this.moves} moves`)
                let choice = confirm("Continue to next difficulty?")
                if(choice == true){
                    if(this.difficulty == "Easy"){
                        this.difficulty = "Normal"
                    }
                    else if(this.difficulty == "Normal"){
                        this.difficulty = "Hard"
                    }
                }
            }
            console.log(this.points)
            this.points = 0
            console.log(`You have moved: ${this.moves} times`)
            this.flatTiles = this.tiles.flat()
            }
            else{
                alert('Press start to enable movement')
            }
            
        },
    },
    created(){
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
                ]
            }
            }
            this.flatTiles = this.tiles.flat()
},
}