
export default{
    

props:['position'],
template: `
    <img :src="img" ref="tile" width="30" height="30" class="cell" @click="movePlayerOnClick">
`,
methods:{
    movePlayerOnClick(){
        this.img = "images/img9.png"
        console.log('click test')
    }
},
data(){
    return{
        img: ''
    }
},
created(){
    this.img = this.position.img
}
}