
export default{
    

props:['position'],
template: `
    <span ref="tile" id="grids" @click="createTile" class="tile"></span>
`,
methods:{
    createTile(){
        this.image= "/images/img2.png"
    }
},
mounted(){
    this.$refs.tile.style.setProperty('background-image',`url(${this.position.image})`)
}
}