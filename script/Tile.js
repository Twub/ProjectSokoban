
export default{
    

props:['position'],
template: `
    <img :src="image" @click="createTile" id="grids" width="30" height="30">
`,
methods:{
    createTile(){
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