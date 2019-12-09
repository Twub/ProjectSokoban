import mainHead from './header.js'
import sokobanGame from './Game/Sokoban.js'
import arrowKeys from './Controls/arrowKeys.js'
import storage from './utility/StorageUtility.js';


export default{
    mixins: [storage],
    components:{
        mainHead,
        sokobanGame,
    },
    template: `
    <div id="content">
        <mainHead></mainHead>
        <sokobanGame></sokobanGame>
    </div>
    `,
    mounted(){
        let ableToMove = this.getItem("isAbleToMove");
        if(ableToMove == null || ableToMove == 'true'){
            this.addItem("isAbleToMove", false);
        }
    }
}