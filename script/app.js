import mainHead from './header.js'
import sokobanGame from './Sokoban.js'

export default{
    components:{
        mainHead,
        sokobanGame
    },
    template: `
    <div id="content">
        <mainHead></mainHead>
        <sokobanGame></sokobanGame>
    </div>
    `
}