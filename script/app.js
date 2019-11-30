import mainHead from './header.js'
import sokobanGame from './Sokoban.js'
import arrowKeys from './Controls/arrowKeys.js'

export default{
    components:{
        mainHead,
        sokobanGame,
        arrowKeys
    },
    template: `
    <div id="content">
        <mainHead></mainHead>
        <sokobanGame></sokobanGame>
<<<<<<< HEAD
=======
        <arrowKeys />
        
>>>>>>> devMartin
    </div>
    `
}