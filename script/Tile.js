
export default{
    

props:['position'],
template: `
    <img :src="position.img" ref="tile" width="30" height="30" class="cell" @click="movePlayerOnClick">
`,
methods:{
    movePlayerOnClick(){
        this.$emit('movePlayerOnClick',this.position.x,this.position.y)
        console.log(this.position.x, this.position.y)
    }
},
mounted(){
    this.$refs.tile.style.setProperty('background-image',`url(${this.position.img})`)
}
}