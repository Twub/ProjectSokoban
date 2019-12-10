
export default{
    

props:['position'],
template: `
    <img :src="position.img" :class="position.class" @click="movePlayerOnClick">
`,
methods:{
    movePlayerOnClick(){
        console.log(this.position.x, this.position.y)
        const x = this.position.x
        const y = this.position.y
        this.$emit('movePlayerOnClick',x,y)
    }
},
}