export default {
    data(){
        return{
        arrowCords:{
            x: 0,
            y: 0
        }
    }
    },
    methods: {
        moveLeft: function(){
            console.log("Left");
            this.arrowCords.x=(this.arrowCords.x)+1;
            console.log(this.arrowCords.x)
            console.log(this.arrowCords.y)
            this.$emit('moveleft',this.arrowCords)
            console.log("hejdå")
 
        },
        moveRight: function(){
            console.log("Right");
            this.arrowCords.x=(this.arrowCords.x)-1;
            console.log(this.arrowCords.x)
            console.log(this.arrowCords.y)
            this.$emit('moveRight',this.arrowCords)
        },
        moveUp: function(){
            console.log("Up");
            this.arrowCords.y=(this.arrowCords.y)-1;
            console.log(this.arrowCords.x)
            console.log(this.arrowCords.y)
            
        },
        moveDown: function(){
            console.log("Down");
            this.arrowCords.y=(this.arrowCords.y)+1;
            console.log(this.arrowCords.x)
            console.log(this.arrowCords.y)
            
        }
    }
}

// TODO give this class access to change/move the tiles.