import mainHead from './header.js'
import sokobanGame from './Sokoban.js'


export default{
    components:{
        mainHead,
        sokobanGame,
        arrowKeys,
    },
    template: `
    <div id="content">
        <mainHead></mainHead>
        <sokobanGame></sokobanGame>
        <arrowKeys />
    </div>
    `
}