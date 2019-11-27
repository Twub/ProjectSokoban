
export default{
    

props:['position'],
template: `
    <img :src="position.image" @click="movePlayer" id="grids" width="30" height="30">
`,
methods:{
    movePlayer(){
        alert(this.position.x + " "+ this.position.y)
        console.log(this.position.x, this.position.y)
    }
}
}