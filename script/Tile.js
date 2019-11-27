
export default{
    

props:['position'],
template: `
    <img src="images/img24.png" @click="movePlayer" id="grids">
`,
methods:{
    movePlayer(){
        alert(this.position.x + " "+ this.position.y)
        console.log(this.position.x, this.position.y)
    }
}
}