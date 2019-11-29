
export default{
    

props:['position'],
template: `
    <img :src="position.img" ref="tile" width="30" height="30" id="grids">
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