function createMap(grid){
    let revealGrid = grid.displayGrid
    if(grid.revealGrid = true){
        if(grid.difficulty == "Easy"){
            let size = 10
            for(let col = 0; col < size; col++){
                grid.tiles[col] = []
                for(let row = 0; row < size; row++){
                    let position = {
                        x: row,
                        y: col,
                    }
                    grid.tiles[col].push(position)
                        switch(grid.map1[col][row]){
                            case 'W':{
                                grid.tiles[col][row].img = grid.wall
                                grid.tiles[col][row].class = "small"
                                break
                            }
                            case 'P':{
                                grid.tiles[col][row].img = grid.player
                                grid.tiles[col][row].class = "small"                                 
                                break
                            }
                            case 'B':{
                                grid.tiles[col][row].img = grid.block
                                grid.tiles[col][row].class = "small"                                  
                                break
                            }
                            case 'G':{
                                grid.tiles[col][row].img = grid.ground
                                grid.tiles[col][row].class = "small"                                 
                                break
                            }
                            case 'F':{
                                grid.tiles[col][row].img = grid.boxGoal
                                grid.tiles[col][row].class = "small"               
                                break
                            }
                            case 'S':{
                                grid.tiles[col][row].img = grid.blackBox
                                grid.tiles[col][row].class = "small"
                                break
                            }
                            case 'U':{
                                grid.tiles[col][row].img = grid.powerUp
                                grid.tiles[col][row].class = "small"
                                break
                            }
                            case 'D':{
                                grid.tiles[col][row].img = grid.breakableWall
                                grid.tiles[col][row].class = "small"
                                break
                            }

                }         
}

}
        }
        else if(grid.difficulty == "Normal"){
            let size = 10
            for(let col = 0; col < size; col++){
                grid.tiles[col] = []
                for(let row = 0; row < size; row++){
                    let position = {
                        x: row,
                        y: col,
                    }
                    grid.tiles[col].push(position)
                        switch(grid.map2[col][row]){
                            case 'W':{
                                grid.tiles[col][row].img = grid.wall
                                grid.tiles[col][row].class = "small"
                                break
                            }
                            case 'P':{
                                grid.tiles[col][row].img = grid.player
                                grid.tiles[col][row].class = "small"                                 
                                break
                            }
                            case 'B':{
                                grid.tiles[col][row].img = grid.block
                                grid.tiles[col][row].class = "small"                                  
                                break
                            }
                            case 'G':{
                                grid.tiles[col][row].img = grid.ground
                                grid.tiles[col][row].class = "small"                                 
                                break
                            }
                            case 'F':{
                                grid.tiles[col][row].img = grid.boxGoal
                                grid.tiles[col][row].class = "small"               
                                break
                            }
                            case 'S':{
                                grid.tiles[col][row].img = grid.blackBox
                                grid.tiles[col][row].class = "small"
                                break
                            }
                            case 'U':{
                                grid.tiles[col][row].img = grid.powerUp
                                grid.tiles[col][row].class = "small"
                                break
                            }
                            case 'D':{
                                grid.tiles[col][row].img = grid.breakableWall
                                grid.tiles[col][row].class = "small"
                                break
                            }
                        
                }
                
                
}

}
        }
        else if(grid.difficulty == "Hard"){
            let size = 13
            for(let col = 0; col < size; col++){
                grid.tiles[col] = []
                for(let row = 0; row < size; row++){
                    let position = {
                        x: row,
                        y: col,
                    }
                    grid.tiles[col].push(position)
                        switch(grid.map3[col][row]){
                            case 'W':{
                                grid.tiles[col][row].img = grid.wall
                                grid.tiles[col][row].class = "medium"
                                break
                            }
                            case 'P':{
                                grid.tiles[col][row].img = grid.player
                                grid.tiles[col][row].class = "medium"
                                break
                            }
                            case 'B':{
                                grid.tiles[col][row].img = grid.block
                                grid.tiles[col][row].class = "medium"
                                break
                            }
                            case 'G':{
                                grid.tiles[col][row].img = grid.ground
                                grid.tiles[col][row].class = "medium"
                                break
                            }
                            case 'F':{
                                grid.tiles[col][row].img = grid.boxGoal
                                grid.tiles[col][row].class = "medium"
                                break
                            }
                            case 'S':{
                                grid.tiles[col][row].img = grid.blackBox
                                grid.tiles[col][row].class = "medium"
                                break
                            }  
                            case 'U':{
                                grid.tiles[col][row].img = grid.powerUp
                                grid.tiles[col][row].class = "medium"
                                break
                            } 
                            case 'D':{
                                grid.tiles[col][row].img = grid.breakableWall
                                grid.tiles[col][row].class = "medium"
                                break
                            }
                }            
}

}
        }
        if(grid.difficulty == "Easy"){ /* grid section makes checking for boxGoal easier and dynamic */
            /* Ändra goals baserat på hur många 'F' det finns och grid:en skall vara samma för respektive map och svårighetsgrad */
            grid.goals = 2
            grid.grid = [ /* Skall ni ändra map layout så ändra också grid:en i data */
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
        else if(grid.difficulty == "Normal"){
            grid.goals = 4
            grid.grid = [
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
        else if(grid.difficulty == "Hard"){
            grid.goals = 2
            grid.grid = [
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
}