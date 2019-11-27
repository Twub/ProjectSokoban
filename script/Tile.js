
export default{
    

props:['position'],
template: `
    <img :src="image" @click="movePlayer" id="grids" width="30" height="30">
`,
methods:{
    movePlayer(){
        this.image= "/images/img2.png"
    }
},
data(){
    return{
        image: ''
    }
},
created(){
    this.image=this.position.image
}
}