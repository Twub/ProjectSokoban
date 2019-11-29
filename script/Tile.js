
export default{
    

props:['position'],
template: `
    <span ref="tile" id="grids" @click="createTile" class="tile" width="30" height="30"></span>
`,
methods:{
    createTile(){
        console.log(this.position.x,  this.position.y)
    }
},
mounted(){
    this.$refs.tile.style.setProperty('background-image',`url(${this.position.img})`)
}
}