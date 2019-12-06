export default{
    props:['actualTile', 'tiles', 'player', 'block', 'wall','blockOnGoal', 'ground','pastTile','flatTiles','moves'],
    methods:{
        onMovePlayerOnClick(x,y){
            this.actualTile = this.tiles[y][x].img
            if(this.actualTile != this.wall){
                if(this.player == this.tiles[y-1][x].img ||
                    this.player == this.tiles[y+1][x].img ||
                    this.player == this.tiles[y][x-1].img ||
                    this.player == this.tiles[y][x+1].img){ /* Logic start here */
                        
                if(this.tiles[y-1][x].img == this.player) { /* Denna if är till för sätta tile rätt och undvika dupe player */
                    this.player = "/images/playerDown.png"
                    if( this.tiles[y][x].img == this.block && this.tiles[y+1][x].img == this.block){
                        console.log('None')
                    }
                    else if(this.tiles[y][x].img == this.blockOnGoal && this.tiles[y+1][x].img == this.wall || 
                        this.tiles[y][x].img == this.blockOnGoal && this.tiles[y+1][x].img == this.blockOnGoal || 
                        this.tiles[y][x].img == this.blockOnGoal && this.tiles[y+1][x].img == this.block ||
                        this.tiles[y][x].img == this.block && this.tiles[y+1][x].img == this.blockOnGoal){
                        
                    }
                    else if(this.tiles[y][x].img == this.block && (this.tiles[y+1][x].img != this.wall) ||this.tiles[y][x].img == this.blockOnGoal){ /* Denna kollar när gubben går neråt */
                        this.pastTile = this.tiles[y-1][x].img
                        this.tiles[y-1][x].img = this.ground
                        this.tiles[y+1][x].img = this.block
                        this.tiles[y][x].img = this.player
                        console.log('Else if')
                    }
                    else if(this.tiles[y][x].img == this.block && (this.tiles[y+1][x].img == this.wall)){
                        console.log('Wall hit')
                    }
                    else{
                        this.pastTile = this.tiles[y-1][x].img
                        this.tiles[y-1][x].img = this.ground
                        this.tiles[y][x].img = this.player
                    }
                        console.log(this.pastTile)
                }
            
               else if(this.tiles[y+1][x].img == this.player) { /* Denna kollar när gubben går uppåt */
                this.player = "/images/playerUp.png"
                if( this.tiles[y][x].img == this.block && this.tiles[y-1][x].img == this.block){
                    console.log('None')
                }
                else if(this.tiles[y][x].img == this.blockOnGoal && this.tiles[y-1][x].img == this.wall || 
                    this.tiles[y][x].img == this.blockOnGoal && this.tiles[y-1][x].img == this.blockOnGoal || 
                    this.tiles[y][x].img == this.blockOnGoal &&  this.tiles[y-1][x].img == this.block){
                    console.log('BoxOnGoal to wall test')
                }
                else if(this.tiles[y][x].img == this.block && this.tiles[y-1][x].img != this.wall  ||this.tiles[y][x].img == this.blockOnGoal){
                    this.pastTile = this.tiles[y+1][x].img
                    this.tiles[y+1][x].img = this.ground
                    this.tiles[y-1][x].img = this.block
                    this.tiles[y][x].img = this.player
                }
                else if(this.tiles[y][x].img == this.block && this.tiles[y-1][x].img == this.wall){
                    console.log('Wall hit')
                }
                else{
                    this.pastTile = this.tiles[y-1][x].img
                    this.tiles[y+1][x].img = this.ground
                    this.tiles[y][x].img = this.player
                }
                    console.log(this.pastTile)
                }
            
                else if(this.tiles[y][x-1].img == this.player) { /* Kollar n'r gubben går åt vänster */
                this.player = "/images/playerRight.png"
                if( this.tiles[y][x].img == this.block && this.tiles[y][x+1].img == this.block){
                    console.log('None')
                }
                else if(this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x+1].img == this.wall || 
                    this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x+1].img == this.blockOnGoal || 
                    this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x+1].img == this.block ||
                    this.tiles[y][x].img == this.block && this.tiles[y][x+1].img == this.blockOnGoal){

                }
                   else if(this.tiles[y][x].img == this.block && this.tiles[y][x+1].img != this.wall  ||this.tiles[y][x].img == this.blockOnGoal){
                        this.pastTile = this.tiles[y][x-1].img
                        this.tiles[y][x-1].img = this.ground
                        this.tiles[y][x+1].img = this.block
                        this.tiles[y][x].img = this.player
                    }
                    else if(this.tiles[y][x].img == this.block && this.tiles[y][x+1].img == this.wall ){
                        console.log('Wall hit')
                    }
                    
                    else{
                        this.pastTile = this.tiles[y-1][x].img
                        this.tiles[y][x-1].img = this.ground
                        this.tiles[y][x].img = this.player
                    }
                    console.log(this.pastTile)
                }
            
                else if(this.tiles[y][x+1].img == this.player) { /* Gubben går åt höger */
                    this.player = "/images/playerLeft.png"
                    if( this.tiles[y][x].img == this.block && this.tiles[y][x-1].img == this.block ){
                        console.log('None')
                    }
                    else if(this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x-1].img == this.wall || 
                        this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x-1].img == this.blockOnGoal || 
                        this.tiles[y][x].img == this.blockOnGoal && this.tiles[y][x-1].img == this.block ||
                        this.tiles[y][x].img == this.block && this.tiles[y][x-1].img == this.blockOnGoal ){
                        
                    }
                    else if(this.tiles[y][x].img == this.block && this.tiles[y][x-1].img != this.wall  || this.tiles[y][x].img == this.blockOnGoal){
                        this.pastTile = this.tiles[y][x+1].img
                        this.tiles[y][x+1].img = this.ground
                        this.tiles[y][x-1].img = this.block
                        this.tiles[y][x].img = this.player
                    }
                    else if(this.tiles[y][x].img == this.block && this.tiles[y][x-1].img == this.wall ){
                        console.log('Wall hit')
                    }
                    else{
                        this.pastTile = this.tiles[y-1][x].img
                        this.tiles[y][x+1].img = this.ground
                        this.tiles[y][x].img = this.player
                    }
                    console.log(this.pastTile)
                }
            }
            else if(this.tiles[y][x].img == this.player){
                console.log('This is you')
            }
            else{
                console.log('You can only go 1 tile (for now)')
            }
        }
            else{
                alert('You cant go there')
            }
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
                }
            }
            console.log(this.points)
            this.moves++
            console.log(this.tiles[y][x])
            this.flatTiles = this.tiles.flat()
        },
    }
}