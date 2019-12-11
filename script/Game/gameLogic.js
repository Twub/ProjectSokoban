let delayTime=0;
export function moveDown(x,y,grid){
    let ableToMove = grid.getItem("isAbleToMove");
    if (ableToMove == 'true'){
        grid.buttonClick();
    grid.actualTile = grid.tiles[y][x].img
    if(grid.player == grid.tiles[y-1][x].img ||
        grid.player == grid.tiles[y+1][x].img ||
        grid.player == grid.tiles[y][x-1].img ||
        grid.player == grid.tiles[y][x+1].img){

   if(grid.actualTile != grid.wall){ /* Logic start here */
                
    if(grid.actualTile == grid.powerUp){
        grid.amountOfPowerUps++
        grid.powerUps = `You have ${grid.amountOfPowerUps} powerups`
        console.log('You have a powerup')
    }
    if(grid.tiles[y][x].img == grid.breakableWall && grid.amountOfPowerUps > 0){
        grid.tiles[y][x].img = grid.ground
        grid.amountOfPowerUps--
        grid.powerUps = `You have ${grid.amountOfPowerUps} powerups`
    }
    else if(grid.tiles[y][x].img == grid.breakableWall && grid.hasPowerUp == false){
        console.log('You have no powerup')
    } 
    if(grid.tiles[y-1][x].img == grid.player) { /* Denna if är till för sätta tile rätt och undvika dupe player */
        grid.player = "/images/playerDown.png"
        if( grid.tiles[y][x].img == grid.block && grid.tiles[y+1][x].img == grid.wall ||
            grid.tiles[y][x].img == grid.block && grid.tiles[y+1][x].img == grid.block || 
            grid.tiles[y][x].img == grid.block && grid.tiles[y+1][x].img == grid.breakableWall ||
            grid.tiles[y][x].img == grid.blockOnGoal && grid.tiles[y+1][x].img == grid.wall || 
            grid.tiles[y][x].img == grid.blockOnGoal && grid.tiles[y+1][x].img == grid.blockOnGoal || 
            grid.tiles[y][x].img == grid.blockOnGoal && grid.tiles[y+1][x].img == grid.block ||
            grid.tiles[y][x].img == grid.block && grid.tiles[y+1][x].img == grid.blockOnGoal){
                console.log('None')
                grid.tiles[y-1][x].img = grid.player
        }
        else if(grid.tiles[y][x].img == grid.block && (grid.tiles[y+1][x].img != grid.wall) ||grid.tiles[y][x].img == grid.blockOnGoal){ /* Denna kollar när gubben går neråt */
           setTimeout(function() {
            grid.pastTile = grid.tiles[y-1][x].img
            grid.tiles[y-1][x].img = grid.ground
            grid.tiles[y+1][x].img = grid.block
            grid.tiles[y][x].img = grid.player
            grid.moves++
           },delayTime);
            
        }
        else if(grid.tiles[y][x].img == grid.breakableWall && grid.hasPowerUp == false ){
            console.log('grid is a thin wall')
            grid.tiles[y-1][x].img = grid.player
        }
        else{
            setTimeout(function() {
            grid.pastTile = grid.tiles[y-1][x].img
            grid.tiles[y-1][x].img = grid.ground
            grid.tiles[y][x].img = grid.player
            grid.moves++
        },delayTime);
        }
    }
        }
    }
}
}
export function moveUp(x,y,grid){
    let ableToMove = grid.getItem("isAbleToMove");
    if (ableToMove == 'true'){
        grid.buttonClick();
    grid.actualTile = grid.tiles[y][x].img
    if(grid.player == grid.tiles[y-1][x].img ||
        grid.player == grid.tiles[y+1][x].img ||
        grid.player == grid.tiles[y][x-1].img ||
        grid.player == grid.tiles[y][x+1].img){ /* Finns en liten bug när man trycker sig mot en o samma låda flera gånger så försvinner gubben typ från grid */

   if(grid.actualTile != grid.wall){ /* Logic start here */
                
    if(grid.actualTile == grid.powerUp){
        grid.amountOfPowerUps++
        grid.powerUps = `You have ${grid.amountOfPowerUps} powerups`
        console.log('You have a powerup')
    }
    if(grid.tiles[y][x].img == grid.breakableWall && grid.amountOfPowerUps > 0){
        grid.tiles[y][x].img = grid.ground
        grid.amountOfPowerUps--
        grid.powerUps = `You have ${grid.amountOfPowerUps} powerups`
    }
    else if(grid.tiles[y][x].img == grid.breakableWall && grid.hasPowerUp == false){
        console.log('You have no powerup')
    } 
    if(grid.tiles[y+1][x].img == grid.player) { /* Denna kollar när gubben går uppåt */
        grid.player = "/images/playerUp.png"
        if( grid.tiles[y][x].img == grid.block && grid.tiles[y-1][x].img == grid.block ||
            grid.tiles[y][x].img == grid.block && grid.tiles[y-1][x].img == grid.breakableWall ||
            grid.tiles[y][x].img == grid.blockOnGoal && grid.tiles[y-1][x].img == grid.wall || 
            grid.tiles[y][x].img == grid.blockOnGoal && grid.tiles[y-1][x].img == grid.blockOnGoal || 
            grid.tiles[y][x].img == grid.blockOnGoal &&  grid.tiles[y-1][x].img == grid.block ||
            grid.tiles[y][x].img == grid.block && grid.tiles[y-1][x].img == grid.blockOnGoal ||
            grid.tiles[y][x].img == grid.block && grid.tiles[y-1][x].img == grid.wall){
                grid.tiles[y+1][x].img = grid.player
        }
        
        else if(grid.tiles[y][x].img == grid.block && grid.tiles[y-1][x].img != grid.wall  ||grid.tiles[y][x].img == grid.blockOnGoal){
            setTimeout(function() {
            grid.pastTile = grid.tiles[y+1][x].img
            grid.tiles[y+1][x].img = grid.ground
            grid.tiles[y-1][x].img = grid.block
            grid.tiles[y][x].img = grid.player
            grid.moves++
        },delayTime);
        }
        else if(grid.tiles[y][x].img == grid.breakableWall && grid.hasPowerUp == false ){
            console.log('grid is a thin wall')
            grid.tiles[y+1][x].img = grid.player
        }
        else{
            setTimeout(function() {
            grid.pastTile = grid.tiles[y-1][x].img
            grid.tiles[y+1][x].img = grid.ground
            grid.tiles[y][x].img = grid.player
            grid.moves++
        },delayTime);
        }
        }
}
        }
    }
}
export function moveRight(x,y,grid){
    let ableToMove = grid.getItem("isAbleToMove");
    if (ableToMove == 'true'){
        grid.buttonClick();
    grid.actualTile = grid.tiles[y][x].img
    if(grid.player == grid.tiles[y-1][x].img ||
        grid.player == grid.tiles[y+1][x].img ||
        grid.player == grid.tiles[y][x-1].img ||
        grid.player == grid.tiles[y][x+1].img){ /* Finns en liten bug när man trycker sig mot en o samma låda flera gånger så försvinner gubben typ från grid */

   if(grid.actualTile != grid.wall){ /* Logic start here */
                
    if(grid.actualTile == grid.powerUp){
        grid.amountOfPowerUps++
        grid.powerUps = `You have ${grid.amountOfPowerUps} powerups`
        console.log('You have a powerup')
    }
    if(grid.tiles[y][x].img == grid.breakableWall && grid.amountOfPowerUps > 0){
        grid.tiles[y][x].img = grid.ground
        grid.amountOfPowerUps--
        grid.powerUps = `You have ${grid.amountOfPowerUps} powerups`
    }
    else if(grid.tiles[y][x].img == grid.breakableWall && grid.hasPowerUp == false){
        console.log('You have no powerup')
    } 
    if(grid.tiles[y][x-1].img == grid.player) { /* Kollar n'r gubben går åt vänster */
    grid.player = "/images/playerRight.png"
    if( grid.tiles[y][x].img == grid.block && grid.tiles[y][x+1].img == grid.block ||
        grid.tiles[y][x].img == grid.block && grid.tiles[y][x+1].img == grid.breakableWall ||
        grid.tiles[y][x].img == grid.blockOnGoal && grid.tiles[y][x+1].img == grid.wall || 
        grid.tiles[y][x].img == grid.blockOnGoal && grid.tiles[y][x+1].img == grid.blockOnGoal || 
        grid.tiles[y][x].img == grid.blockOnGoal && grid.tiles[y][x+1].img == grid.block ||
        grid.tiles[y][x].img == grid.block && grid.tiles[y][x+1].img == grid.blockOnGoal ||
        grid.tiles[y][x].img == grid.block && grid.tiles[y][x+1].img == grid.wall){
            grid.tiles[y][x-1].img = grid.player
    }
       else if(grid.tiles[y][x].img == grid.block && grid.tiles[y][x+1].img != grid.wall  ||grid.tiles[y][x].img == grid.blockOnGoal){
        setTimeout(function() {
            grid.pastTile = grid.tiles[y][x-1].img
            grid.tiles[y][x-1].img = grid.ground
            grid.tiles[y][x+1].img = grid.block
            grid.tiles[y][x].img = grid.player
            grid.moves++
        },delayTime);
        }
        else if(grid.tiles[y][x].img == grid.breakableWall && grid.hasPowerUp == false ){
            console.log('grid is a thin wall')
            grid.tiles[y][x-1].img = grid.player
        }
        else{
            setTimeout(function() {
            grid.pastTile = grid.tiles[y-1][x].img
            grid.tiles[y][x-1].img = grid.ground
            grid.tiles[y][x].img = grid.player
            grid.moves++
        },delayTime);
        }
        console.log(grid.pastTile)
    }
}
        }
    }
}
export function moveLeft(x,y,grid){
    let ableToMove = grid.getItem("isAbleToMove");
    if (ableToMove == 'true'){
        grid.buttonClick();
    grid.actualTile = grid.tiles[y][x].img
    if(grid.player == grid.tiles[y-1][x].img ||
        grid.player == grid.tiles[y+1][x].img ||
        grid.player == grid.tiles[y][x-1].img ||
        grid.player == grid.tiles[y][x+1].img){ /* Finns en liten bug när man trycker sig mot en o samma låda flera gånger så försvinner gubben typ från grid */

   if(grid.actualTile != grid.wall){ /* Logic start here */
                
    if(grid.actualTile == grid.powerUp){
        grid.amountOfPowerUps++
        grid.powerUps = `You have ${grid.amountOfPowerUps} powerups`
        console.log('You have a powerup')
    }
    if(grid.tiles[y][x].img == grid.breakableWall && grid.amountOfPowerUps > 0){
        grid.tiles[y][x].img = grid.ground
        grid.amountOfPowerUps--
        grid.powerUps = `You have ${grid.amountOfPowerUps} powerups`
    }
    else if(grid.tiles[y][x].img == grid.breakableWall && grid.hasPowerUp == false){
        console.log('You have no powerup')
    } 
    if(grid.tiles[y][x+1].img == grid.player) { /* Gubben går åt höger */
        grid.player = "/images/playerLeft.png"
        if( grid.tiles[y][x].img == grid.block && grid.tiles[y][x-1].img == grid.block ||
            grid.tiles[y][x].img == grid.block && grid.tiles[y][x-1].img == grid.breakableWall ||
            grid.tiles[y][x].img == grid.blockOnGoal && grid.tiles[y][x-1].img == grid.wall || 
            grid.tiles[y][x].img == grid.blockOnGoal && grid.tiles[y][x-1].img == grid.blockOnGoal || 
            grid.tiles[y][x].img == grid.blockOnGoal && grid.tiles[y][x-1].img == grid.block ||
            grid.tiles[y][x].img == grid.block && grid.tiles[y][x-1].img == grid.blockOnGoal ||
            grid.tiles[y][x].img == grid.block && grid.tiles[y][x-1].img == grid.wall){
                grid.tiles[y][x+1].img = grid.player
        }
        else if(grid.tiles[y][x].img == grid.block && grid.tiles[y][x-1].img != grid.wall  || grid.tiles[y][x].img == grid.blockOnGoal){
            setTimeout(function() {
            grid.pastTile = grid.tiles[y][x+1].img
            grid.tiles[y][x+1].img = grid.ground
            grid.tiles[y][x-1].img = grid.block
            grid.tiles[y][x].img = grid.player
            grid.moves++
            },delayTime);
            
        }
        else if(grid.tiles[y][x].img == grid.breakableWall && grid.hasPowerUp == false ){
            console.log('grid is a thin wall')
            grid.tiles[y][x+1].img = grid.player
        }
        else{
            setTimeout(function() {
            grid.pastTile = grid.tiles[y-1][x].img
            grid.tiles[y][x+1].img = grid.ground
            grid.tiles[y][x].img = grid.player
            grid.moves++
            },delayTime);
        }
        console.log(grid.pastTile)
    }
}
        }
        
}
}
/* Försöker omformatera metoderna till en metod för att spara kod */