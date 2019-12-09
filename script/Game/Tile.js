
export default{
    

props:['position'],
template: `
    <img :src="position.img" ref="tile" width="30" height="30" :class="position.class" @click="movePlayerOnClick">
`,
methods:{
    movePlayerOnClick(){
        console.log(this.position.x, this.position.y)
        const x = this.position.x
        const y = this.position.y
        this.$emit('movePlayerOnClick',x,y)
    }
},
mounted(){
    this.$refs.tile.style.setProperty('background-image',`url(${this.position.img})`)
},
watch:{
    position:{
        deep: true,
        handler(){
            this.$refs.tile.style.setProperty('background-image',`url(${this.position.img})`)
        }
    }
}
}